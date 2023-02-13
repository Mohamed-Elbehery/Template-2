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
const goUp = document.querySelector('#up');

const applyingAnimations = () => {
  if(window.pageYOffset >= landingSection.offsetTop) {
    landingSection.style.opacity = 1;
    landingSection.style.transform = 'translateY(0)';
    goUp.style.pointerEvents = 'none';
    goUp.style.opacity = '0';
  }
  
  if(window.pageYOffset >= intro.offsetTop - 150) {
    intro.style.opacity = 1;
    intro.style.transform = 'translateY(0)';
    goUp.style.pointerEvents = 'visible';
    goUp.style.opacity = '1';
    // resetting landing section
    landingSection.style.opacity = 0;
    landingSection.style.transform = 'translateY(200px)';
  }

  if(window.pageYOffset >= ourWork.offsetTop - 200) {
    ourWork.style.opacity = 1;
    ourWork.style.transform = 'translateY(0)';
    // resetting landing section
    intro.style.opacity = 0;
    intro.style.transform = 'translateY(200px)';
  }

  if(window.pageYOffset >= services.offsetTop - 650) {
    services.style.opacity = 1;
    services.style.transform = 'translateY(0)';
    // resetting landing section
    ourWork.style.opacity = 0;
    ourWork.style.transform = 'translateY(200px)';
  }

  if(window.pageYOffset >= footer.offsetTop - 800) {
    footer.style.opacity = 1;
    footer.style.transform = 'translateY(0)';
  }
}

//! Dark and Light Mode
const lightMode = document.querySelector('.light-mode');
const darkMode = document.querySelector('.dark-mode');
const primaryBtn = document.querySelectorAll('.btn-primary');
const landingTitle = document.querySelector('.landing-content h2');

// Applying the Dark Mode
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

// Applying the Light Mode
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
};

if(localStorage.theme) { // If there is a theme in local storage
  if(localStorage.theme === 'dark') { // Dark Mode
    darkModeChanges();
  } else { // Light Mode
    lightModeChanges();
  }
} else // If there is no theme in the local storage
  { localStorage.setItem('theme', 'light'); }

//! Event Listeners and Events
darkMode.addEventListener('click', darkModeChanges);
lightMode.addEventListener('click', lightModeChanges);

window.onload = () => {
  applyingAnimations();
};

window.addEventListener('scroll', () => {
  applyingAnimations();
});

goUp.addEventListener('click', () => {
  window.scroll(0, 0);
});