const signupbutton = document.getElementById('signupButton');
const signupmodel = document.getElementById('signupModel');
const body = document.getElementById('Body');
const pad = document.getElementById('navv')


signupbutton.addEventListener('click',function(){
    signupmodel.classList.add('show')
    body.classList.add('shown')
    pad.classList.add('shoow')
})


const loginbutton = document.getElementById('loginButton');
const loginmodel = document.getElementById('loginModel');
const padd = document.getElementById('navv')

loginbutton.addEventListener('click',function(){
    loginmodel.classList.add('shownn')
    body.classList.add('shown')
    padd.classList.add('shoow')
})


const Scrolllinks = document.getElementsByClassName('scroll-link');
//  const Menu6 = document.getElementById('menuSix')
// const Menu7 = document.getElementById('menuSeven')
// const Menu8 = document.getElementById('menuEight')
// const menu9 = document.getElementById('menuNine')
for(let i = 0; i <Scrolllinks.length; i++) {
    Scrolllinks[i].addEventListener('click',function(event){
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if(targetElement){
            targetElement.scrollIntoView({behavior: 'smooth'});
            
            //  Menu6.classList.add('moved')
            //  Menu7.classList.add('moved')
            //  Menu8.classList.add('mov')
            // menu9.classList.add('moved')

        }
    });
}

// let Box = document.querySelector('.box');
// window.onmousemove = function (e) {
//     let x = e.clientX/3;
//     Box.style.transform = "perspective(1000px) rotateY(" + x + "deg)";
// }


const pwd = document.getElementById("pwd");
const chk = document.getElementById("chk");

chk.onchange = function (e) {
    pwd.type =chk.checked ? "text" : "password";
};

const pw = document.getElementById("pw");
const ch = document.getElementById("ch");

ch.onchange = function (e) {
    pw.type =ch.checked ? "text" : "password";
};


const slides = document.querySelectorAll(".slide");
let currentSlideIndex = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[index].style.display = "block";
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

showSlide(currentSlideIndex);
setInterval(nextSlide, 3000);

