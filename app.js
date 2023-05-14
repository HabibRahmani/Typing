const Exercises = document.querySelector('.exercises');
const speed = document.querySelector('.speed')


const englishExercises = [
    "asl;llaass;;allsaaa;;llaallssaa;;ssllllaass;;ssaaaa;;llllaall;;",
    "dffjjkddddjjkkdkjffjkdfjjkddkkaaall;ddddfjjkkssllfjkladdjkl;df",
    "ghhgfghjjhgghhgffhjjkddall;falljjhhhffgghhjjggffaddall;sad",
    "ttyytgyhjjyyfftttgyhaddall;sadttggyhhjyjyfathhyyggttfat ll;",
    "rruufrjutryufaaddttrryyuurruuyutraddall;rurruufrjutryu",
    "eeiiuiretyrueikideatairruall;sadfatfillfulleatityard",
    "wwooyouweekall;thisiskid;oowwwweeooiithewoodisfar;eatthatall;",
    "ppqqqqppqqwwppoowwqqooppiqeptypplayquota;typethisletteradd",
    "vvnnbbjjnnffvvhhbbggbb;openthisdoorplease;boardisfar;vvbbnn ",
    "ccmmddcckkmmmmcckmdcmilkissomethingtodrinkandithasmorevitamin",
    "x,,xxssxxll,,sxl,ll,,ssxxll,,sxl,ssxxtheboxissofar,ssxxll,,",
    "zz..;;..aazz..;;zzaaazsx;.lilovetogotothezoo,butitissofar.",
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
    if(startSpeed){
        speedTimer = setInterval(countSpeed , 1000)
        startSpeed = false;
    }

})


addLesson()

function addLesson (){
    for(let i = 0; i < englishExercises[currentLesson].length; i++){
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

function checkForTrueWritten (){

    if(value === englishExercises[currentLesson][writtenTrueLetters]){
        letters = document.querySelectorAll('.letter');
        letters[writtenTrueLetters].style.backgroundColor = "#5294e6";
        writtenTrueLetters++;
        if(writtenTrueLetters === englishExercises[currentLesson].length){
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