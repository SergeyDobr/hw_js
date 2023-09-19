const WORD = "dobrovol";
const wrapper = document.querySelector('.wrapper')

for (let i of WORD.toUpperCase().split('')) {
  wrapper.insertAdjacentHTML('beforeend', `<div class="letter img">${i}</div>`)
}
const listOfLetters = document.querySelectorAll('.letter');

const elementsPicture = ['./img/1.png', './img/2.png', './img/3.png', './img/4.png'];


function* showElementToPicture() {
  const picture = document.querySelector('.picture');
  for (let i of elementsPicture) {
    yield picture.innerHTML = `<img src="${i}" alt="">`
    if (picture.innerHTML === `<img src="${elementsPicture[elementsPicture.length - 2]}" alt="">`) {
      listOfLetters.disabled = true
      setTimeout(() => alert("Ты проиграл"), 1000)
    }
  }
}
const startShowElementToPicture = showElementToPicture();

listOfLetters.forEach(element => element.addEventListener('click', event => checkCorretcLetters(event)))

const checkCorretcLetters = (event) => {
  const userInput = prompt("Введите букву");
  if (userInput) {
    userInput.toUpperCase() === event.target.textContent ? event.target.classList.remove('img') : startShowElementToPicture.next();
  }
}