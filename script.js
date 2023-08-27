// Задание 1: Ведро 4л
const bucket3 = { capacity: 3, currentVolume: 0 };
const bucket5 = { capacity: 5, currentVolume: 0 };

const fillBucket = (bucket) => bucket.currentVolume = bucket.capacity; // Заполняет ведро

const emptyBucket = (bucket) => bucket.currentVolume = 0; // Опустошает ведро

const calculateBucket4 = () => {
   const bucket4 = { capacity: 0 }
   while (bucket4.capacity != 4) {
      fillBucket(bucket5);
      emptyBucket(bucket3);
      bucket5.currentVolume -= fillBucket(bucket3);
      bucket4.capacity += bucket5.currentVolume;
   }
}
console.log(calculateBucket4())



// Задание 2: Волейбол

// const getVarId = (id) => document.getElementById(id);

// const btn = getVarId('btn');
// const fields = document.querySelectorAll('.fielt');

// let switchPlayer = 0;

// const players = [
//    { name: 'Игрок 1', goals: 0 },
//    { name: 'Игрок 2', goals: 0 },
// ];
// const results = [getVarId('result1'), getVarId('result2')];

// const ballFlight = () => {
//    const randomFielt = Math.floor(Math.random() * fields.length);
//    for (let i of fields) {
//       i.innerHTML = '';
//    }
//    return fields[randomFielt].insertAdjacentHTML('afterbegin', '<span id="ball"></span>')
// }

// const closeSections = () => {
//    const randomFielt = Math.floor(Math.random() * fields.length);
//    for (let i of fields) {
//       i.style.backgroundColor = 'aquamarine';
//    }
//    return fields[randomFielt].style.backgroundColor = 'unset';
// }

// const goalSearch = () => {
//    for (let i of fields) {
//       if (i.style.backgroundColor === 'unset' && i.innerHTML) {
//          return true;
//       }
//    }
// }

// const getAllFuncs = (numPlayer) => {
//    players[numPlayer].goals === 3 ? showWinner(players[numPlayer].name) : true;
//    alert(`Подает ${players[numPlayer].name}`)
//    ballFlight();
//    closeSections();
//    goalSearch() ? players[numPlayer].goals++ : players[numPlayer].goals;
//    results[numPlayer].innerHTML = players[numPlayer].goals;
// }

// const showWinner = () => {
//    for (let i of players) {
//       if (i.goals === 2) {
//          btn.insertAdjacentHTML('afterend',
//             `<h2>Победил ${i.name}</h2>`);
//          setTimeout(function () {
//             location.reload();
//          }, 3000);
//       }
//    }
// }
// btn.addEventListener('click', function () {
//    switchPlayer % 2 === 0 ? getAllFuncs(0) : getAllFuncs(1);
//    showWinner();
//    switchPlayer++
// })
