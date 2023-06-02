const resultText = document.querySelector('.resultText')
const allParents = document.querySelector('.allParents')
const leftBoxes = document.querySelector('.leftBoxes')
let halfPosition = true;
let currentParent;

let currentLetter = 0;
let startWritingWord;
let loseCount = 0;
let winCount = 25;

let value;
document.addEventListener('keypress', keyPress);
function keyPress(e) {
    value = e.key;
    checkWrittenLetters()
}

// ######################## First Boxes ############################
let boxes = document.querySelector('.boxes')
const words = ["book", "ant", "desk", "about", "car", "finger", "cat", "grow", "door", "deaf", "face", "cafe", "bead", "attack", "google", "cut", "cute", "finger"]

let currentWord = Math.floor(Math.random() * words.length);
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

    if (boxesTopPosition === 680 ) {
        if(currentParent === 1 && startWritingWord != undefined){
            startWritingWord = undefined;
            currentLetter = 0;
        }
   
        checkForLose()
        boxes.innerHTML = ""
        clearInterval(boxesTimer)
        boxesTopPosition = -70
        boxes.style.top = boxesTopPosition + "px"
        currentWord = Math.floor(Math.random() * words.length)
    
        addWordsTimer = setInterval(addWords, 500)
    }
}


// ####################### Second Boxes ############################ // 
let secondBoxes = document.querySelector('.secondBoxes')
const secondWords = ["home", "ship", "pen", "hire", "picture", "road", "poor", "mobile", "shower", "hand", "mobile", "milk", "kill", "stone", "joke", "limmon", "open", "ride"]

let secondCurrentWord = Math.floor(Math.random() * secondWords.length);
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
        if(currentParent === 2 && startWritingWord != undefined){
            startWritingWord = undefined;
            currentLetter = 0;
        }

        checkForLose()
        secondBoxes.innerHTML = ""
        clearInterval(secondBoxesTimer)
        secondBoxesTopPosition = -70
        secondBoxes.style.top = secondBoxesTopPosition + "px"
        secondCurrentWord = Math.floor(Math.random() * secondWords.length);;
    
        secondAddWordsTimer = setInterval(secondAddWords, 500)
    }

}

// ####################### Third Boxes ############################ // 
let thirdBoxes = document.querySelector('.thirdBoxes')
const thirdWords = ["window", "vivid", "use", "tongue", "user", "tittle", "wood", "yellow", "under", "zebra", "zoo", "table", "window", "total", "where", "when", "under", "window"]

let thirdCurrentWord = Math.floor(Math.random() * thirdWords.length);
let thirdBoxesTimer;
let thirdAddWordsTimer;
let thirdBoxesTopPosition = 0;

thirdAddWordsTimer = setInterval(thirdAddWords, 3000)

function thirdAddWords() {
    if (thirdCurrentWord === thirdWords.length) {
        thirdCurrentWord = Math.floor(Math.random() * words.length);
    }
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
        if(startWritingWord != undefined && currentParent === 3){
            startWritingWord = undefined;
            currentLetter = 0;
        }
        // if (startWritingWord != undefined) {
        //     if (currentParent === 1) {
        //         if (parseInt(boxes.style.top) === 680) {
        //             startWritingWord = undefined;
        //             currentLetter = 0;
        //         }
        //     } else if (currentParent === 2) {
        //         if (parseInt(secondBoxes.style.top) === 680) {
        //             startWritingWord = undefined;
        //             currentLetter = 0;
        //         }
        //     } else if (currentParent === 3) {
        //         if (parseInt(thirdBoxes.style.top) === 680) {
        //             startWritingWord = undefined;
        //             currentLetter = 0;
        //         }
        //     }
        // }
        checkForLose()
        thirdBoxes.innerHTML = ""
        clearInterval(thirdBoxesTimer)
        thirdBoxesTopPosition = -70
        thirdBoxes.style.top = thirdBoxesTopPosition + "px"
        thirdCurrentWord = Math.floor(Math.random() * thirdWords.length);
    
        thirdAddWordsTimer = setInterval(thirdAddWords, 500)
    }
}

// @@@@@@@@@@@@@@@@ Random Position @@@@@@@@@@@@@@@@ //

function randomLeftPosition(currentBoxes) {
    if (halfPosition) {
        let random = Math.floor(Math.random() * 500) + 100;
        currentBoxes.style.left = random + "px"
        halfPosition = false;
    } else {
        let random = Math.floor(Math.random() * 500) + 400;
        currentBoxes.style.left = random + "px"
        halfPosition = true;
    }
}
// ############################# Chick Written Litters ##################################

let changingBoxesColor;
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
    console.log(startWritingWord + " currentWord");


    if (startWritingWord != undefined) {
        if (value === startWritingWord[currentLetter]) {
            changingBoxesColor[currentLetter].style.backgroundColor = "#4896c4";
            currentLetter++
        }

        if (currentLetter === startWritingWord.length) {
            if (currentParent === 1) {
                boxes.innerHTML = ""
                clearInterval(boxesTimer)
                boxesTopPosition = -70
                boxes.style.top = boxesTopPosition + "px"
                currentWord = Math.floor(Math.random() * words.length);
                addWordsTimer = setInterval(addWords, 500)
            } else if (currentParent === 2) {
                secondBoxes.innerHTML = ""
                clearInterval(secondBoxesTimer)
                secondBoxesTopPosition = -70
                secondBoxes.style.top = secondBoxesTopPosition + "px"
                secondCurrentWord = Math.floor(Math.random() * secondWords.length);
                secondAddWordsTimer = setInterval(secondAddWords, 500)
            } else if (currentParent === 3) {
                thirdBoxes.innerHTML = ""
                clearInterval(thirdBoxesTimer)
                thirdBoxesTopPosition = -70
                thirdBoxes.style.top = thirdBoxesTopPosition + "px"
                thirdCurrentWord = Math.floor(Math.random() * thirdWords.length);
                thirdAddWordsTimer = setInterval(thirdAddWords, 500)
            }
            winCount--
            leftBoxes.textContent = winCount + " Left Over"
            if (winCount === 0) {
                allParents.innerHTML = ""
                resultText.textContent = "You Win"
                clearInterval(thirdAddWordsTimer)
                clearInterval(thirdBoxesTimer)

                clearInterval(addWordsTimer)
                clearInterval(boxesTimer)

                clearInterval(secondAddWordsTimer)
                clearInterval(secondBoxesTimer)

            }
            currentLetter = 0;
            startWritingWord = undefined;
        }
    }
}
// ############################## Check for Lose @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function checkForLose() {
    loseCount++
    if (loseCount <= 3) {
        let hearts = document.querySelectorAll('.heart')
        hearts[0].remove()
    }

    if (loseCount === 3) {
        allParents.innerHTML = ""
        clearInterval(thirdAddWordsTimer)
        clearInterval(thirdBoxesTimer)

        clearInterval(addWordsTimer)
        clearInterval(boxesTimer)

        clearInterval(secondAddWordsTimer)
        clearInterval(secondBoxesTimer)


        resultText.textContent = "Game Over"
    }
}