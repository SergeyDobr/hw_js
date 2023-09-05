const wrapper = document.querySelector('.wrapper');// Оболочка где хранятся все карточки
const arrAllCards = []// Массив для хранения всех карточек
const NUMBER_SHOW_CARD = 6; // Количество выводимых карточек на страницу
const allBtn = document.querySelectorAll('button');// NideList всех кнопок на странице

const splitArrayIntoChunks = (array, numElem) => {
   const result = [];
   for (let i = 0; i < array.length; i += numElem) {
      const chunk = array.slice(i, i + numElem);
      result.push(chunk);
   }
   return result;
}
const updateListCards = () => {
   wrapper.innerHTML = '';
   for (let i of splitArrayIntoChunks(arrAllCards, NUMBER_SHOW_CARD)[allBtn[2].innerHTML - 1]) {
      wrapper.insertAdjacentHTML('beforeend', i)
   }
}
for (let i = 0; i <= 42; i++) {
   arrAllCards.push(`<div class="card">
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvTKpt4bYjNdeAQD0_VBYNfH1Q5225CqHfdw&usqp=CAU"
      class="card-img-top" alt="...">
   <div class="card-body">
      <p class="card-text"><b>Product index ${i}</b></p>
   </div>
</div>`)
}

for (let i of arrAllCards) {
   if (i === arrAllCards[NUMBER_SHOW_CARD]) {
      break
   }
   wrapper.insertAdjacentHTML('beforeend', i)
}

allBtn[3].addEventListener('click', () => {
   allBtn[2].innerHTML++;
   updateListCards()
})
allBtn[1].addEventListener('click', () => {
   allBtn[2].innerHTML--;
   updateListCards()
})

allBtn[4].addEventListener('click', () => {
   allBtn[2].innerHTML = Math.ceil(arrAllCards.length / NUMBER_SHOW_CARD);
   updateListCards()
   // allBtn[3].disabled = true;
   // allBtn[4].disabled = true;
})

allBtn[0].addEventListener('click', () => {
   allBtn[2].innerHTML = 1;
   updateListCards()
})



// const updateBtn = () => allBtn.forEach(elem => elem.disabled = false) // убирает disabled со всех кнопок
