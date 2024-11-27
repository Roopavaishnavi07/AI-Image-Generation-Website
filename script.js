document.getElementById('generate-button').addEventListener('click', () => {
    // Placeholder for AI image generation logic
    const img = document.createElement('img');
    img.src = 'https://via.placeholder.com/150'; // Placeholder image URL
    const container = document.getElementById('image-container');
    container.innerHTML = ''; // Clear previous images
    container.appendChild(img);
});
