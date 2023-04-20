const lessons = document.querySelectorAll('.lesson');
const lessonText = document.querySelector('.text');
const currentLesson = document.querySelector('.current-lesson');
const speedText = document.querySelector('.speed');
const writtenLetters = document.querySelector('.writtenLetters');
const pointer = document.querySelector('.pointer');
const startBtn = document.querySelector('.start-btn-lang');


const persionExercises = ["ب ت ب ت بب تت ب ت بت بب تت ب ت ت ب ت بت ت ت ت تت بب تت بب بت تت بب تت بب تت ب ت ب ت ت ب ب ت ب تب بت ب بت",
    "ن ی ن ی ن ن ی ن ی ن ی ی ن نی ن ن ی ی ی ن نی ی ن ی تب بت ت ب ی ن ت ن ی ن ی ن ن ی ن ی ن ی ی ن نی ن ن ی ی ی ن نی ی ن ی تب بت ت ب ی ن ت",
    "ش ک س م ش ک س م ش ک س م م س ش ک م س م کم شس کم بت نی مس شک سم ش ک س م ش ک س م ش ک س م ش ک س م م س ش ک م س م کم شس کم بت نی مس شک سم ش ک س م",
    "ا ل ل ا ل ا ا ل ا ل ل ا بلبل بابا نیش لالا نان ا ل ل ا کاکا ماما ا ل ل ا ل ا ا ل ا ل ل ا بلبل بابا نیش لالا نان ا ل ل ا کاکا ماما",
    "ف ق ع غ ق ف غ ع ف ق غ ع ع ف ف ق ق فلفل عینک بت ف ق غ ع ف ق غ ع ف غ ف ق ع غ ق ف غ ع ف ق غ ع ع ف ف ق ق فلفل عینک بت ف ق غ ع ف ق غ ع ف غ",
    "ه ث ه ث ث ه ثث ه ه ث ث ث ه ه ث ث ه عینک ماه این بیست است لاله ه ث ه ث ث ه ثث ه ه ث ث ث ه ه ث ث ه عینک ماه این بیست است لاله",
    "ح خ ص ض خ ح ص ض ص خ ض ح ص خ ض ح خانه ض ح عینک ماه ح خ ص ض خ ح ص ض ص خ ض ح ص خ ض ح خانه ض ح عینک ماه ح خ ص ض خ ح ص ض ص خ ض ح ص خ ض ح خانه ض ح عینک ماه",
    "ج چ ج چ ج چ ج چ ج چ چاله عجله نکن عینک من شکسته است چ ج ج چ ج چ ج چ ج چ ج چ ج چ ج چ چاله عجله نکن عینک من شکسته است چ ج ج چ ج چ",
    "پ پ پ پ پ پ پ پ پ پ پ پله خیلی بالا است پای من شکسته است پیچ من کجا است پ پ پ پ پ پ پ پ پ پ پ پله خیلی بالا است پای من شکسته است پیچ من کجا است",
    "ر ز د ذ ر ز د ذ د ذ ر ز کجا به سلامت من به شما کار دارم پای من را شکسته ای پیسه من را بده این کار شما شایسته شما نیست ر ز د ذ ر ز ذ د رر زز دد ذذ",
    "ط ظ و . و. و. طظ ط ظ ظ ط و . کار خود را به خدا بسپارید که او حلال مشکلات است. و همیشه از او کمک بخواهید. . و . و ط ظ طط ظظ وو .. طاهر همیشه به من در کار هایم کمک میکند. و برادر او ظاهر هم همینطور.",
]

let audio = new Audio("click1.mp3");
let replacedLesson = "";
let newLessonChanges = "";
let lesson;
let char;
let value = "";
let pointerTimer;
let pointerOn = true;
let currentExercise;
let completedLessons = 0;
let speed, speedTimer;
let sec = 0;
let words = 1;
let callSpeedTimer = false;


document.addEventListener('keypress', (e) => {
    value = e.key;
    if (lesson >= 0 && char >= 0) {
        input();
        pointer.style.visibility = "visible";
        if (callSpeedTimer === false) {
            speedTimer = setInterval(sTimer, 1000);
            callSpeedTimer = true;
        }
    }
})

function input() {
    if (value === persionExercises[lesson][char]) {
        newLessonChanges += value;
        replaceChar(persionExercises[lesson], newLessonChanges);

        writtenLetters.textContent += value;
        char++;
    } else {
        audio.play();
    }
}

function replaceChar(old, newLesson) {
    replacedLesson = "";
    if (newLesson.length === old.length) {
        completedLessons++;
        countSpeed();
        startLessons()

    }
    for (let i = newLesson.length; i < old.length; i++) {
        replacedLesson += old[i];
    }
    lessonText.textContent = replacedLesson;
}

function pointerDisplay() {
    if (pointerOn) {
        pointer.style.visibility = "hidden";
        pointerOn = false;
    } else {
        pointer.style.visibility = "visible";
        pointerOn = true;
    }
}

startLessons()

function startLessons() {
    if (lesson >= 0 && lesson + 1 != completedLessons) {
        alert("این درس را تکمیل کنید")
        return;
    }
    if (currentExercise >= 0) {
        lesson++;
    } else {
        lesson = 0;
    }
    if (lesson >= 12) {
        lessonText.textContent = "پایان"
        return;
    }
    countWords()
    speedText.textContent = "0";
    callSpeedTimer = false;

    currentExercise = lesson;
    char = 0;
    value = "";
    replacedLesson = "";
    newLessonChanges = "";
    writtenLetters.textContent = "";

    lessonText.textContent = persionExercises[lesson];
    writtenLetters.textContent = '';
    pointer.style.visibility = "visible";
    clearInterval(pointerTimer);
    pointerTimer = setInterval(pointerDisplay, 500);
};
function sTimer() {
    sec++;
}

function countWords() {
    for (let i = 0; i < persionExercises[lesson].length; i++) {
        if (persionExercises[lesson][i] === " ") {
            words++;
        }
    }
}

function countSpeed() {
    console.log("countspeed");
    let userSpeed = (60 * words) / sec;
    console.log(words + " words");
    console.log(sec + " secs");
    speedText.textContent = Math.floor(userSpeed);
    words = 1;
    sec = 0;
    clearInterval(speedTimer);
}