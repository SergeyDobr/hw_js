// Temperature

function fromCelsiusToFahrenheit(celsius) {
   if (celsius) {
      if (isNaN(celsius) == false) {
         console.log(celsius * 1.8 + 32)
      } else {
         return "Error"
      }
   } else {
      return "Error"
   }
}


// RGB

const changeToString = (num) => Number(num).toString(16);
const checkTwoSymbol = (elem) => elem.length < 2 ? elem + elem : elem;
function reneratorRGB(r, g, b) {
   r = checkTwoSymbol(changeToString(r));
   g = checkTwoSymbol(changeToString(g));
   b = checkTwoSymbol(changeToString(b));
   return `#${r}${g}${b}`
}


// Flats

const returnEntranceAndFloor = function (numberOfFloors, numberOfFlasts, flatNumber) {
   const numberFlatsInHouse = numberOfFloors * numberOfFlasts;
   const entranceNumber = Math.ceil(flatNumber / numberFlatsInHouse);
   const floorNumber = Math.ceil((flatNumber - (entranceNumber - 1) * numberFlatsInHouse) / numberOfFlasts);
   return { entranceNumber, floorNumber }
}


// Credentials


const capitalize = str => {
   let result;
   const [fLetter, ...word] = str.split('');
   result = fLetter.toUpperCase() + word.join('').toLowerCase();
   return result;
};

const credentials = () => {
   const userName = capitalize(prompt("Введите имя").trim());
   const userSecondName = capitalize(prompt("Введите фамилию").trim());
   const userFatherName = capitalize(prompt("Введите отчество").trim());
   const userfullName = `${userName} ${userSecondName} ${userFatherName}`
   return { userName, userSecondName, userFatherName, userfullName }
}


// New line

const newLine = str => str.split('\\n').join('\n');
const correctString = elem => newLine(elem);


// Prompt OR

const promptResult = (promtString, defaultString) => promtString ? promtString : defaultString;
// console.log(promptResult(prompt("enter any"), `defaultString`));


// Login And Password

const login = "admin";
const password = 'qwerty';
const logIn = function (log, pass) {
   const userLog = prompt('Enter admin');
   if (userLog == log) {
      const userPass = prompt('Enter the password');
      if (userPass == pass) {
         return true;
      } else {
         return false;
      }
   } else {
      return false
   }
}


