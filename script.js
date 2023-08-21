const getVarId = (id) => document.getElementById(id);
const getVarClassName = (className) => document.querySelector(className);


const buttonCheck = getVarId('buttonCheck');

const classNames = [
   'email',
   'password',
   'age',
   'sex',
   'name',
   'zodiac',
   'age',
   'height',
];

const generateNewPerson = () => {
   const result = classNames.reduce((acc, item) => {
      const value = getVarId(item).value;
      if (value) {
         acc[item] = value;
      }
      return acc;
   }, {});
   return result;
};

const checkFilledAllInputs = (arr) => (arr.find(elem => !getVarId(elem).value) ? alert('Enter all inputs!') : true);


const showFinalSlide = () => {
   const lastSlide = getVarId('lastSlide');
   const lastIndicator = getVarId('lastIndicator')
   lastSlide.insertAdjacentHTML('afterend',
      `<div class="carousel-item">
      <div class="d-block w-100">
         <h3> <span style="color: aquamarine;">Ваши данные внесены</span> &#x1F609</h3>
         <button id="buttonShowResult" type="submit">Показать всех участников</button>
      </div>
   </div>`)
   lastIndicator.insertAdjacentHTML('afterend',
      `<button type="button" id="resultIndicator" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
   aria-label="Slide 4"></button>`)
}

const updateStorage = person => {
   const storage = localStorage.getItem('people');
   if (!storage) {
      localStorage.setItem('people', JSON.stringify([person]));
   } else {
      const prevData = JSON.parse(localStorage.getItem('people'));
      localStorage.setItem('people', JSON.stringify([...prevData, person]));
   }
};
const showAllPeople = () => {
   const data = JSON.parse(localStorage.getItem('people'));
   let str = '';
   for (let i of data) {
      str += `${i.name} с логином ${i.email} <br>`
   }
   buttonShowResult.insertAdjacentHTML('afterend',
      `<div style="text-align: left; color: #fff; font-size: 18px; margin-left: 100px;">${str}</div>`)
}

const addButtonDeleteStorage = () => {
   buttonShowResult.insertAdjacentHTML('afterend',
      `<button id="buttonDeleteAllPeople" type="submit">Удалить всех участников</button>`)
}
buttonCheck.addEventListener('click', function () {

   if (checkFilledAllInputs(classNames)) {
      showFinalSlide()
      const newPerson = generateNewPerson();
      updateStorage(newPerson);
      const buttonShowResult = getVarId('buttonShowResult');
      buttonShowResult.addEventListener('click', () => {
         showAllPeople();
         addButtonDeleteStorage();
         const buttonDeleteAllPeople = getVarId('buttonDeleteAllPeople')
         buttonDeleteAllPeople.addEventListener('click',function () {
            localStorage.removeItem('people');
            location.reload()
         });
      })
   }
})