const Exercises = document.querySelector('.exercises');
const speed = document.querySelector('.speed')
const lessonsBody = document.querySelector('.lessonsBody')
const exercisePage = document.querySelector('.exercisePage')

const persionExercises = ["بب تت بت تب تت بب تتبب بت تتبب تتبب تب تب تت بب تب بت بت",
    "نی نن ین نن ین نن ین نی نی نن ین نن نی نن ین نی ین یی ین نن ین ین نن یی نن",
    "سم ش کس مش کس مش کس مش کس مم سش کم سم کم شس کم مس شک سم شک سم",
    "ا لل ال اا لا لاا لل ال لا لا اا لل ال اا لا لل اا لل ال لا لاا",
    "ف قع غق فغ عف قغ عع فف قق غق فغ عف قغ عع فف قق فق غع فق غع فغ",
    "هث هث ثه ثث هه ثث ثه هث ثه هث هث ثه ثث ه هث ثث هه ثث هه",
    "حخص ضخح صض صخ ضح صخ ضح حخ صض خح صض صخ ضح صض خح صض صخ ضح صخ ضه",
    "جچجچ جچ جچ جچچج جچجچ جچ جچ جچ جچجچ چج جچ ج چ",
    "پ پ پ پ بپ پب بپ ببپ پب بپ پپ پبپ پپ بپ پپ بپ بپ",
    "رزدذ رزدذ دذ رزر دد رر ذذ دذ رز ددذذ ررزز رز دذ رز ذد رر زز دد ذذ",
    "طظ و. و.و. طظ طظ ظطو .ط ظظ ططوو طوظ. ططوو ظظ.. .و .وطظ طط ظظ وو ..",
]

let currentLesson = 0;
let value;
let writtenTrueLetters = 0;
let letters;
let audio = new Audio("click1.mp3");
let speedTimer;
let sec;
let words;
let startSpeed = true;

document.addEventListener('keypress', (e) => {
    value = e.key;
    checkForTrueWritten()
    if(startSpeed){
        speedTimer = setInterval(countSpeed , 1000)
        startSpeed = false;
    }

})
addLessonsBox()

function addLessonsBox() {
    for (let i = 0; i < persionExercises.length; i++) {
        let box = document.createElement('div')
        box.classList.add("box")
        box.textContent = "درس " + (i + 1);
        lessonsBody.appendChild(box);
    }
}

let boxes = document.querySelectorAll('.box')

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        currentLesson = i;
        addLesson()

        exercisePage.style.display = "block"
        lessonsBody.style.display = "none"
    })
}


function addLesson (){
    for(let i = 0; i < persionExercises[currentLesson].length; i++){
        let letter = document.createElement('div');
        letter.classList.add("letter");
        letter.textContent = persionExercises[currentLesson][i];
        Exercises.appendChild(letter);
    }

    words = persionExercises[currentLesson].length / 3;
    sec = 0;
    speed.textContent = "0"
    clearInterval(speedTimer)
    startSpeed = true;
}

function checkForTrueWritten (){

    if(value === persionExercises[currentLesson][writtenTrueLetters]){
        letters = document.querySelectorAll('.letter');
        letters[writtenTrueLetters].style.backgroundColor = "#5294e6";
        writtenTrueLetters++;
        if(writtenTrueLetters === persionExercises[currentLesson].length){
            Exercises.innerHTML = ''
            writtenTrueLetters = 0;
            currentLesson++;
            letters.textContent = ''
            addLesson()
        }
    }else{
        audio.play();
    }

}

function countSpeed (){
    if(sec > 1){
        let userSpeed = (60 * words) / sec;
        speed.textContent = Math.floor(userSpeed);
    }

    sec++;
}