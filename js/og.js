var object = document.getElementById('item');

object.onmouseenter=function(){
    var x = Math.floor(Math.random()*500);
    var y = Math.floor(Math.random()*500);
    object.style.top = x + 'px';
    object.style.left = y + 'px';
};