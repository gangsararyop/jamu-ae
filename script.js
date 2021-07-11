const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
})

const showToggle = document.querySelector(".card .input-kunyit");
const showToggle1 = document.querySelector(".card .input-beras");
const showToggle2 = document.querySelector(".card .input-jahe");
const kunyitAsam = document.querySelector(".kunyit-asam");
const berasKencur = document.querySelector(".beras-kencur");
const jaheEmprit = document.querySelector(".jahe-emprit");
const pahitanMurni = document.querySelector(".pahitan-murni");

showToggle.addEventListener('click', function(){
    kunyitAsam.classList.toggle('show');
    berasKencur.classList.remove('show');
    jaheEmprit.classList.remove('show');
    pahitanMurni.classList.remove('show');
})

showToggle1.addEventListener('click', function(){
    berasKencur.classList.toggle('show');
    kunyitAsam.classList.remove("show");
    jaheEmprit.classList.remove('show');
    pahitanMurni.classList.remove('show');
})

showToggle2.addEventListener('click', function(){
    jaheEmprit.classList.toggle('show');
    kunyitAsam.classList.remove('show');
    berasKencur.classList.remove('show');
    pahitanMurni.classList.remove('show');
})

