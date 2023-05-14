const topicText = document.querySelector('.topic-text');
const container = document.querySelector('.game-2-container');
let car = document.querySelector('.car');
let speedText = document.querySelector('.speed-text');


const paragraphs = ["Planet Earth is also known as the 'Blue Planet' because of the two-thirds of its surface is covered by saltwater oceans.It is the fifth-largest planet in the solar system. It is the only planet in our solar system with liquid water on the surface.",
];

let value, letters;
let currentSpan = 0;
let carLeft = 298;
let carMove;
let startTime = 0;
let startTimer;
let characters = 0;
let paragraph;
let writtenCharacters = 0;


let startPressingKey = true;

document.addEventListener('keypress', (e) => {
    value = e.key;
    written();

    if(startPressingKey){
        startTimer = setInterval(kmPerHour, 1000)
        startPressingKey = false;
    }
})


function written() {
    if (letters[currentSpan].textContent === value) {
        writtenCharacters++;
        if (writtenCharacters === paragraph.length) {
            container.style.display = 'none';
        }
        letters[currentSpan].style.backgroundColor = "#45A29E";
        currentSpan++;
        carPosition()
    }

}

function randomParagraph() {
    let random = Math.floor(Math.random() * paragraphs.length);
    changeTopic(paragraphs[random])
    carMove = 720 / paragraphs[random].length;
    paragraph = paragraphs[random];
}
randomParagraph();

function changeTopic(topic) {
    for (let i = 0; i < topic.length; i++) {
        characters++;

        const span = document.createElement('span');
        span.classList.add('letter')
        span.textContent = topic[i];
        topicText.appendChild(span);
    }
    letters = document.querySelectorAll('.letter');
}

function carPosition() {
    carLeft += carMove;
    car.style.left = carLeft + "px";
    if (carLeft === 780) {
        clearInterval(startTimer)
    }
}


function kmPerHour() {
    if(startTime > 1){
        let userSpeed = (60 * (characters) / 3) / startTime;
        speedText.textContent = Math.ceil(userSpeed) + "km per hour";    
    }
    startTime++;
}
