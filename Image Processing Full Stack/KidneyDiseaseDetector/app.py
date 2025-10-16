from flask import Flask, render_template, request, jsonify
import os
from werkzeug.utils import secure_filename
from ultralytics import YOLO
import cv2
import numpy as np
from PIL import Image
import base64
from io import BytesIO

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max file size
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

# Create uploads folder if it doesn't exist
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Load all models
models = {
    'cyst': YOLO('models/cyst.pt'),
    'kidney': YOLO('models/kidney.pt'),
    'stone': YOLO('models/stone.pt'),
    'tumor': YOLO('models/tumor.pt')
}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

def process_image_with_models(image_path):
    """Process image through all models and return detections"""
    results = {}
    
    # Read the original image
    img = cv2.imread(image_path)
    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    
    # Define which class each model should detect
    model_target_classes = {
        'cyst': 'cyst',
        'tumor': 'tumor',
        'stone': 'stone',
        'kidney': 'kidney'
    }
    
    # Define colors for each model
    model_colors = {
        'cyst': (255, 255, 0),    # Yellow
        'tumor': (255, 0, 255),   # Magenta
        'stone': (255, 0, 0),     # Red
        'kidney': (0, 255, 0)     # Green
    }
    
    for model_name, model in models.items():
        # Run inference with minimum confidence of 0.45
        predictions = model(image_path, conf=0.45)
        
        detections = []
        target_class = model_target_classes[model_name]
        
        for pred in predictions:
            boxes = pred.boxes
            for box in boxes:
                # Get bounding box coordinates
                x1, y1, x2, y2 = box.xyxy[0].cpu().numpy()
                confidence = float(box.conf[0])
                class_id = int(box.cls[0])
                class_name = model.names[class_id].lower()
                
                # Only include detections that match the target class for this model
                # and have confidence >= 0.45
                if class_name == target_class and confidence >= 0.45:
                    detections.append({
                        'class': class_name,
                        'confidence': confidence,
                        'bbox': [float(x1), float(y1), float(x2), float(y2)]
                    })
                    
                    # Draw bounding box on image
                    color = model_colors[model_name]
                    cv2.rectangle(img_rgb, (int(x1), int(y1)), (int(x2), int(y2)), color, 3)
                    label = f"{class_name.upper()} ({confidence:.2%})"
                    
                    # Draw label background
                    (text_width, text_height), _ = cv2.getTextSize(label, cv2.FONT_HERSHEY_SIMPLEX, 0.6, 2)
                    cv2.rectangle(img_rgb, (int(x1), int(y1) - text_height - 10), 
                                (int(x1) + text_width, int(y1)), color, -1)
                    cv2.putText(img_rgb, label, (int(x1), int(y1) - 5), 
                               cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 0, 0), 2)
        
        if detections:
            results[model_name] = detections
    
    # Convert image to base64 for display
    pil_img = Image.fromarray(img_rgb)
    buffered = BytesIO()
    pil_img.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue()).decode()
    
    return results, img_str

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        # Process image through all models
        detections, processed_image = process_image_with_models(filepath)
        
        # Clean up uploaded file
        os.remove(filepath)
        
        return jsonify({
            'success': True,
            'detections': detections,
            'image': processed_image
        })
    
    return jsonify({'error': 'Invalid file type'}), 400

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
