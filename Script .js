const clickableBox = document.getElementById('clickable-box');
const scoreDisplay = document.getElementById('score');
let score = 0;

clickableBox.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    // Optional: Change box position randomly for more challenge
    const containerWidth = clickableBox.parentElement.clientWidth;
    const containerHeight = clickableBox.parentElement.clientHeight;
    const newX = Math.random() * (containerWidth - clickableBox.offsetWidth);
    const newY = Math.random() * (containerHeight - clickableBox.offsetHeight);
    clickableBox.style.position = 'relative'; // Ensure positioning works
    clickableBox.style.left = `${newX}px`;
    clickableBox.style.top = `${newY}px`;
});
