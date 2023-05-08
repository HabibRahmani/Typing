let doors = document.querySelector('.doors');
const human = document.querySelector('.human');
const ghost = document.querySelector('.ghost');

const words = ["book","table","desk","pen","car","home","picture","window","door","road","ship","mobile","stone","hand","eye","head","tongue","finger","knee"];


// ############ Scary Man ############# //
let runnigHumanTimer;

let runnigHuman = true;
runnigHumanTimer = setInterval(run, 150);

function run (){
    if(runnigHuman){
        human.style.backgroundImage = "url(../icons/fast-running-human.svg) "
        ghost.style.top = "158px"
        runnigHuman = false;
    }else{
        human.style.backgroundImage = "url(../icons/walking-human.svg) "
        ghost.style.top = "160px"
        runnigHuman = true;
    }
}
// ######################################
// ############# Doors ################
let addedDoors;
let doorTimer;
let startPoint = 1030;
let addingTime = 0;


addDoor()
doorTimer = setInterval(doorsPosition, 100);

function addDoor (leftPosition){
    let door = document.createElement('div');
    door.classList.add('door');
    door.style.left = startPoint+"px"
    doors.appendChild(door);

    addWord(door);

}
function doorsPosition (){
    addingTime++
    
    if(addingTime % 25 === 0){
        addDoor()
    }
    
    addedDoors = document.querySelectorAll('.door');

     
    for(let i = addedDoors.length - 1; i >= 0 ; i--){

    if(parseInt(addedDoors[i].style.left) < 250){
        addedDoors[i].remove()

    }

         addedDoors[i].style.left = parseInt(addedDoors[i].style.left) - 10 +"px";
    }
}
// ################ WORDS ##############


function addWord (door){

    let word = document.createElement('div');
    word.classList.add('word');
    door.appendChild(word);

    let randomWord = Math.floor(Math.random() * words.length);

    for(let i = 0; i < words[randomWord].length; i++){
        let letter = document.createElement('div');
        letter.classList.add('letter');
        letter.textContent = words[randomWord][i];
        word.appendChild(letter);
    }

}
