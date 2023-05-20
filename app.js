const Exercises = document.querySelector('.exercises');
const speed = document.querySelector('.speed')
const lessonsBody = document.querySelector('.lessonsBody')
const exercisePage = document.querySelector('.exercisePage')
const backButton = document.querySelector('.back-button');
const backBox = document.querySelector('.back-box');
const englishPage = document.querySelector('.englishPage')


const englishExercises = [
    "asl; llaa ss;; all saa ;;ll aall ssaa ;;ss ll aass ;;ss aa;; llaa ll;;",
    "dfjk ddjj kkff jf jk df jj kd dk kaa ll; dfjk kss llfj klad djk l; df",
    "gh hg fg hj jh gghh gf fh jjkk dd all; fall jjhh ffgg add all; sad",
    "ttyy tgyh jjyy fftt gy hadd all; sad ttgg yh jy fat hhyy ggtt fat all;",
    "rruu fr ju tr yu fat tr yyuu rruu yu tr add all; ru rruu fr ju tr yu",
    "eeii ui re ty ru ei ki de at air ru all; sad fat fill full eat it yard",
    "wwoo yo uw ek all; this is a kid; ooww eeoo iiww is far; ww oo wo",
    "pq qqpp qqww ppoo wwqq oopp iq ep ty pp lay; type this letter",
    "vvnn bbjj nnff vvhh bbgg; open this door please; vv bb nn vbn",
    "ccmm ddcc kkmm ckmd cm ccmm aacc llmm mc add mm cc kkmm ddcc",
    "x, xs xl ,, sxl, ll,, ssxx ll,, sxl, ssxx; the box is so far, ssxx ll,,",
    "zz.. ;;.. aazz ..;; zzaa zsx. i love to go to the zoo, but it is so far.",
];


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
    if (startSpeed) {
        speedTimer = setInterval(countSpeed, 1000)
        startSpeed = false;
    }

})

addLessonsBox()

function addLessonsBox() {
    for (let i = 0; i < englishExercises.length; i++) {
        let box = document.createElement('div')
        let boxTitle = document.createElement('h1')
        let lock = document.createElement('div')
        let lessonContainer = document.createElement('div')
        lessonContainer.classList.add('lessonContainer')
        box.classList.add("box")
        boxTitle.classList.add("boxTitle")
        lock.classList.add('lock')
        boxTitle.textContent = (i + 1);
        lessonContainer.appendChild(boxTitle)
        lessonContainer.appendChild(lock)
        box.appendChild(lessonContainer)
        lessonsBody.appendChild(box);
    }
}

let boxes = document.querySelectorAll('.box')

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        currentLesson = i;
        addLesson()
        englishPage.style.background = "url(images/2820202.webp)no-repeat fixed center"
        englishPage.style.backgroundSize = "100%"
        exercisePage.style.display = "block"
        lessonsBody.style.display = "none"
        backButton.style.display = "none"
    })
}

backBox.addEventListener("click", function () {
    englishPage.style.background = " url(images/haha.png)no-repeat fixed center"
    englishPage.style.backgroundSize = "100%"
    exercisePage.style.display = "none"
    lessonsBody.style.display = "flex"
    backButton.style.display = "block"
    Exercises.innerHTML = ""
})

function addLesson() {
    for (let i = 0; i < englishExercises[currentLesson].length; i++) {
        let letter = document.createElement('div');
        letter.classList.add("letter");
        letter.textContent = englishExercises[currentLesson][i];
        Exercises.appendChild(letter);
    }

    words = englishExercises[currentLesson].length / 3;
    sec = 0;
    speed.textContent = "0"
    clearInterval(speedTimer)
    startSpeed = true;
}

function checkForTrueWritten() {

    if (value === englishExercises[currentLesson][writtenTrueLetters]) {
        letters = document.querySelectorAll('.letter');
        letters[writtenTrueLetters].style.backgroundColor = "#5294e6";
        writtenTrueLetters++;
        if (writtenTrueLetters === englishExercises[currentLesson].length) {
            Exercises.innerHTML = ''
            writtenTrueLetters = 0;
            currentLesson++;
            letters.textContent = ''
            addLesson()
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