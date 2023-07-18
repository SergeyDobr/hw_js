// Confirms

// const arr = [confirm("Are you human?"), confirm("Are you man?"), confirm("Are you woman?")];
// console.log(arr)


// Prompts

// const arr = [];
// arr[0] = prompt("Enter...");
// arr[1] = prompt("Enter...");
// arr[2] = prompt("Enter...");
// console.log(arr)


// Item access

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const index = prompt("Введите число от 0 до 9");
// if (index) {
//    if (+index >= 0 && +index <= 10) {
//       console.log(`По индексу ${index} находится число ${arr[index]}`)
//    }
// }


// Item access

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const index = prompt("Введите число (index) от 0 до 9");
// if (index) {
//    if (+index >= 0 && +index <= 10) {
//       const value = prompt("Введите значение (value)");
//       arr[index] = value;
//    }
// }


// Multiply table

// const arr = [
//    [0, 0, 0, 0, 0, 0],
//    [0, 1, 2, 3, 4, 5],
//    [0, 2, 4, 6, 8, 10],
//    [0, 3, 6, 9, 12, 15],
//    [0, 4, 8, 12, 16, 20],
//    [0, 5, 10, 15, 20, 25],
// ]


// Multiply table slice

// const arr = [
//    [0, 0, 0, 0, 0, 0],
//    [0, 1, 2, 3, 4, 5],
//    [0, 2, 4, 6, 8, 10],
//    [0, 3, 6, 9, 12, 15],
//    [0, 4, 8, 12, 16, 20],
//    [0, 5, 10, 15, 20, 25],
// ]
// const newArr = arr.slice(1).map(item => item.slice(1))


// IndexOf Word

// let userString = prompt("Enter a few words");
// if (userString) {
//    userString = userString.split(" ");
//    const findWord = prompt("What word to find?")
//    if (findWord) {
//       if (userString.includes(findWord)) {
//          console.log(`Your word number is ${userString.indexOf(findWord) + 1}`)
//       }
//       else {
//          console.log("Your word was not found")
//       }
//    }
// }


// Reverse

// const arr = [];
// arr.push(prompt("Enter something"));
// arr.push(prompt("Enter something"));
// arr.push(prompt("Enter something"));
// arr.push(prompt("Enter something"));
// arr.push(prompt("Enter something"));
// const newArr = [];
// newArr.push(arr.pop())
// newArr.push(arr.pop())
// newArr.push(arr.pop())
// newArr.push(arr.pop())
// newArr.push(arr.pop())
// console.log(newArr)


// Reverse 2

// const arr = [];
// arr.push(prompt("Enter something"));
// arr.push(prompt("Enter something"));
// arr.push(prompt("Enter something"));
// arr.push(prompt("Enter something"));
// arr.push(prompt("Enter something"));
// const newArr = [];
// newArr.push(arr.pop());
// newArr.push(arr.pop());
// newArr.push(arr.pop());
// newArr.push(arr.pop());
// newArr.push(arr.pop());
// const newArr2 = [];
// newArr2.unshift(newArr.shift());
// newArr2.unshift(newArr.shift());
// newArr2.unshift(newArr.shift());
// newArr2.unshift(newArr.shift());
// newArr2.unshift(newArr.shift());


// Copy

// const arr = [
//    [0, 0, 0, 0, 0, 0],
//    [0, 1, 2, 3, 4, 5],
//    [0, 2, 4, 6, 8, 10],
//    [0, 3, 6, 9, 12, 15],
//    [0, 4, 8, 12, 16, 20],
//    [0, 5, 10, 15, 20, 25],
// ];
// const copyArr = arr;


// Array Equals

// const arr = [1, 2, 3, 4, 5];
// const arr2 = arr;


// Flat

// const arr = [
//    [1, 2, 3, 4, 5],
//    [2, 4, 6, 8, 10],
//    [3, 6, 9, 12, 15],
//    [4, 8, 12, 16, 20],
//    [5, 10, 15, 20, 25],
// ];
// const newArr = [...arr[0], ...arr[1], ...arr[2], ...arr[3], ...arr[4]]
// console.log(newArr.length)


// Destruct

// const str = prompt("Enter string more, than 9 symbols");
// if (str) {
//    if (str.length >= 9) {
//       const [letter1, , , , letter5, , , , letter9] = str.split('');
//       console.log(`Letter 1 is ${letter1}. Letter 5 is ${letter5}. Letter 9 is ${letter9}.`)
//    }
// }


// Destruct default

// const str = prompt("Enter string");
// if (str) {
//    const [, letter2 = "!", , letter4 = "!", letter5 = "!"   ] = str.split('');
//    console.log(`Letter 2 is ${letter2}. Letter 4 is ${letter4}. Letter 5 is ${letter5}.`)
// }




// Multiply table rest

// const arr = [
//    [0, 0, 0, 0, 0, 0],
//    [0, 1, 2, 3, 4, 5],
//    [0, 2, 4, 6, 8, 10],
//    [0, 3, 6, 9, 12, 15],
//    [0, 4, 8, 12, 16, 20],
//    [0, 5, 10, 15, 20, 25],
// ]
// const [, [, ...arr1], [, ...arr2], [, ...arr3], [, ...arr4], [, ...arr5]] = arr;
// const newArr = [arr1, arr2, arr3, arr4, arr5];


// For Alert

// const arr = ["John", "Paul", "George", "Ringo"];
// for (let item of arr) {
//    alert(item);
// }


// For Select Option

// const currencies = ["USD", "EUR", "GBP", "UAH"]
// let str = "<select>";
// for (const currency of currencies) {
//    str += `<option>${currency}</option>`;
// }
// str += "</select>"
// document.write(str)


// For Table Horizontal

// const names = ["John", "Paul", "George", "Ringo"]
// let str = "<table>"
// for (const name of names) {
//    str += `<td>${name}</td>`;
// }
// str += "</table>"
// document.write(str)


// For Table Vertical

// const names = ["John", "Paul", "George", "Ringo"]
// let str = "<table>"
// for (const name of names) {
//    str += `<tr><td>${name}</td></tr>`;
// }
// str += "</table>"
// document.write(str)


// For Table Letters

// const currencies = ["USD", "EUR", "GBP", "UAH"]
// let str = "<table>"
// for (const currency of currencies) { //цикл створює рядки
//    str += `<tr>`
//    for (const letter of currency) { //цикл створює осередки в одному рядку
//       str += `<td>${letter}</td>`
//    }
//    str += `</tr>`
// }
// str += "</table>"
// document.write(str)


// For Multiply Table

// const arrs = [
//    [0, 0, 0, 0, 0, 0],
//    [0, 1, 2, 3, 4, 5],
//    [0, 2, 4, 6, 8, 10],
//    [0, 3, 6, 9, 12, 15],
//    [0, 4, 8, 12, 16, 20],
// ];
// let str = "<table>";
// for (const arr of arrs) {
//    str += `<tr>`;
//    for (const number of arr) {
//       str += `<td>${number}</td>`
//    }
//    str += `</tr>`
// }
// str += "</table>"
// document.write(str)


// Map Capitalize

// const str = 'lorem lOREM LOREM LoReM';
// const arr = str.split(" ");
// const newArr = arr.map(function (item) {
//    const [fLetter, ...word] = item.split('');
//    const sLetters = word.join('').toLowerCase();
//    return fLetter.toUpperCase() + sLetters;
// });