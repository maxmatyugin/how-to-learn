let form = document.querySelector('.calculator__container');
let button = form.querySelectorAll('.calculator__button');
let screen = form.querySelector('.calculator__screen');
console.log(form);
console.log(button.textContent);
console.log(screen.textContent);
let input = null

function inputValue () {
  console.log('PRESSED');
  console.log(input);
  console.log(button.textContent);
  input = button.textContent;
}

button[0].addEventListener('click', inputValue);
button[1].addEventListener('click', inputValue);
button[2].addEventListener('click', inputValue);
button[3].addEventListener('click', inputValue);
button[4].addEventListener('click', inputValue);
button[5].addEventListener('click', inputValue);
button[6].addEventListener('click', inputValue);
button[7].addEventListener('click', inputValue);
button[8].addEventListener('click', inputValue);
button[9].addEventListener('click', inputValue);
button[10].addEventListener('click', inputValue);
button[11].addEventListener('click', inputValue);
button[12].addEventListener('click', inputValue);
button[13].addEventListener('click', inputValue);
button[14].addEventListener('click', inputValue);
button[15].addEventListener('click', inputValue);
button[16].addEventListener('click', inputValue);
button[17].addEventListener('click', inputValue);
button[18].addEventListener('click', inputValue);

