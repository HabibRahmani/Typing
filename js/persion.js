const Exercises = document.querySelector('.exercises');
const speed = document.querySelector('.speed')
const lessonsBody = document.querySelector('.lessonsBody')
const exercisePage = document.querySelector('.exercisePage')
const backButton = document.querySelector('.back-button');
const backBox = document.querySelector('.back-box');
const persionPage = document.querySelector('.persionPage')


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

const boxLessons = ["ب ت","ن ی","س م ش ک","ا ل","ف ق ع غ","ه ث","ح خ ص ض","ج چ","پ","ر ز د ذ","ط ظ و ."]

let currentLesson = 0;
let value;
let writtenTrueLetters = 0;
let letters;
let audio = new Audio("click1.mp3");
let speedTimer;
let sec;
let words;
let startSpeed = true;
let boxes;
let opendPersionLessons = 0;


opendPersionLessons = localStorage.getItem("opendPersionLessons")

// localStorage.clear("opendpersionLessons")

function keyPress(e) {
    value = e.key;
    checkForTrueWritten()
    if (startSpeed) {
        speedTimer = setInterval(countSpeed, 1000)
        startSpeed = false;
    }
}


addLessonsBox()

function addLessonsBox() {
    lessonsBody.innerHTML = ""
    for (let i = 0; i < persionExercises.length; i++) {
        let box = document.createElement('div')
        let boxTitle = document.createElement('h1')
        let lessonContainer = document.createElement('div')
        lessonContainer.classList.add('lessonContainer')
        box.classList.add("box")
        boxTitle.classList.add("boxTitle")
        boxTitle.textContent = (i + 1);

        lessonContainer.appendChild(boxTitle)

        if (i < opendPersionLessons) {
            let tick = document.createElement('div')
            tick.classList.add('tick')
            lessonContainer.appendChild(tick)
        } else if (i <= opendPersionLessons) {
            let progress = document.createElement('div')
            progress.classList.add('progress')
            lessonContainer.appendChild(progress)
        } else {
            let lock = document.createElement('div')
            lock.classList.add('lock')
            lessonContainer.appendChild(lock)

        }
        let boxCurrentLesson = document.createElement('p')
        let boxLessonKeyboard = document.createElement('div')
        let lessonsInfo = document.createElement('div')
        boxCurrentLesson.textContent = "حروف : "+boxLessons[i];
        boxLessonKeyboard.classList.add('boxKeyboard')
        boxCurrentLesson.classList.add('lessonsLetters')
        lessonsInfo.appendChild(boxLessonKeyboard)
        lessonsInfo.appendChild(boxCurrentLesson)

        box.appendChild(lessonContainer)
        box.appendChild(lessonsInfo)
        lessonsBody.appendChild(box);

    }
    boxes = document.querySelectorAll('.box')
    boxesEventListener()
}

function boxesEventListener() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", function () {
            if (i <= opendPersionLessons) {
                addLesson(i)
                currentLesson = i;
                englishPage.style.background = "url(./images/typing-cats.webp)no-repeat fixed center"
                persionPage.style.backgroundSize = "100%"
                exercisePage.style.display = "block"
                lessonsBody.style.display = "none"
                backButton.style.display = "none"
            } else {
                alert("Do Previous Lessons Please!")
            }
            document.addEventListener('keypress', keyPress);
        })
    }

}

backBox.addEventListener("click", function () {
    persionPage.style.background = " url(images/haha.png)no-repeat fixed center"
    persionPage.style.backgroundSize = "100%"
    exercisePage.style.display = "none"
    lessonsBody.style.display = "flex"
    backButton.style.display = "block"
    Exercises.innerHTML = ""
    document.removeEventListener("keypress", keyPress)

})

function addLesson(lesson) {
    for (let i = 0; i < persionExercises[lesson].length; i++) {
        let letter = document.createElement('div');
        letter.classList.add("letter");
        letter.textContent = persionExercises[lesson][i];
        Exercises.appendChild(letter);
    }
    words = persionExercises[lesson].length / 3;
    sec = 0;
    speed.textContent = "0"
    clearInterval(speedTimer)
    startSpeed = true;
}

function checkForTrueWritten() {

    if (value === persionExercises[currentLesson][writtenTrueLetters]) {
        letters = document.querySelectorAll('.letter');
        letters[writtenTrueLetters].style.backgroundColor = "#5294e6";
        writtenTrueLetters++;
        if (writtenTrueLetters === persionExercises[currentLesson].length) {
            Exercises.innerHTML = ''
            writtenTrueLetters = 0;
            currentLesson++;

            if(currentLesson > opendPersionLessons){
                opendPersionLessons++;
                localStorage.setItem("opendPersionLessons", opendPersionLessons);
            }
            addLessonsBox()
            letters.textContent = ''
            addLesson(currentLesson)
        }
    } else {
        audio.play();
    }

}

function countSpeed() {
    if (sec > 1) {
        let userSpeed = (60 * words) / sec;
        speed.textContent = Math.floor(userSpeed);
    }

    sec++;
}