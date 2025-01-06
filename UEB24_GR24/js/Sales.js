function changeImage(element) {
    // Get the main image element by ID
    const section = element.closest('.jet-desc');
    const mainImage = section.querySelector('.mainImage');
    // Update the main image source with the clicked image's source
    var tempImage = mainImage.src;
    mainImage.src = element.src;
    element.src = tempImage;
}

document.addEventListener('DOMContentLoaded', () => {
    function addStarToPremiumDivs() {
        // Select all div elements on the page
        const divs = document.querySelectorAll('section');

        // Loop through each div
        divs.forEach(section => {
            // Check if the div has the 'premium' class
            if (section.classList.contains('premium')) {
                // Create the star element
                const star = document.createElement('span');
                star.textContent = '★'; // Unicode for a star
                star.classList.add('premium-star'); // Add a custom class for styling

                // Append the star to the div
                section.style.position = 'relative'; // Ensure the div can position child elements
        
                
                section.appendChild(star);
            }else{
                const button = section.querySelector('.button1');

                // If a button is found, hide it
                if (button) {
                    button.style.display = 'none';
                }
            }
        });
    }

    
    addStarToPremiumDivs();
    

});
document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');  // Get all modals
    const closeModalButtons = document.querySelectorAll('.close');  // Get all close buttons
    const openModalButtons = document.querySelectorAll('.openModalBtn');  // Get all open modal buttons

    // Function to open the modal associated with the button
    function openModal(event) {
        const button = event.currentTarget;
        const index = Array.from(openModalButtons).indexOf(button);  // Get the index of the clicked button
        const modal = modals[index];  // Get the corresponding modal using the same index
        modal.style.display = 'flex';  // Show the modal
    }

    // Add event listeners to open modal when button is clicked
    openModalButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});





