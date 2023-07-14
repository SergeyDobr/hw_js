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

// const str = prompt("Enter string");
// if (str) {
//    if (str.length >= 9) {
//       const [letter1, letter5, letter9] = [str[0], str[4], str[8],]
//       console.log(`Letter 1 is ${letter1}. Letter 5 is ${letter5}. Letter 9 is ${letter9}.`)
//    }
// }