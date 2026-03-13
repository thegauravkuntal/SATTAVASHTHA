/* NAVBAR LOAD */

fetch("components/navbar.html")
.then(res => res.text())
.then(data => {

const nav = document.getElementById("navbar");
if(nav) nav.innerHTML = data;

/* HAMBURGER */

const toggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if(toggle){
toggle.addEventListener("click", () => {
navMenu.classList.toggle("active");
});
}

});


/* CONTACT */

fetch("components/contact.html")
.then(res => res.text())
.then(data => {
const contact = document.getElementById("contact");
if(contact) contact.innerHTML = data;
});


/* FOOTER */

fetch("components/footer.html")
.then(res => res.text())
.then(data => {
const footer = document.getElementById("footer");
if(footer) footer.innerHTML = data;
});


/* HERO SLIDER */

document.addEventListener("DOMContentLoaded", function(){

let index = 0;
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

if(!slides) return;

const total = images.length;

setInterval(function(){

index++;

slides.style.transition = "transform 0.6s ease-in-out";
slides.style.transform = "translateX(-" + index * 100 + "%)";

if(index === total - 1){

setTimeout(function(){

slides.style.transition = "none";
slides.style.transform = "translateX(0)";
index = 0;

},600);

}

},3000);

});


/* SCROLL ANIMATION */

const whyItems = document.querySelectorAll(".why-item");

window.addEventListener("scroll", () => {

whyItems.forEach(item => {

const position = item.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.2;

if(position < screenPosition){
item.classList.add("show");
}

});

});


/* REVEAL ANIMATION */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

reveals.forEach((el)=>{

const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;
const revealPoint = 120;

if(elementTop < windowHeight - revealPoint){
el.classList.add("active");
}

});

});