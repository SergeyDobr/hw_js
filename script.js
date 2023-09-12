const wrapper = document.querySelector('.wrapper');

const fetchTitlesFromAPIs = async (arr, num) => {
   let titles = '';
   for (let i of arr) {
      const response = await fetch(i);
      const data = await response.json();
      titles += `<li>${data.title}</li>`
   }
   const listUl = document.querySelectorAll('.ul');
   listUl[num].innerHTML = titles;
}
const makeNewCard = (arr) => {
   for (let i of arr) {
      wrapper.insertAdjacentHTML('beforeend',
         `<div class="card">
      <h3>${i.name}</h3>
      <ul class="ul"></ul></div>`);
   }

}

const fetchData = async () => {
   const response = await fetch('https://swapi.dev/api/planets/')
   const data = await response.json()
      .then(data => data.results);
   for (let i = 0; i < data.length; i++) {
      fetchTitlesFromAPIs(data[i].films, i)
   }
   makeNewCard(data)
}
fetchData()
