const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        
        if (answer.classList.contains('open')) {
            answer.classList.remove('open');
        } else {
            answer.classList.add('open');
        }
    });
});

