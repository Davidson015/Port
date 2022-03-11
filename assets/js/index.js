// Loading up the Page
window.onload = () => {
  document.querySelector('header').style.opacity = '1'
  document.querySelector('main').style.opacity = '1'
  document.querySelector('footer').style.opacity = '1'
}

// NavBar Shadow & Stickiness
window.onscroll = () => {
  let navBar = document.querySelector('#navBar');
  let lastScrollTop = 0;
  let dir = window.scrollY || document.documentElement.scrollTop;
  
  if (dir > lastScrollTop){
    navBar.classList.add('shadow-lg')
    navBar.style.backgroundColor = 'rgba(10, 25, 47, .85)'
    navBar.style.backdropFilter = 'blur(12px)'
    navBar.style.webkitBackdropFilter = 'blur(12px)'
    navBar.style.height = '8vh'
  } else {
    navBar.classList.remove('shadow-lg')
    navBar.style.backgroundColor = 'transparent'
    navBar.style.backdropFilter = 'none'
    navBar.style.webkitBackdropFilter = 'none'
    navBar.style.height = 'initial'
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

// NavBar Toggling Button
let navBtn = document.querySelector('#navbar-toggler');
navBtn.addEventListener('click', () => {
  if ( navBtn.classList.contains('bi-list') ) {
    navBtn.classList.remove('bi-list')
    navBtn.classList.add('bi-x-lg')
  } else {
    navBtn.classList.add('bi-list')
    navBtn.classList.remove('bi-x-lg')
  }
  
})