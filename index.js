const nav = document.querySelector('nav');
 
window.onscroll = function(){
  var top = window.scrollY;
  if (top >= 500){
    nav.classList.add('nav-scrolled')
  }
  else{
    nav.classList.remove('nav-scrolled');
  }
}

new TypeIt(".main-title", {
    strings: [""],
    speed: 69
  }).go();

ScrollReveal().reveal('.card');
ScrollReveal().reveal('#about');
ScrollReveal().reveal('.exp-row');
