var object = document.getElementById('item');
var a = document.getElementById('scream')
object.onmouseenter=function(){
    var x = Math.floor(Math.random()*500);
    var y = Math.floor(Math.random()*500);
    object.style.top = x + 'px';
    object.style.left = y + 'px';
};
object.addEventListener('click', () => {
    a.style.visibility = 'visible';
    object.style.visibility = 'hidden';
});