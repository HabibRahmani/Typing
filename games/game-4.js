const text = document.querySelector('.text')
let currentText;
let value;

const paragraphs = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis accusamus consequatur esse a omnis exercitationem."]


document.addEventListener('keypress', keyPress);
function keyPress(e) {
    value = e.key;
    checkWrittenLetters()
    console.log(value);
}


addText()

function addText() {
    randowParagraph()
    for (let i = 0; i < paragraphs[currentText].length; i++) {
        let box = document.createElement('div')
        let letter = document.createElement('h1')
        box.classList.add('box')
        letter.textContent = paragraphs[currentText][i];
        box.appendChild(letter)
        text.appendChild(box)
    }
}

function randowParagraph (){
    currentText = Math.floor(Math.random() * paragraphs.length)
}

let currentLetter = 0;
function checkWrittenLetters (){
    if(value === paragraphs[currentText][currentLetter]){
        let boxes = document.querySelectorAll('.box')
        boxes[currentLetter].style.backgroundColor = "#4896c4";
        currentLetter++
    }
}