//! Counter
let counter = document.querySelector('.counter span')

//! Saving the number to dispaly it after refreshing the page
setInterval(() => {
  if(!localStorage.counter) {
    counter.innerHTML = 10000;
    counter.innerHTML = +counter.innerHTML + 1;
    localStorage.setItem('counter', counter.innerHTML);
  } else {
    counter.innerHTML = +localStorage.counter + 1;
    localStorage.setItem('counter', counter.innerHTML);
  }
}, 1000)

//! Sections Animations
const header = document.querySelector('header');
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

//! Dark and Light Mode
const lightMode = document.querySelector('.light-mode');
const darkMode = document.querySelector('.dark-mode');
const primaryBtn = document.querySelectorAll('.btn-primary');
const landingTitle = document.querySelector('.landing-content h2');

// applying the dark mode
const darkModeChanges = () => {
  localStorage.theme = 'dark';
  document.body.style.backgroundColor = '#333';
  document.body.style.color = 'white';
  landingTitle.style = 'color: white; transition: var(--section-transition-duration);';
  primaryBtn.forEach((btn) => {
    btn.style.color = 'white';
    btn.style.borderColor = 'white';
    btn.addEventListener('mouseenter', () => {
      btn.style.color = 'black';
      btn.style.backgroundColor = 'white';
    })
    btn.addEventListener('mouseleave', () => {
      btn.style.color = 'white';
      btn.style.backgroundColor = 'transparent';
    })
  });
  header.children[0].children[1].children[0].addEventListener('mouseenter', () => {
    header.children[0].children[1].children[0].style.color = 'white';
  })

  header.children[0].children[1].children[0].addEventListener('mouseleave', () => {
    header.children[0].children[1].children[0].style.color = 'rgb(87, 114, 236)';
  })
};

const lightModeChanges = () => {
  localStorage.theme = 'light';
  document.body.style.backgroundColor = 'transparent';
  document.body.style.color = 'black';
  landingTitle.style = 'color: #413f3f; transition: var(--section-transition-duration);';
  primaryBtn.forEach((btn) => {
    btn.style.color = 'black';
    btn.style.borderColor = 'black';
    btn.addEventListener('mouseenter', () => {
      btn.style.color = 'white';
      btn.style.backgroundColor = 'black';
    })
    btn.addEventListener('mouseleave', () => {
      btn.style.color = 'black';
      btn.style.backgroundColor = 'transparent';
    })
  });
  header.children[0].children[1].children[0].addEventListener('mouseenter', () => {
    header.children[0].children[1].children[0].style.color = 'white';
  })

  header.children[0].children[1].children[0].addEventListener('mouseleave', () => {
    header.children[0].children[1].children[0].style.color = 'rgb(87, 114, 236)';
  })
}

if(localStorage.theme) { // If there is a theme in local storage
  if(localStorage.theme === 'dark') { // Dark Mode
    darkModeChanges();
  } else { // Light Mode
    lightModeChanges();
  }
} else { // If there is no theme in the local storage
  localStorage.setItem('theme', 'light');
}

darkMode.addEventListener('click', darkModeChanges);
lightMode.addEventListener('click', lightModeChanges);