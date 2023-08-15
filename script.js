const getVarId = (id) => document.getElementById(id);
const getVarClassName = (className) => document.querySelector(className);
const people = [];
let person = {};
// Переменные 1-го слайда
const inputLogin = getVarId('inputLogin');
const inputPassword = getVarId('inputPassword');
const buttonNext = getVarClassName('.carousel-control-next');
const buttonCheck = getVarId('buttonCheck');

// Переменные 2-го слайда
const inputDate = getVarId('inputDate');
const inputGender = getVarId('inputGender');
const inputName = getVarId('inputName');
const buttonCheck2 = getVarId('buttonCheck2');

// Переменные 3-го слайда
const inputZodiac = getVarId('inputZodiac');
const inputWeight = getVarId('inputWeight');
const inputHeight = getVarId('inputHeight');
const buttonCheck3 = getVarId('buttonCheck3');


buttonCheck.addEventListener('click', function () {
   if (inputLogin.value && inputPassword.value) {
      buttonCheck.style.backgroundColor = '#80c780';
      person = {
         login: inputLogin.value,
         password: inputPassword.value,
      }
      buttonNext.classList.toggle('disabled');
      buttonNext.addEventListener('click', function () {
         buttonNext.classList.toggle('disabled');
      })
   }
   else {
      buttonCheck.style.backgroundColor = 'red'
   }
})


buttonCheck2.addEventListener('click', function () {
   if (inputDate.value && inputGender.value && inputName.value) {
      buttonCheck2.style.backgroundColor = '#80c780';
      person = {
         ...person,
         data: inputDate.value,
         gender: inputGender.value,
         name: inputName.value,
      }
      buttonNext.classList.toggle('disabled');
   } else {
      buttonCheck2.style.backgroundColor = 'red'
   }
})
buttonCheck3.addEventListener('click', function () {
   if (inputZodiac.value && inputWeight.value && inputHeight.value) {
      buttonCheck3.style.backgroundColor = '#80c780';
      person = {
         ...person,
         zodiac: inputZodiac.value,
         weight: inputWeight.value,
         height: inputHeight.value,
      }
      people.push(person)
      buttonNext.classList.toggle('disabled');
      if (!!localStorage.getItem('people')) {
         let peopleLocal = localStorage.getItem('people');
         peopleLocal = [...JSON.parse(peopleLocal), ...people];
         localStorage.setItem('people', JSON.stringify(peopleLocal))
      } else {
         localStorage.setItem('people', JSON.stringify(people))
      }
   } else {
      buttonCheck3.style.backgroundColor = 'red'
   }
})