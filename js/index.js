/* MOUSE HOVER EFFECT */
const home = document.getElementById("home");
const circ = document.querySelector(".circle");
const rad = circ.clientWidth / 2;
let clX = 0,
    clY = 0;

// change the position of the circle when moving around home
home.addEventListener("mousemove", function(e) {
    circ.style.top = e.clientY - rad + "px";
    circ.style.left = e.clientX - rad + "px";
    clX = e.clientX;
    clY = e.clientY;
});

/* PARALLAX SCROLLING */
const bg = document.getElementById("bg");
const fg = document.getElementById("fg");
const text = document.getElementById('home-text'),
    style = window.getComputedStyle(text);
const txtop = style.getPropertyValue('top');

window.addEventListener('scroll', function(e) {
    var value = window.scrollY;
    bg.style.top = value * 0.3 + 'px';
    fg.style.top = value * 0.1 + 'px';
    text.style.top = parseInt(txtop) + value * 0.6 + 'px';
})

/* CUSTOMIZED MARGINS */
let abtrow = document.getElementById("about").querySelector(".row");
abtrow.style.marginLeft = Math.max(document.documentElement.clientWidth/75 - 5/7, 18) + 'vw';
abtrow.style.marginRight = Math.max(document.documentElement.clientWidth/75 - 5/7, 18) + 'vw';