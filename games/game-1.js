const boxes = document.querySelector('.boxes')
const resultText = document.querySelector('.resultText')

const words = ["book", "table", "desk", "pen", "car", "home", "picture", "window", "door", "road", "ship", "mobile", "stone", "hand", "eye", "head", "tongue", "finger"]

let currentWord = 0;
let boxesTimer;
let boxesTopPosition = 0;
let addWordsTimer;
let addWordsSecondTimer;



document.addEventListener('keypress', keyPress);

function keyPress(e) {
    value = e.key;

}


addWords()
function addWords() {
    clearInterval(addWordsTimer)
    clearInterval(addWordsSecondTimer)
    for (let i = 0; i < words[currentWord].length; i++) {
        let box = document.createElement('div')
        let letter = document.createElement('h1')
        box.classList.add('box')
        letter.textContent = words[currentWord][i];
        box.appendChild(letter)
        boxes.appendChild(box)
    }
    randomLeftPosition()
    boxesTimer = setInterval(boxesPosition, 30)
}


function boxesPosition() {
    boxesTopPosition += 5;
    boxes.style.top = boxesTopPosition + "px"

    if (boxesTopPosition === 680) {
        boxes.innerHTML = ""
        clearInterval(boxesTimer)
        boxesTopPosition = -70
        boxes.style.top = boxesTopPosition + "px"
        // currentWord++;

        addWordsTimer = setInterval(addWords, 500)
    }
}

function randomLeftPosition (){
    let random = Math.floor(Math.random()* 750);
    boxes.style.left = random + "px"
}