const resultText = document.querySelector('.resultText')
let halfPosition = true;

let value;
document.addEventListener('keypress', keyPress);
function keyPress(e) {
    value = e.key;
    console.log(value+" haha");
    checkWrittenLetters()
}

// ######################## First Boxes ############################
let boxes = document.querySelector('.boxes')
const words = ["book", "table", "desk", "pen", "car", "home", "picture", "window", "door", "road", "ship", "mobile", "stone", "hand", "eye", "head", "tongue", "finger"]

let currentWord = 0;
let boxesTimer;
let boxesTopPosition = 0;
let addWordsTimer;

addWords()

function addWords() {
    clearInterval(addWordsTimer)
    for (let i = 0; i < words[currentWord].length; i++) {
        let box = document.createElement('div')
        let letter = document.createElement('h1')
        box.classList.add('box')
        letter.textContent = words[currentWord][i];
        box.appendChild(letter)
        boxes.appendChild(box)
    }
    randomLeftPosition(boxes)
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

// ####################### Second Boxes ############################ // 
let secondBoxes = document.querySelector('.secondBoxes')
const secondWords = ["home", "ship", "desk", "pen", "picture", "road", "hand", "eye", "head", "tongue", "mobile", "book", "car", "stone", "finger", "table", "window", "door"]

let secondCurrentWord = 0;
let secondBoxesTimer;
let secondAddWordsTimer;
let secondBoxesTopPosition = 0;

secondAddWordsTimer = setInterval(secondAddWords, 1500)

function secondAddWords() {
    clearInterval(secondAddWordsTimer)
    for (let i = 0; i < secondWords[secondCurrentWord].length; i++) {
        let box = document.createElement('div')
        let letter = document.createElement('h1')
        box.classList.add('box')
        letter.textContent = secondWords[secondCurrentWord][i];
        box.appendChild(letter)
        secondBoxes.appendChild(box)
    }
    randomLeftPosition(secondBoxes)
    secondBoxesTimer = setInterval(secondBoxesPosition, 30)
}

function secondBoxesPosition() {
    secondBoxesTopPosition += 5;
    secondBoxes.style.top = secondBoxesTopPosition + "px"

    if (secondBoxesTopPosition === 680) {
        secondBoxes.innerHTML = ""
        clearInterval(secondBoxesTimer)
        secondBoxesTopPosition = -70
        secondBoxes.style.top = secondBoxesTopPosition + "px"
        // secondCurrentWord++;

        secondAddWordsTimer = setInterval(secondAddWords, 500)
    }
}
// ####################### Third Boxes ############################ // 
let thirdBoxes = document.querySelector('.thirdBoxes')
const thirdWords = ["pen", "picture", "book", "tongue", "road", "hand", "eye", "head", "car", "stone", "finger", "table", "window", "desk", "ship", "door", "mobile", "home"]

let thirdCurrentWord = 0;
let thirdBoxesTimer;
let thirdAddWordsTimer;
let thirdBoxesTopPosition = 0;

thirdAddWordsTimer = setInterval(thirdAddWords, 3000)

function thirdAddWords() {
    clearInterval(thirdAddWordsTimer)
    for (let i = 0; i < thirdWords[thirdCurrentWord].length; i++) {
        let box = document.createElement('div')
        let letter = document.createElement('h1')
        box.classList.add('box')
        letter.textContent = thirdWords[thirdCurrentWord][i];
        box.appendChild(letter)
        thirdBoxes.appendChild(box)
    }
    randomLeftPosition(thirdBoxes)
    thirdBoxesTimer = setInterval(thirdBoxesPosition, 30)
}

function thirdBoxesPosition() {
    thirdBoxesTopPosition += 5;
    thirdBoxes.style.top = thirdBoxesTopPosition + "px"

    if (thirdBoxesTopPosition === 680) {
        thirdBoxes.innerHTML = ""
        clearInterval(thirdBoxesTimer)
        thirdBoxesTopPosition = -70
        thirdBoxes.style.top = thirdBoxesTopPosition + "px"
        // thirdCurrentWord++;

        thirdAddWordsTimer = setInterval(thirdAddWords, 500)
    }
}

// @@@@@@@@@@@@@@@@ Random Position @@@@@@@@@@@@@@@@ //
function randomLeftPosition(currentBoxes) {
    if (halfPosition) {
        let random = Math.floor(Math.random() * 500);
        currentBoxes.style.left = random + "px"
        halfPosition = false;
    } else {
        let random = Math.floor(Math.random() * 500) + 500;
        currentBoxes.style.left = random + "px"
        halfPosition = true;
    }
}
// ############################# Chick Written Litters ##################################
let currentLetter = 0;
let startWritingWord;
let changingBoxesColor;
let currentParent;
function checkWrittenLetters() {

    if (startWritingWord === undefined) {
        if (value === words[currentWord][0]) {
            startWritingWord = words[currentWord]
            changingBoxesColor = boxes.querySelectorAll(".box")
            currentParent = 1;

        } else if (value === secondWords[secondCurrentWord][0]) {
            startWritingWord = secondWords[secondCurrentWord]
            changingBoxesColor = secondBoxes.querySelectorAll(".box")
            currentParent = 2;
            
        } else if (value === thirdWords[thirdCurrentWord][0]) {
            startWritingWord = thirdWords[thirdCurrentWord]
            changingBoxesColor = thirdBoxes.querySelectorAll(".box")
            currentParent = 3;
        }
    }

    console.log(startWritingWord);

    if (startWritingWord != undefined) {
        if (value === startWritingWord[currentLetter]) {
            console.log("if opened");
            changingBoxesColor[currentLetter].style.backgroundColor = "blue";
            currentLetter++
        }

        if(currentLetter === startWritingWord.length ){
            currentLetter = 0;
            startWritingWord = undefined;
            if(currentParent === 1){
                boxes.innerHTML = ""
            }else if (currentParent === 2){
                secondBoxes.innerHTML = ""
            }else if (currentParent === 3){
                thirdBoxes.innerHTML = ""
            }
        }
    }
}