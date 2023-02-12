let counter = document.querySelector('.counter span')

setInterval(() => {
  counter.innerHTML = 1 + +counter.innerHTML;
}, 1000)