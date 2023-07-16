// Literals

// const cat = {
//    name: "Simba",
//    color: "Gold",
//    age: 5,
//    monocolor: true
// };
// const flat = {
//    "a private house": false,
//    floor: 4,
//    addres: {
//       city: "Kharkiv",
//       street: "Freedom",
//    },
// }
// const user = {
//    name: "Sergey",
//    age: 25,
//    job: "programmer",
//    genderMan: true,
//    hobby: "basketball",
// }


// Literals expand

// const user = {
//    name: "Sergey",
//    age: 25,
//    job: "programmer",
//    genderMan: true,
//    hobby: "basketball",
// }
// user[prompt("Enter new key for obj PERSON")] = prompt("Enter new value for obj PERSON");


// Literals copy

// const user = {
//    name: "Sergey",
//    age: 25,
//    job: "programmer",
//    genderMan: true,
//    hobby: "basketball",
// }
// const newUser = user;
// newUser[prompt("Enter new key for obj PERSON")] = prompt("Enter new value for obj PERSON");


// Html tree

// const body = {
//    tagName: 'body',
//    children: [
//       {
//          tagName: 'div',
//          children: [
//             {
//                tagName: 'span',
//                children: ['Enter a data please:']// 1
//             },
//             {
//                tagName: 'input',
//                attrs: {
//                   type: 'text',
//                   id: 'name',
//                }
//             },
//             {
//                tagName: 'input',
//                attrs: {
//                   type: 'text',
//                   id: 'surname',//3
//                }
//             },
//          ]
//       },
//       {
//          tagName: 'div',
//          children: [
//             {
//                tagName: 'button',
//                children: ['OK'],
//                attrs: {
//                   id: 'ok',
//                }
//             },
//             {
//                tagName: 'button',
//                children: ['Cancel'],//2
//                attrs: {
//                   id: 'cancel',
//                }
//             }
//          ],

//       }
//    ]
// }
// console.log(body.children[1].children[1].children.join())
// console.log(body.children[0].children[2].attrs.id)


// Change OK (Использовал объект body на 53 строке)

// const attrsElement = body.children[1].children[0].attrs;
// attrsElement[prompt("Enter new attribute")] = prompt("Enter new value");


// Destructure (Использовал объект body на 53 строке)

// const newObj = [];
// newObj[0] = body.children[0].children[0].children.join();
// newObj[1] = body.children[1].children[1].children.join();
// newObj[2] = body.children[0].children[2].attrs.id;
// const [textSpan, textTwoBtn, idTwoInput] = newObj;
// console.log(idTwoInput)


// Destruct array

// let arr = [1, 2, 3, 4, 5, "a", "b", "c"]
// const [odd1, even1, odd2, even2, odd3, ...letters] = arr;


// Destruct string

// let arr = [1, "abc"];
// arr[1] = arr[1].split('');
// const [, [s1, s2, s3]] = arr;


// Destruct 2

// let obj = {
//    name: 'Ivan',
//    surname: 'Petrov',
//    children: [{ name: 'Maria' }, { name: 'Nikolay' }]
// }
// const [{ name: name1 }, { name: name2 }] = obj.children;


// Destruct 3

// let arr = [1, 2, 3, 4, 5, 6, 7, 10]
// const [a, b, , , , , , , , , length = arr.length] = arr;


// Copy delete

// const user = {
//    name: "Sergey",
//    age: 25,
//    job: "programmer",
//    hobby: "basketball",
// }
// const userInput = prompt("Enter 'name' or 'age' or job or hobby");
// if (userInput == "name") {
//    const { name, ...rest } = user;
//    console.log(rest)
// } else if (userInput == "age") {
//    const { age, ...rest } = user;
//    console.log(rest)
// } else if (userInput == "job") {
//    const { job, ...rest } = user;
//    console.log(rest)
// } else if (userInput == "hobby") {
//    const { hobby, ...rest } = user;
//    console.log(rest)
// } else {
//    console.log("Error")
// }


// Currency real rate
