//  Number: age

// const ageUser = +prompt("Введите ваш возраст");
// if (ageUser === 0) {
//    alert("Вы не ввели значение")
// } else if (isNaN(ageUser)) {
//    alert("Используйте только числа")
// } else if (isNaN(ageUser) == false) {
//    alert(2023 - ageUser)
// }

//  Number: temperature

// const temperature = +prompt("Введите температуру в цельсиях");
// if (temperature === 0) {
//    alert("Вы не ввели значение")
// } else if (isNaN(temperature)) {
//    alert("Используйте только числа")
// } else if (isNaN(temperature) == false) {
//    alert(temperature * 1.8 + 32)
// }

//  Number: divide

// const numOne = +prompt("Введите первое число");
// const numTwo = +prompt("Введите второе число");
// if (isNaN(numOne)  isNaN(numTwo)) {
//    alert("Используйте только числа")
// } else if (numOne == 0  numTwo == 0) {
//    alert("Вы не ввели 1 или 2 значение")
// } else {
//    alert(Деление нацело ${numOne} / ${numTwo} = ${Math.round(numOne / numTwo)})
// }


// Number: flats

// const numberOfFloors = +prompt("Введите количество этажей");
// const numberOfFlasts = +prompt("Введите количество квартир на этаже");
// const flatNumber = +prompt("Введите номер квартиры");

// const numberFlatsInHouse = numberOfFloors * numberOfFlasts;
// const entranceNumber = Math.ceil(flatNumber / numberFlatsInHouse);
// const floorNumber = Math.ceil((flatNumber - (entranceNumber - 1) * numberFlatsInHouse) / numberOfFlasts);
// alert(Нужный дом (${flatNumber}) находится в ${entranceNumber} подъезде на ${floorNumber} этаже.);