const doors = document.querySelector('.doors');
const human = document.querySelector('.human');

let movmentTimer;

        

let a = true;
 movmentTimer = setInterval(movment, 150);

function movment (){
    console.log("move");

    if(a){
        human.style.backgroundImage = "url(../icons/fast-running-human.svg) "
        a = false;
        console.log("run");
    }else{
        human.style.backgroundImage = "url(../icons/walking-human.svg) "
        a = true;
        console.log("walk");
    }

}