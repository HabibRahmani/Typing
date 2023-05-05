const doors = document.querySelector('.doors');
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