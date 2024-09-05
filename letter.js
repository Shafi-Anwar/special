// JavaScript for letter animation
window.addEventListener('load', () => {
    const pen = document.querySelector('.pen');
    const letter = document.querySelector('.letter');

    // Trigger the pen animation
    pen.classList.add('draw');

    // Show the letter after the pen animation is complete
    pen.addEventListener('animationend', () => {
        letter.classList.add('open');
    });
});
