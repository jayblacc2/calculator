const btns = document.querySelectorAll('button');
const output = document.querySelector('.output-screen');
const clear = document.querySelector('#clear');

let calculated = [];
let totalValue;

function calculate(e) {
  const value = e.target.textContent;

  if (value === 'clear') {
    calculated = [];
    output.textContent = '.';
  } else if (value === '=') {
    output.textContent = eval(totalValue);
  } else {
    calculated.push(value);
    totalValue = calculated.join('');
    output.textContent = totalValue;
  }
}

for (let btn of btns) {
  btn.addEventListener('click', (e) => calculate(e));
}
