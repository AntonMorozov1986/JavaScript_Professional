const REG_EXP = /\B'|'\B/g;
const SUBSTITUTE_STRING = '\"';

let textAreaEl = document.querySelector('#textArea');
let paragraphEl = document.querySelector('p');

textAreaEl.addEventListener('input', () => {
  let text = textAreaEl.value;
  let test = text.match(REG_EXP);
  console.log(test);
  paragraphEl.textContent = textAreaEl.value.replace(REG_EXP, SUBSTITUTE_STRING);
});