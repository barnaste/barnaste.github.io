/* MOUSE HOVER EFFECT */
let home = document.getElementById("home");
let circ = document.querySelector(".circle");
let rad = circ.clientWidth / 2;

// change the position of the circle when moving around home
home.addEventListener("mousemove", function(e) {
    circ.style.top = e.pageY - rad + "px";
    circ.style.left = e.pageX - rad + "px";
});

/* PARALLAX SCROLLING */
let bg = document.getElementById("bg");
let fg = document.getElementById("fg");
let text = document.getElementById('home-text'),
    style = window.getComputedStyle(text),
    txtop = style.getPropertyValue('top');

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