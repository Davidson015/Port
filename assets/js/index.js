// NavBar Shadow
window.onscroll = () => {
  let navBar = document.querySelector('#navBar');
  let lastScrollTop = 0;
  let dir = window.scrollY || document.documentElement.scrollTop;
  
  if (dir > lastScrollTop){
    navBar.classList.add('shadow-lg', 'headerOpc')
  } else {
    navBar.classList.remove('shadow-lg', 'headerOpc')
  }
}

// AOS Delay 
if ( Math.max(window.innerWidth) > 767) {
  let projs = document.querySelectorAll('#works')
  let inc = 300;
  
  projs.forEach(proj => {
    proj.setAttribute(`data-aos-delay`, `${inc}`)
    inc+=100;
  });
}

// Active Nav Links
let navLinks = document.querySelectorAll('nav-link')
navLinks.forEach( link => {
  link.addEventListener('click', () => {
    link.classList.add('active')
    if ( link.classList.contains('active') ) {
      link.classList.remove('active')
    }
  })
})