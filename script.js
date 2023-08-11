// Задание 1 
// Квартира в ней комнаты - в каждой комнате ширина и длинна => вернуть площадь квартиры
const calculateApartmentArea = () => {
   let apartmentArea = 0;
   const numberOfRooms = +prompt("Enter a number of rooms in flat");
   if (numberOfRooms != 0 && isNaN(numberOfRooms) == false) {
      let i = 1;
      while (i <= numberOfRooms) {
         const roomArea = +prompt(`Enter the width rooms number ${i}`) * (+prompt(`Enter the length rooms number ${i}`));
         apartmentArea += roomArea
         i++
      }
      return apartmentArea
   }
   else (alert('Enter a correct value'))
}
// calculateApartmentArea()


// Задание 2
// PROMPT и ты вводишь слово => найти сколько гласных и согласных букв

const calculateLetter = () => {
   const word = prompt("Введите 1 слово на русском языке").toUpperCase().split('');

   const consonantLetters = 'БВГДЖЗЙКЛМНПРСТФХЦЧШЩ';
   let resultVowels = 0;
   let resultConsonant = 0;
   for (let i of word) {
      consonantLetters.includes(i) ? resultConsonant++ : resultVowels++;
   }
   return `Слово содержит ${resultVowels} гласных и ${resultConsonant} согласных`
}
// console.log(calculateLetter())


// К примеру в вас есть кофе (1кг, 2кг) => задача сделать функцию,// запытаете зерна - ставите помол (грамм за порцию) и считаете кол-во чашек

const calculateNumberOfCup = () => {
   const kgCoffee = +prompt('Сколько килограм кофе засыпаете?');//2
   const gramCoffeeinCup = +prompt('Сколько грамм идет на 1 чашку?');// 15
   return `Вам хватит на ${Math.floor((kgCoffee * 1000) / gramCoffeeinCup)} чашек кофе`

}
// console.log(calculateNumberOfCup())