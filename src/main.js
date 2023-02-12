//! Counter
let counter = document.querySelector('.counter span')

//! Saving the number to dispaly it after refreshing the page
setInterval(() => {
  if(!localStorage.counter) {
    counter.innerHTML = +counter.innerHTML + 1;
    localStorage.setItem('counter', counter.innerHTML);
  } else {
    counter.innerHTML = +localStorage.counter + 1;
    localStorage.setItem('counter', counter.innerHTML);
  }
}, 1000)

//! Sections Animations
const landingSection = document.querySelector('.landing');
const intro = document.querySelector('.intro');
const ourWork = document.querySelector('.our-work');
const services = document.querySelector('.services');
const footer = document.querySelector('footer');

window.onload = () => {
  if(window.pageYOffset >= landingSection.offsetTop) {
    landingSection.style.opacity = 1;
    landingSection.style.transform = 'translateY(0)';
  }
}


window.addEventListener('scroll', () => {
  if(window.pageYOffset >= landingSection.offsetTop) {
    landingSection.style.opacity = 1;
    landingSection.style.transform = 'translateY(0)';
  }
  
  if(window.pageYOffset >= intro.offsetTop - 150) {
    intro.style.opacity = 1;
    intro.style.transform = 'translateY(0)';
  }

  if(window.pageYOffset >= ourWork.offsetTop - 475) {
    ourWork.style.opacity = 1;
    ourWork.style.transform = 'translateY(0)';
  }

  if(window.pageYOffset >= services.offsetTop - 650) {
    services.style.opacity = 1;
    services.style.transform = 'translateY(0)';
  }

  if(window.pageYOffset >= footer.offsetTop - 800) {
    footer.style.opacity = 1;
    footer.style.transform = 'translateY(0)';
  }
})