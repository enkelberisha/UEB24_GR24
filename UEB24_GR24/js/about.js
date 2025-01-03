$('.faq-question').on('click', function() {
    const $answer = $(this).next();
    
    $answer.toggleClass('open');
});
