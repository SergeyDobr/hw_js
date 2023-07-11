// Number: odd

// const userAge = prompt("Enter youe age!");
// if (isNaN(userAge)) {
//    console.log("Виведіть парне число чи ні")
// }


// String: lexics

// const userText = prompt("Don't write a word 'fack'", "Hello, everubody");
// const stopWord = "fack";
// if (userText == null || userText == "") {
//    console.log("Enter is a correct text")
// }
// else {
//    const checkStopWord = userText.indexOf(stopWord);
//    if (checkStopWord != -1) {
//       console.log(`The word ${stopWord} was on the index ${checkStopWord}`)
//    }
//    else { console.log("It's ok!") }
// }


// Boolean

// const userMan = confirm("Are you man?");
// const userName = confirm("Is your name Victor?");
// const userAgeAdult = confirm("Are you over 18?");


// Boolean: if

// const userMan = confirm("Are you man?") ? alert("Ви чоловік") : alert("Ви жінка");


// Prompt: or

// const userAge = prompt("Enter youe age!");
// if (userAge == null || userAge == "" || isNaN(userAge)) {
//    alert("Enter is a correct age")
// } else { console.log("It's ok!") }


// Confirm: or this days

// const shopping = confirm("шопінг?") ? alert("Супер") : alert("ти - бяка");


// Default: or

// const userFName = prompt("Enter your first name") || "Alina";
// const userSName = prompt("Enter your second name") || "Ivanova";
// const userFatherName = prompt("Enter your father name") || "Petrovna";


// Default: if

// let userFName = prompt("Enter your first name");
// let userSName = prompt("Enter your second name");
// let userFatherName = prompt("Enter your father name");

// if (userFName != null && userFName != "") {
//    alert("it's ok")
// } else {
//    userFName = "Alina";
// }

// if (userSName != null && userSName != "") {
//    alert("it's ok")
// } else {
//    userSName = "Ivanova";
// }

// if (userFatherName != null && userFatherName != "") {
//    alert("it's ok")
// } else {
//    userFatherName = "Petrovna";
// }


// Login and password

// const login = "admin";
// const password = "qwerty";
// if (prompt("Enter login") === login) {
//    if (prompt("Enter password") === password) {
//       alert("Welcome")
//    } else { alert("Error") }
// } else {
//    alert("Error")
// }


// Currency exchange

// const currency = prompt("Введите usd или eur") || "";
// let rate;
// let numbers;
// let result;

// if (currency.toLocaleLowerCase() === "usd") {
//    const buyingOrSelling = confirm("Купити -> 'Ок' Продати -> 'Отмена'");
//    rate = 37.2;
//    if (buyingOrSelling) {
//       numbers = +prompt("Введите сумму, сколько $ хотите купить") || 0;
//       result = Math.ceil(rate * numbers);;
//       alert(`Это стоит ${result} гривен`)
//    } else {
//       numbers = +prompt("Введите сумму, сколько $ хотите продать") || 0;
//       result = Math.ceil(rate * numbers);;
//       alert(`Вы получите ${result} гривен`)
//    }
// } else if (currency.toLocaleLowerCase() === "eur") {
//    const buyingOrSelling = confirm("Купити -> 'Ок' Продати -> 'Отмена'");
//    rate = 40.6;
//    if (buyingOrSelling) {
//       numbers = +prompt("Введите сумму, сколько EURO хотите купить") || 0;
//       result = Math.ceil(rate * numbers);;
//       alert(`Это стоит ${result} гривен`)
//    } else {
//       numbers = +prompt("Введите сумму, сколько EURO хотите продать") || 0;
//       result = Math.ceil(rate * numbers);
//       alert(`Вы получите ${result} гривен`)
//    }
// }