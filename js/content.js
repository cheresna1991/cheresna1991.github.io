var img = document.getElementById('igo');
var immg = document.getElementById('go');
var iimg = document.getElementById('igi');
var iimmg = document.getElementById('gi');
var igg = document.getElementById('iga');
var imgg = document.getElementById('ga');
img.addEventListener('click', () => {
    immg.style.visibility = 'visible';
    img.style.visibility = 'hidden';
});
immg.addEventListener('click', () => {
    img.style.visibility = 'visible';
    immg.style.visibility = 'hidden';
});
iimg.addEventListener('click', () => {
    iimmg.style.visibility = 'visible';
    iimg.style.visibility = 'hidden';
});
iimmg.addEventListener('click', () => {
    iimg.style.visibility = 'visible';
    iimmg.style.visibility = 'hidden';
});
igg.addEventListener('click', () => {
    imgg.style.visibility = 'visible';
    igg.style.visibility = 'hidden';
});
imgg.addEventListener('click', () => {
    igg.style.visibility = 'visible';
    imgg.style.visibility = 'hidden';
});
document.addEventListener("DOMContentLoaded", function() {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
    }

    const toggleButton = document.getElementById("toggle-theme");
    const resetButton = document.getElementById("reset-theme");

    toggleButton.addEventListener("click", function() {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });

    resetButton.addEventListener("click", function() {
        localStorage.removeItem("theme");
        document.documentElement.setAttribute("data-theme", "light");
    });
});
