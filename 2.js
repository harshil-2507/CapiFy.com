document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.getElementById('scrollContainer');
    
  
    const emptySpace = document.createElement('div');
    emptySpace.style.height = '2000px'; // Set this to the desired scrollable height
    scrollContainer.appendChild(emptySpace);
    

    document.body.style.overflow = 'auto';
});
window.addEventListener('load', () => {
    const gradientDiv = document.getElementById('gradientBackground');

    // Example function to change gradient dynamically
    function changeGradient(color1, color2) {
        gradientDiv.style.background = `linear-gradient(${color1}, ${color2})`;
    }

    // Change the gradient after 3 seconds for demonstration
    setTimeout(() => {
        changeGradient('darkblue', 'black');
    }, 3000);
});

