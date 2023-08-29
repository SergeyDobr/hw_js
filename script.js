const squares = document.querySelectorAll('.square');
const btnSend = document.getElementById('btnSend');

for (let i of squares) {
   i.addEventListener('click', function () {
      i.classList.toggle('cat');
   })
}

class Square {
   constructor(element) {
      this.element = element;
      this.selected = false;
      this.element.addEventListener('click', () => this.clickSelection());
   }

   clickSelection() {
      this.selected = !this.selected;
   }
}

const allSquareObj = [];
squares.forEach(item => allSquareObj.push(new Square(item)));

btnSend.addEventListener('click', () => {
   const selectedSquares = allSquareObj.filter(square => square.selected);
   console.log(selectedSquares);
});
