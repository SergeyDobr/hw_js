const MY_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N0YWdlLXR3by5pLXdwLWRldi5jb20vIiwiYXVkIjoiaHR0cHM6Ly9zdGFnZS10d28uaS13cC1kZXYuY29tLyIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJkYXRhIjp7ImlkIjoyNiwidXNlcl9lbWFpbCI6ImRhQG5ha29uZXRzdG8uY29tIiwidXNlcl9wYXNzIjoidVJhMTIzUG9sdWNoIWlsb3MifX0.bZUAJkRRGjczHvTwNbGyoKeI686yeeflNRnnP9IMaCo"
const btnUpdate = document.querySelector('.btnUpdate');
// 1-E
// fetch('https://stage-two.i-wp-dev.com/wp-json/v4/registration', {
//    method: 'POST',
//    body: JSON.stringify({
//       email: 'da@nakonetsto.com',
//       password: 'uRa123Poluch!ilos',
//    }),
//    headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//    },
// })
//    .then((response) => response.json())
//    .then((json) => console.log(json));




// Функция сортирует массив объектов по свойству "user_ID"
const sortArr = (arr) => arr.sort((a, b) => a.user_ID - b.user_ID);

// Функция рисует HTML-таблицу на основании массива объектов
const createTubl = (data) => {
   const tableContainer = document.getElementById('table-container');
   const table = document.createElement('table');
   tableContainer.appendChild(table);

   // Создает заголовок таблицы
   const thead = document.createElement('thead');
   const theadRow = document.createElement('tr');
   for (const key in data[0]) {
      if (data[0].hasOwnProperty(key)) {
         const th = document.createElement('th');
         th.textContent = key;
         theadRow.appendChild(th);
      }
   }
   thead.appendChild(theadRow);
   table.appendChild(thead);

   // Заполняет таблицу данными из массива объектов
   const tbody = document.createElement('tbody');
   data.forEach(item => {
      const tr = document.createElement('tr');
      for (const key in item) {
         if (item.hasOwnProperty(key)) {
            const td = document.createElement('td');
            td.textContent = item[key];
            tr.appendChild(td);
         }
      }
      tbody.appendChild(tr);
   });
   table.appendChild(tbody);
}



// Получаем, сортируем и выводим в таблицу наш массив 
fetch('https://stage-two.i-wp-dev.com/wp-json/v4/users', {
   method: 'GET',
   headers: {
      'Authorization': `Bearer ${MY_TOKEN}`
   },
})
   .then((response) => response.json())
   .then((json) => sortArr(json))
   .then((json) => createTubl(json))

btnUpdate.addEventListener('click', () => {
   fetch('https://stage-two.i-wp-dev.com/wp-json/v4/user', {
      method: 'PUT',
      headers: {
         'Authorization': `Bearer ${jwtToken}`,
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         id: +document.querySelector('.userId').value,
         avatar_url: document.querySelector('.avatarUrl').value,
      }),
   })
});









// function sendData() {
//     const userId = document.querySelector('.id').value;
//     const avatar = document.querySelector('.img-url').value;
//     const changeAvatar = {
//         id: userId,
//         avatar_url: avatar,
//     }
//     fetch('https://stage-two.i-wp-dev.com/wp-json/v4/user', {
//         method: 'PUT',
//         headers: {
//             'Authorization': `Bearer ${jwtToken}`,
//             'Content-Type': 'application/json'
//         },

//         body: JSON.stringify(changeAvatar)
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         })
// }