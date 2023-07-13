// String: greeting

// const userName = prompt("Enter your name");
// console.log(Hello, ${userName})


//    String: gopni4ek

// const userString = prompt("Enter your string");
// const stringSplit = userString.split(",");
// alert(stringSplit.join(", блин, "))


// String: capitalize

// let str = "cANBerRa";
// let result;
// const firstLatter = str[0].toUpperCase();
// const wordWithoutFirstLatter = str.slice(1).toLowerCase();
// result = firstLatter + wordWithoutFirstLatter;
// console.log(result)


//String: word count

// const fewWords = prompt("Enter few words");
// console.log(You entered ${fewWords.split(" ").length} words)


//String: word count

// let secondName = prompt("Введите фамилию").trim();
// let firstName = prompt("Введите имя").trim();
// let fatherName = prompt("Введите отчество").trim();
// secondName = secondName[0].toUpperCase() + secondName.slice(1).toLowerCase()
// firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()
// fatherName = fatherName[0].toUpperCase() + fatherName.slice(1).toLowerCase()
// const fullName = ${secondName} ${firstName} ${fatherName}
// console.log(fullName);


//String: beer

// let str = "Було жарко. Василь пив пиво вприкуску з креветками";
// let result;
// const stringInArray = str.split("пиво");
// result = stringInArray.join("чай")
// console.log(result)


//String: no tag

// let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
// let result;
// const symbolOpenTag = str.indexOf("<");
// const symbolCloseTag = str.indexOf(">");
// const lastLetterString = str[str.length - 1];
// result = str.slice(0, symbolOpenTag) + str.slice(symbolCloseTag + 1, -1) + lastLetterString;
// console.log(result);


// String: big tag

// let str = "якийсь текст у якому є один тег <br /> і всяке інше";
// let result;
// const ourTag = str.slice(str.indexOf("<"), str.indexOf(">") + 1);
// const lastLetterString = str[str.length - 1];
// result = str.slice(0, str.indexOf("<")) + ourTag.toUpperCase() + str.slice(str.indexOf(">") + 1, -1) + lastLetterString;
// console.log(result)


// String: new line

// const stringOneLine = prompt("Entet your text and split it use backslash");
// const stringInArray = stringOneLine.split('\\n');
// console.log(stringInArray.join('\n'));


// String: youtube

// const text = "video watch https://www.youtube.com/watch?v=HF1dGDQO6Kc"
// const stringArray = text.match(/(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:[\w-=&]*&)?v=|(?:embed|v)\/))([\w-]+)[\w-=&#]*/
// )
// const idVideo = stringArray[1];
// const videoTagShablon = <iframe width="560" height="315" src="https://www.youtube.com/embed/${idVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>;
// document.write(videoTagShablon);