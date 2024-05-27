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
iimg.addEventListener('click', () => {
    iimmg.style.visibility = 'visible';
    iimg.style.visibility = 'hidden';
});
igg.addEventListener('click', () => {
    imgg.style.visibility = 'visible';
    igg.style.visibility = 'hidden';
});

