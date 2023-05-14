const Exercises = document.querySelector('.exercises');
const speed = document.querySelector('.speed')

const persionExercises = ["بتببتتبتبتببتتبتتبتبتتتتتتببتتبببتتتببتتببتبتبتتببتببتبت",
    "نینننینینننینیننینننینننیننینیننیننننیننیننیننیننینینیننینننینینننینن",
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


addLesson()

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