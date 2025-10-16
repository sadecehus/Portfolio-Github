const fileInput = document.getElementById('fileInput');
const uploadBox = document.getElementById('uploadBox');
const loadingSection = document.getElementById('loadingSection');
const resultsSection = document.getElementById('resultsSection');

// File input change handler
fileInput.addEventListener('change', handleFileSelect);

// Drag and drop handlers
uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.classList.add('dragover');
});

uploadBox.addEventListener('dragleave', () => {
    uploadBox.classList.remove('dragover');
});

uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
});

function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        handleFile(file);
    }
}

function handleFile(file) {
    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!validTypes.includes(file.type)) {
        alert('Please upload a valid image file (JPG, JPEG, or PNG)');
        return;
    }

    // Validate file size (max 16MB)
    if (file.size > 16 * 1024 * 1024) {
        alert('File size must be less than 16MB');
        return;
    }

    uploadImage(file);
}

function uploadImage(file) {
    const formData = new FormData();
    formData.append('file', file);

    // Show loading, hide upload section
    document.querySelector('.upload-section').style.display = 'none';
    loadingSection.style.display = 'block';
    resultsSection.style.display = 'none';

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        loadingSection.style.display = 'none';
        
        if (data.success) {
            displayResults(data);
        } else {
            alert('Error: ' + (data.error || 'Unknown error occurred'));
            resetUpload();
        }
    })
    .catch(error => {
        console.error('Error:', error);
        loadingSection.style.display = 'none';
        alert('An error occurred while processing the image');
        resetUpload();
    });
}

function displayResults(data) {
    // Display processed image
    const processedImage = document.getElementById('processedImage');
    processedImage.src = 'data:image/png;base64,' + data.image;

    // Display detections
    const detectionsList = document.getElementById('detectionsList');
    detectionsList.innerHTML = '';

    const detections = data.detections;
    
    if (Object.keys(detections).length === 0) {
        detectionsList.innerHTML = `
            <div class="no-detections">
                ✅ No kidney diseases detected in this image. 
                The image appears to be healthy.
            </div>
        `;
    } else {
        for (const [modelName, detectionArray] of Object.entries(detections)) {
            const card = document.createElement('div');
            card.className = `detection-card ${modelName}`;
            
            let detectionHTML = `
                <h4>🔍 ${modelName.toUpperCase()}</h4>
            `;
            
            detectionArray.forEach((detection, index) => {
                detectionHTML += `
                    <div class="detection-item">
                        <p><strong>Detection ${index + 1}:</strong> ${detection.class}</p>
                        <p class="confidence">Confidence: ${(detection.confidence * 100).toFixed(2)}%</p>
                        <p style="font-size: 0.9em; color: #555;">
                            Location: [${detection.bbox.map(v => v.toFixed(0)).join(', ')}]
                        </p>
                    </div>
                `;
            });
            
            card.innerHTML = detectionHTML;
            detectionsList.appendChild(card);
        }
    }

    resultsSection.style.display = 'block';
}

function resetUpload() {
    document.querySelector('.upload-section').style.display = 'block';
    loadingSection.style.display = 'none';
    resultsSection.style.display = 'none';
    fileInput.value = '';
}
