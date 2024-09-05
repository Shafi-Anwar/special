// JavaScript for handling special button click
document.addEventListener('DOMContentLoaded', () => {
    const specialButton = document.getElementById('special-button');
    
    // Add click event listener to the button
    specialButton.addEventListener('click', () => {
        window.location.href = 'letter.html';
    });
});
