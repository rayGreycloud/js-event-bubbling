const divs = document.querySelectorAll('div');

// function logText(e) {
//   console.log(this.classList.value);
// }

// Fired as bubbles up
// divs.forEach(div => div.addEventListener('click', logText));

// Fired as captured down
// divs.forEach(div => div.addEventListener('click', logText, {
//   capture: true
// }));

// function logText(e) {
//   console.log(this.classList.value);
//   // stop bubbling
//   e.stopPropagation();
// }
//
// divs.forEach(div => div.addEventListener('click', logText, {
//   capture: false
// }));

function logText(e) {
  console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true
}));
