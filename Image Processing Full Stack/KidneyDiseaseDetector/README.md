# 🏥 Kidney Disease Detection System

<div align="center">

![Python](https://img.shields.io/badge/Python-3.13-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.5-black.svg)
![YOLOv11](https://img.shields.io/badge/YOLOv11-Ultralytics-00FFFF.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

**An advanced AI-powered medical imaging system for detecting kidney diseases using state-of-the-art deep learning models**

[Features](#-features) • [Models](#-ai-models) • [Installation](#-installation) • [Usage](#-usage) • [Architecture](#-architecture) • [Research](#-research)

</div>

---

## 📋 Overview

This project is a comprehensive web-based system that leverages cutting-edge artificial intelligence to detect and classify kidney diseases from medical images. The system employs four specialized YOLOv11 models trained specifically for kidney disease detection, achieving exceptional accuracy rates.

### 🎯 Key Highlights

- **4 Specialized AI Models** for different kidney conditions
- **Real-time Detection** with interactive web interface
- **High Accuracy** with mAP@50 scores ranging from 95.2% to 99.5%
- **Modern Tech Stack** featuring Next.js, Flask, and YOLOv11
- **Research-Backed** models presented at international conference

---

## 🤖 AI Models

All models were **custom-trained** using **YOLOv11** (Ultralytics) with **personally labeled datasets**. Each model performs both **segmentation** and **classification** tasks.

### Model Performance Metrics

| Model | Disease Type | mAP@50 | Capabilities |
|-------|-------------|---------|--------------|
| `kidney.pt` | Kidney Detection | **99.5%** | Segmentation & Classification |
| `stone.pt` | Kidney Stones | **96.7%** | Segmentation & Classification |
| `cyst.pt` | Kidney Cysts | **95.2%** | Segmentation & Classification |
| `tumor.pt` | Kidney Tumors | **95.3%** | Segmentation & Classification |

### Training Details

- **Framework:** YOLOv11 (Ultralytics)
- **Training:** Custom training pipeline developed by researcher
- **Dataset:** Personally curated and labeled medical imaging dataset
- **Data Annotation:** Manual labeling performed by Hüseyin Koçatürk
- **Confidence Threshold:** 45% (configurable)

---

## 🔬 Research

These models were developed as part of academic research and were presented at:

**ICATCES (International Conference on Advanced Technologies, Computer Engineering and Science)**

The research focused on applying state-of-the-art deep learning techniques for automated kidney disease detection, contributing to the advancement of medical AI diagnostics.

**Researcher:** Hüseyin Koçatürk , Abdullah Aldemir , Selçuk Levent Görgeç
- Custom model training and development
- Dataset curation and annotation
- System architecture and implementation

---

## ✨ Features

### 🎨 Modern User Interface
- **Next.js 15** with TypeScript and Tailwind CSS
- **shadcn/ui** inspired component library
- **Framer Motion** animations for smooth transitions
- **Responsive Design** optimized for all devices
- **Drag & Drop** file upload functionality

### 🧠 AI-Powered Detection
- Multi-model architecture for comprehensive analysis
- Real-time image processing
- Bounding box visualization
- Confidence score display
- Disease-specific color coding

### ⚡ Performance
- Fast inference time (<1 second per model)
- Concurrent model processing
- Optimized image preprocessing
- Efficient backend API

### 🔒 Quality Assurance
- 45% minimum confidence threshold
- Class-specific filtering (no false classifications)
- High-precision detection pipeline

---

## 🏗 Architecture

### System Components

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (Next.js)                    │
│  ┌──────────────────────────────────────────────────┐  │
│  │  • React 19 + TypeScript                         │  │
│  │  • Tailwind CSS + Framer Motion                  │  │
│  │  • shadcn/ui Components                          │  │
│  │  • Responsive Design                             │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────┬────────────────────────────────────┘
                     │ HTTP/REST API
┌────────────────────▼────────────────────────────────────┐
│                   Backend (Flask)                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │  • Flask REST API                                │  │
│  │  • Image Processing (OpenCV, PIL)                │  │
│  │  • Model Orchestration                           │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                  AI Models (YOLOv11)                     │
│  ┌──────────────┬──────────────┬──────────────┬──────┐ │
│  │  kidney.pt   │   stone.pt   │   cyst.pt    │tumor │ │
│  │   99.5%      │    96.7%     │    95.2%     │95.3% │ │
│  └──────────────┴──────────────┴──────────────┴──────┘ │
└─────────────────────────────────────────────────────────┘
```

### Technology Stack

**Frontend:**
- Next.js 15.5.5
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide Icons

**Backend:**
- Python 3.13
- Flask 3.1.2
- Ultralytics YOLOv11
- OpenCV 4.12
- NumPy
- Pillow

**AI/ML:**
- YOLOv11 (Ultralytics)
- PyTorch 2.9.0
- torchvision 0.24.0

---

## 📦 Installation

### Prerequisites

- Python 3.13+
- Node.js 18+
- npm or yarn

### Backend Setup

1. **Clone the repository**
```bash
cd /path/to/KidneyDiseaseDetector
```

2. **Create virtual environment** (recommended)
```bash
python3 -m venv venv
source venv/bin/activate  # On macOS/Linux
# or
venv\Scripts\activate  # On Windows
```

3. **Install Python dependencies**
```bash
pip install -r requirements.txt
```

4. **Verify models are in place**
```bash
ls models/
# Should show: cyst.pt kidney.pt stone.pt tumor.pt
```

### Frontend Setup

1. **Navigate to frontend directory**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

---

## 🚀 Usage

### Starting the Application

#### 1. Start Backend Server (Flask)

```bash
# From project root
python3 app.py
```

The Flask API will run on `http://localhost:5001`

#### 2. Start Frontend Server (Next.js)

```bash
# From frontend directory
cd frontend
npm run dev
```

The web interface will be available at `http://localhost:3000`

### Using the System

1. **Open your browser** and navigate to `http://localhost:3000`

2. **Upload an image:**
   - Drag and drop a kidney image onto the upload area, OR
   - Click "Browse Files" to select an image
   - Supported formats: JPG, JPEG, PNG (max 16MB)

3. **View Results:**
   - The AI models will analyze the image in real-time
   - Detected diseases will be highlighted with bounding boxes
   - Each detection shows:
     - Disease type
     - Confidence percentage
     - Bounding box coordinates

4. **Analyze Another Image:**
   - Click "Analyze Another Image" to start a new analysis

---

## 📁 Project Structure

```
KidneyDiseaseDetector/
├── app.py                      # Flask backend API
├── requirements.txt            # Python dependencies
├── README.md                   # Project documentation
│
├── models/                     # AI model files
│   ├── cyst.pt                # Cyst detection model (95.2% mAP@50)
│   ├── kidney.pt              # Kidney detection model (99.5% mAP@50)
│   ├── stone.pt               # Stone detection model (96.7% mAP@50)
│   └── tumor.pt               # Tumor detection model (95.3% mAP@50)
│
├── uploads/                    # Temporary upload directory
│
├── static/                     # Static assets (legacy)
│   ├── css/
│   └── js/
│
├── templates/                  # HTML templates (legacy)
│   └── index.html
│
└── frontend/                   # Next.js frontend
    ├── src/
    │   ├── app/
    │   │   ├── page.tsx       # Main page component
    │   │   ├── layout.tsx     # Root layout
    │   │   ├── globals.css    # Global styles
    │   │   └── api/
    │   │       └── upload/
    │   │           └── route.ts  # Upload API route
    │   │
    │   ├── components/
    │   │   └── ui/            # shadcn-style components
    │   │       ├── button.tsx
    │   │       ├── card.tsx
    │   │       └── badge.tsx
    │   │
    │   └── lib/
    │       └── utils.ts       # Utility functions
    │
    ├── public/                # Static assets
    ├── package.json
    ├── tsconfig.json
    └── next.config.ts
```

---

## 🔧 Configuration

### Backend Configuration (app.py)

```python
# Maximum upload file size
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB

# Allowed file extensions
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

# Confidence threshold for detections
CONFIDENCE_THRESHOLD = 0.45  # 45%

# Server configuration
PORT = 5001
HOST = '0.0.0.0'
DEBUG = True
```

### Frontend Configuration

The frontend automatically connects to the Flask backend at `http://localhost:5001`.

---

## 🎯 API Endpoints

### POST `/upload`

Upload and analyze a medical image.

**Request:**
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body: `file` (image file)

**Response:**
```json
{
  "success": true,
  "detections": {
    "cyst": [
      {
        "class": "cyst",
        "confidence": 0.87,
        "bbox": [120, 80, 350, 280]
      }
    ],
    "tumor": [
      {
        "class": "tumor",
        "confidence": 0.92,
        "bbox": [400, 150, 580, 380]
      }
    ]
  },
  "image": "base64_encoded_image_with_annotations"
}
```

**Error Response:**
```json
{
  "error": "Error message description"
}
```

---

## 🎨 UI Features

### Design System

- **Color Scheme:** Modern gradients with disease-specific color coding
  - Cyst: Yellow/Orange gradient
  - Tumor: Pink/Purple gradient
  - Stone: Red/Orange gradient
  - Kidney: Green/Emerald gradient

- **Typography:** Inter font family for optimal readability

- **Animations:**
  - Fade-in transitions
  - Slide-up effects
  - Scale animations
  - Smooth hover states

### Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast ratios
- Responsive touch targets

---

## 📊 Model Training Information

### Dataset Characteristics

- **Source:** Curated medical imaging dataset
- **Annotation:** Manual labeling by Hüseyin Koçatürk
- **Quality Control:** Rigorous validation process
- **Classes:** Multiple kidney pathology types

### Training Parameters

- **Architecture:** YOLOv11 (latest Ultralytics version)
- **Task:** Object Detection + Segmentation
- **Image Size:** Adaptive (optimized during training)
- **Augmentation:** Standard medical imaging augmentations
- **Trainer:** Hüseyin Koçatürk

---

## 🔬 Research Contribution

This system represents a significant advancement in automated medical diagnosis:

1. **High Accuracy:** Achieved 95%+ mAP@50 across all models
2. **Multi-Task Learning:** Simultaneous segmentation and classification
3. **Clinical Applicability:** Real-world deployment-ready system
4. **Reproducibility:** Well-documented methodology

**Conference Presentation:**
- **Conference:** ICATCSE (International Conference on Advanced Technologies, Computer Engineering and Science)
- **Focus:** Deep Learning for Medical Imaging
- **Contribution:** Novel approach to kidney disease detection
- **Presenter:** Hüseyin Koçatürk

---

## 🛡️ Medical Disclaimer

⚠️ **Important:** This system is designed for research and educational purposes. It should NOT be used as the sole basis for medical diagnosis or treatment decisions. Always consult with qualified healthcare professionals for medical advice.

---

## 👨‍💻 Developer

**Hüseyin Koçatürk**

- Custom YOLOv11 model training and development
- Complete dataset curation and annotation
- Full-stack system architecture and implementation
- Research and ICATCSE conference presentation
- Web application development (Frontend + Backend)

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- **Ultralytics** for the YOLOv11 framework
- **ICATCSE Conference** for the platform to present this research
- Medical imaging community for inspiration and guidance

---

## 🔮 Future Enhancements

- [ ] Integration with DICOM medical imaging standard
- [ ] Support for 3D volumetric analysis
- [ ] Multi-language support
- [ ] Cloud deployment (AWS/Azure/GCP)
- [ ] Mobile application
- [ ] Real-time video analysis
- [ ] Advanced analytics dashboard
- [ ] Integration with hospital information systems

---

<div align="center">

**Made with ❤️ for advancing medical AI**

⭐ Star this repository if you find it useful!

</div>
