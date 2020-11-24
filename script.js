const displayElement = document.getElementById('display');
const copyElement = document.getElementById('copy');
const lengthElement = document.getElementById('length');
const lowercaseElement = document.getElementById('lowercase');
const uppercaseElement = document.getElementById('uppercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const messageElement = document.getElementById('message');
const generateElement = document.getElementById('generate');

copyElement.addEventListener('click', () => {
  if (display.innerText !== '') {
    const textarea = document.createElement('textarea');
    textarea.textContent = display.innerText;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(textarea);
    messageElement.style.transform = "translateY(10%)";
    setTimeout(() => {
      messageElement.style.transform = "translateY(-100%)";
    }, 1000)

  }
})

generateElement.addEventListener('click', () => {
  generatePassword(lengthElement.value, lowercaseElement.checked, uppercaseElement.checked, numbersElement.checked, symbolsElement.checked)
})

const getLowerCase = () => {
  const option = 'abcdefghijklmnopqrstuvwxyz'
  return option[Math.floor(Math.random() * option.length)]
}
const getUpperCase = () => {
  const option = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return option[Math.floor(Math.random() * option.length)]
}
const getNumbers = () => {
  const option = '1234567890'
  return option[Math.floor(Math.random() * option.length)]
}
const getSymbols = () => {
  const option = '!@#$%^&*_+'
  return option[Math.floor(Math.random() * option.length)]
}
const generatePassword = (length, lowercase, uppercase, numbers, symbols) => {
  const selected = lowercase + uppercase + numbers + symbols;
  if (selected === 0) {
    displayElement.innerText = '';
  } else {
    let pass = '';
    for (let i = 0; i < length; i++) {
      let arr = [];
      if (lowercase) {
        arr.push(getLowerCase());
      }
      if (uppercase) {
        arr.push(getUpperCase());
      }
      if (numbers) {
        arr.push(getNumbers());
      }
      if (symbols) {
        arr.push(getSymbols());
      }
      pass += arr[Math.floor(Math.random() * arr.length)];
    }
    displayElement.innerText = pass;
  }
}
