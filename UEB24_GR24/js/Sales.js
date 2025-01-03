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
                const button = section.querySelector('button');

                // If a button is found, hide it
                if (button) {
                    button.style.display = 'none';
                }
            }
        });
    }

    
    addStarToPremiumDivs();
    hideButtonInNonPremiumSections();

});
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('moreInfoModal');
    const closeModal = modal.querySelector('.close');
    const openModalButtons = document.querySelectorAll('.openModalBtn');
    const modalDetails = document.getElementById('modalDetails');

    // Function to open the modal with more info
    function openModal() {
        modalDetails.innerHTML = `
            <p><strong>Year:</strong> 2015</p>
            <p><strong>Manufacturer:</strong> LEARJET</p>
            <p><strong>Condition:</strong> Used</p>
            <p><strong>Total Time:</strong> 1550 hours</p>
            <p><strong>Engine Maintenance Program:</strong> MSP Gold</p>
            <p><strong>Avionics:</strong> Garmin G5000 Avionics System</p>
            <p><strong>Exterior:</strong> Matterhorn white with silver, gray, orange & blue.</p>
        `;
        modal.style.display = 'flex'; // Show the modal
    }

    // Add event listeners to open modal when button is clicked
    openModalButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    // Close modal when close button is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
