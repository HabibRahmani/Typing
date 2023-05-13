let doors = document.querySelector('.doors');
const human = document.querySelector('.human');
const ghost = document.querySelector('.ghost');

const words = ["book", "table", "desk", "pen", "car", "home", "picture", "window", "door", "road", "ship", "mobile", "stone", "hand", "eye", "head", "tongue", "finger", "knee"];


// ######### Key Press ########3
let value;
let currentLetter = 0;
let currentWord = 0;
let currentWordLenght;


document.addEventListener('keypress', keyPress);

function keyPress (e){
    value = e.key;

    checkWrittenLetters()
}

// ############ Scary Man ############# //
let runnigHumanTimer;

let runnigHuman = true;
runnigHumanTimer = setInterval(run, 150);

function run() {
    if (runnigHuman) {
        human.style.backgroundImage = "url(../icons/fast-running-human.svg) "
        ghost.style.top = "158px"
        runnigHuman = false;
    } else {
        human.style.backgroundImage = "url(../icons/walking-human.svg) "
        ghost.style.top = "160px"
        runnigHuman = true;
    }
}
// ####################################
// ############# Doors ################
let addedDoors;
let doorTimer;
let startPoint = 1030;
let addingTime = 0;
let firstDoor = true;
let openedDoors;

addDoor()
doorTimer = setInterval(doorsPosition, 100);

function addDoor(leftPosition) {
    let door = document.createElement('div');
    door.classList.add('door');
    door.style.left = startPoint + "px"
    doors.appendChild(door);
    
    addWord(door)
    

}
function doorsPosition() {
    addingTime++

    if (addingTime % 25 === 0) {
        addDoor()
    }

    addedDoors = document.querySelectorAll('.door');
    openedDoors = document.querySelectorAll('.open-door');


    for (let i = addedDoors.length - 1; i >= 0; i--) {

        if (parseInt(addedDoors[i].style.left) < 250) {
            addedDoors[i].remove()
        }

        addedDoors[i].style.left = parseInt(addedDoors[i].style.left) - 10 + "px";
        if(parseInt(addedDoors[i].style.left) === 400){
            clearInterval(runnigHumanTimer)
            clearInterval(doorTimer)
            document.removeEventListener("keypress", keyPress)
        }
    }
    for (let i = openedDoors.length - 1; i >= 0; i--) {

        if (parseInt(openedDoors[i].style.left) < 250) {
            openedDoors[i].remove()
        }

        openedDoors[i].style.left = parseInt(openedDoors[i].style.left) - 10 + "px";
    }
}
// ################ WORDS ##############

function addWord(door) {

    let randomWord = Math.floor(Math.random() * words.length);

    for (let i = 0; i < words[randomWord].length; i++) {
        let letter = document.createElement('div');
        letter.classList.add('letter');
        letter.textContent = words[randomWord][i];
        door.appendChild(letter);
    }
}


function checkWrittenLetters() {

    addedDoors = document.querySelectorAll('.door');

    let a = addedDoors[0].children.length;

    if (value === addedDoors[0].children[currentLetter].textContent) {
        addedDoors[0].children[currentLetter].style.backgroundColor = "rgb(88, 165, 189)";

        currentLetter++;
        if (currentLetter === a) {
            currentLetter = 0;
            addedDoors[0].classList.remove('door');
            addedDoors[0].classList.add('open-door')
           
        }
    }

}