const heading = document.getElementById('hoverHeader');

heading.addEventListener('mouseenter', () => {
    heading.style.color = 'blue'; // Change to your desired color
});

heading.addEventListener('mouseleave', () => {
    heading.style.color = ''; // Reset to original color
});