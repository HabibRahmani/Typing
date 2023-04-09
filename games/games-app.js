const boxes = document.querySelectorAll('.box');

let value;
let a = 0;

document.addEventListener('keypress', (e) => {
    value = e.key;
    if(a < boxes.length){
        color();
    }
})

function color() {
    if (boxes[a].textContent === value) {
        boxes[a].style.backgroundColor = "red";
        a++;
    }
}