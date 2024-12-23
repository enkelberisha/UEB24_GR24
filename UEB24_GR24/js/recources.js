let currentSlide = 1;
const slides = document.querySelectorAll('.slideshow-image');

function showNextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
}

setInterval(showNextSlide, 2000);

function openTab(event, tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');

    tabs.forEach(tab => (tab.style.display = 'none'));
    buttons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
}


const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const allContents = document.querySelectorAll(".accordion-content");

    // Close all other accordion items
    allContents.forEach(c => {
      if (c !== content) {
        c.style.maxHeight = null;
      }
    });

    // Toggle current content
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});