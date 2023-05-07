let doors = document.querySelector('.doors');
const human = document.querySelector('.human');
const ghost = document.querySelector('.ghost');


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



 doorTimer = setInterval(addDoor, 100);




function addDoor (leftPosition){
    let door = document.createElement('div');
    door.classList.add('door');
    door.style.left = startPoint+"px"
    doors.appendChild(door);

    doorsPosition()
}

function doorsPosition (){
    addedDoors = document.querySelectorAll('.doors');



    for(let i = addedDoors.length; i >= 0 ; i++){
     addedDoors[i].style.left = (1030 - (i * 10)) +"px";
    }

}

