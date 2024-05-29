let a = document.getElementById('aaa');
a.addEventListener('click', () => {
    var ia = Number(document.querySelector('#ia>input').value);
    if (ia === 0) {
        var g = 'Правильно!';
        document.getElementById("aa").innerHTML = g;
    } else {
        var g = 'Неправильно!';
        document.getElementById("aa").innerHTML = g;
    }
});
let b = document.getElementById('b');
b.addEventListener('click', () => {
    var ib = Number(document.querySelector('#ib>input').value);
    if (ib === 11) {
        var g = 'Правильно!';
        document.getElementById("bb").innerHTML = g;
    } else {
        var g = 'Неправильно!';
        document.getElementById("bb").innerHTML = g;
    }
});
let c = document.getElementById('c');
c.addEventListener('click', () => {
    var ic = Number(document.querySelector('#ic>input').value);
    if (ic === 54) {
        var g = 'Правильно!';
        document.getElementById("cc").innerHTML = g;
    } else {
        var g = 'Неправильно!';
        document.getElementById("cc").innerHTML = g;
    }
});
let d = document.getElementById('d');
d.addEventListener('click', () => {
    var id = Number(document.querySelector('#id>input').value);
    if (id === 5050) {
        var g = 'Правильно!';
        document.getElementById("dd").innerHTML = g;
    } else {
        var g = 'Неправильно!';
        document.getElementById("dd").innerHTML = g;
    }
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

