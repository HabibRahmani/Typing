const topicText = document.querySelector('.topic-text');
let car = document.querySelector('.car');

const paragraphs = ["Black hole is a region of spacetime where gravity is so strong that nothing, including light or other electromagnetic waves, has enough energy to escape its event horizon. The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole.",
"Galaxy is a system of stars, stellar remnants, interstellar gas, dust, dark matter, bound together by gravity. The word is derived from the Greek galaxias, literally 'milky', a reference to the Milky Way galaxy that contains the Solar System.",
"Darwinism is a theory of biological evolution developed by the English naturalist Charles Darwin and others, stating that all species of organisms arise and develop through the natural selection of small, inherited variations that increase the individual's ability to compete, survive, and reproduce.",
];

let value,letters;
let currentSpan = 0;
let carLeft = 298;
let carMove;

document.addEventListener('keypress', (e) => {
    value = e.key;
    written();
})


function written() {
    if(letters[currentSpan].textContent === value){
        letters[currentSpan].style.backgroundColor = "#45A29E";
        currentSpan++;
        carPosition()
    }
   
}


function randomParagraph (){
    let random = Math.floor(Math.random() * paragraphs.length);
    changeTopic(paragraphs[random])
    carMove = 720 / paragraphs[random].length; 
}
randomParagraph();

function changeTopic (topic){
    for(let i = 0; i < topic.length; i++){
        const span = document.createElement('span');
        span.classList.add('letter')
        span.textContent = topic[i];
        topicText.appendChild(span);
    }
    letters = document.querySelectorAll('.letter');
}

function carPosition (){
    carLeft += carMove;
    car.style.left = carLeft+"px";
}