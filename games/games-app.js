const boxesContainer = document.querySelector('.boxes');


const words = ["afghanistan", "herat", "home", "school", "typing","afghanistan", "herat", "home", "school", "typing"]

let value;
let currentLetter = 0;
let currentLesson = 0;
let boxes;
let topAb = 0;
let leftAb;

function callLetters() {
    boxesContainer.innerHTML = "";
    addLetters(words[currentLesson]);
}
callLetters()

document.addEventListener('keypress', (e) => {
    value = e.key;
    if (currentLetter < boxes.length) {
        written();
    }
})

function written() {
    if (boxes[currentLetter].textContent === value) {
        boxes[currentLetter].style.backgroundColor = "#45A29E";

        if (currentLetter + 1 === words[currentLesson].length) {
            currentLesson++;
            currentLetter = 0;
            callLetters();


            return;
        }
        currentLetter++;
    }
}

function addLetters(words) {
    for (let i = 0; i < words.length; i++) {
        const box = document.createElement('div');
        box.classList.add("box");

        const letter = document.createElement("h1");
        letter.textContent = words[i];

        boxesContainer.appendChild(box);
        box.appendChild(letter);
    }
    boxes = document.querySelectorAll('.box');

}

function wordPosition (){
}
let random = Math.floor(Math.random() * 765 );
boxesContainer.style.left = random+"px";   