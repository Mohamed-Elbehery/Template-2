let counter = document.querySelector('.counter span')

setInterval(() => {
  counter.innerHTML = 1 + +counter.innerHTML;
}, 1000)

const landingSection = document.querySelector('.landing');
const intro = document.querySelector('.intro');
const ourWork = document.querySelector('.our-work');
const services = document.querySelector('.services');
const footer = document.querySelector('footer');

window.onload = () => {
  if(window.pageYOffset >= landingSection.offsetTop) {
    landingSection.style.opacity = 1;
  }
}

window.addEventListener('scroll', () => {
  if(window.pageYOffset >= landingSection.offsetTop) {
    landingSection.style.opacity = 1;
  }
  
  if(window.pageYOffset >= intro.offsetTop - 200) {
    intro.style.opacity = 1;
  }

  if(window.pageYOffset >= ourWork.offsetTop - 400) {
    ourWork.style.opacity = 1;
  }

  if(window.pageYOffset >= services.offsetTop - 800) {
    services.style.opacity = 1;
  }

  if(window.pageYOffset >= footer.offsetTop - 800) {
    footer.style.opacity = 1;
  }
})