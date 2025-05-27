document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.reveal');

    function checkReveal() {
        reveals.forEach(reveal => {
            const revealPosition = reveal.getBoundingClientRect();

            if (revealPosition.top < window.innerHeight && revealPosition.bottom > 0) {
                reveal.classList.add('reveal_active');
            } else {
                reveal.classList.remove('reveal_active');
            }
        });
    }

    checkReveal();

    window.addEventListener('scroll', checkReveal);
});