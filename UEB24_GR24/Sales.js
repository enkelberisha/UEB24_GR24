function changeImage(element) {
    // Get the main image element by ID
    var mainImage = document.getElementById('mainImage');
    
    // Update the main image source with the clicked image's source
    var tempImage=mainImage.src;
    mainImage.src = element.src;
element.src=tempImage;
}