const lessons = document.querySelectorAll('.lesson');
const lessonText = document.querySelector('.text');
const currentLesson = document.querySelector('.current-lesson');
const score = document.querySelector('.score');
const writtenLetters = document.querySelector('.writtenLetters'); 
const pointer = document.querySelector('.pointer');
const startBtn = document.querySelector('.start-btn-lang');



const exercises = [
    "asl; ll aa ss ;; all saa a;; ll aa llss aa;; ssll llaa ss;; ssaa aa ;; ll llaa ll;; ssaa aa;; llss aa;; ss aass llss;; asl; ll aa ss ;; all saa a;; ll aa llss aa;; ssll llaa ss;; ssaa aa ;; ll llaa ll;; ssaa aa;; ;;ss aall ss aass llss;; asl; ll aa ss ;; all saa a;; ll aa llss aa;; ssll llaa ss;; ssaa aa ;; ll llaa ll;; ssaa aal; ;;ss aass ss aass llss;; asl;",
    "df fj jk dddd jjkk dkjf fjkd fjj kdd kkaa all; dddd fjj kk ssll fjkl add jkl; df jk dddd jjkk dkjf fjkd fjj kdd add all; dddd fjj kk ssll fjkl fall jkl; df jk dddd jjkk dkjf fjkd fjj kdd kkaa all; dddd fjj kk ssll fjkl asdf jkl; df jk dddd jjkk dkjf add all; fjj kdd kkaa all; dddd fjj kk ssll fjkl asdf jkl; df jk dddd jjkk dkjf fjkd fjj kdd kkaa df fj dddd fjj kk ssll fjkl asdf jkl;",
    "gh hg fg hj jh gghh gff hjj kdd all; fall jjhhh ffgg hhjj ggff add all; sad gh hg fg hj jh gghh gff hjj kdd all; fall jjhhh ffgg hhjj ggff add all; sad gh hg fg hj jh gghh gff hjj kdd all; fall jjhhh ffgg hhjj ggff add all; sad gh hg fg hj jh gghh gff hjj kdd all; fall jjhhh ffgg hhjj ggff add all; sad",
    "tt yy tg yh jjyy fftt tg yh add all; sad ttgg yyhh jyjy fat hhyy ggtt fat all; ty tt yy tg yh jjyy fftt tg yh add all; sad ttgg yyhh jyjy fat hhyy ggtt fat all; ty tt yy tg yh jjyy fftt tg yh add all; sad ttgg yyhh jyjy fat hhyy ggtt fat all; ty tt yy tg yh jjyy fftt tg yh add all; sad ttgg yyhh jyjy fat hhyy ggtt fat all; ty",
    "rr uu fr ju tr yu fat add ttrr yyuu rruu yu tr add all; ru rr uu fr ju tr yu fat add ttrr yyuu rruu yu tr add all; ru rr uu fr ju tr yu fat add ttrr yyuu rruu yu tr add all; ru rr uu fr ju tr yu fat add ttrr yyuu rruu yu tr add all; ru",
    "ee ii ui re ty ru ei kid eat air ru all; sad fat fill full eat it yard air ear see ee ii ui re ty ru ei kid eat air ru all; sad fat fill full eat it yard air ear see ee ii ui re ty ru ei kid eat air ru all; sad fat fill full eat it yard air ear see",
    "ww oo you week all; this is a kid; oo ww wwee ooii the wood is far; eat that all; where are you ww oo hide ww oo you week all; this is a kid; oo ww wwee rrww iioo oouu  the wood is far; eat that all; where are you ww oo hide ww oo you week all; this is a kid; door is far; wwoo ooww wwee ooii wwrr oouu eat that all; where are you ww oo hide",
    "pp qq qqpp qqww ppoo wwqq oopp iq ep tq yp play quota; type this letter add this letter play that qqww ppoo iioo eeww ppqq pp qq qqpp qqww ppoo wwqq oopp iq ep tq yp play quota; type this letter add this letter play that qqww ppoo iioo eeww ppqq",
    "vv nn bb jjnn ffvv hhbb ggbb ; open this door please; board is far ; vv bb nn nj vf bh bg yynn ttvv uunn rrvv bbbb vv nn bb jjnn ffvv hhbb ggbb ; open this door please; board is far ; vv bb nn nj vf bh bg yynn ttvv uunn rrvv bbbb vv nn bb jjnn ffvv hhbb ggbb ; open this door please; board is far ; vv bb nn nj vf bh bg yynn ttvv uunn rrvv bbbb",
    "cc mm ddcc kkmm mmcc kmdc milk is some thing to drink and it has more vitamin for our body; try to drink milk every day cc mm ddcc kkmm mmcc kmdc milk is some thing to drink and it has more vitamin for our body; try to drink milk every day",
    "x, ,,xx ssxx ll,, sxl, ll,, ssxx ll,, sx l, ssxx the box is so far, ssxx ll,, x, ,,xx ssxx ll,, sxl, ll,, ssxx the box is so far, ssxx ll,, x, ,,xx ssxx ll,, sxl, ll,, ssxx the box is so far, ssxx ll,, xs ,l ssxx ll,, x, ,,xx ssxx ll,, sxl, ll,, ssxx the box is so far, ssxx ll,,",
    "zz .. ;;.. aazz ..;; zzaa az sx ;. l, i love to go to the zoo, but it is so far. zz .. ;;.. aazz ..;; zzaa az sx ;. l, i love to go to the zoo, but it is so far. zz .. ;;.. aazz ..;; zzaa az sx ;. l, i love to go to the zoo, but it is so far.",
];
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

document.addEventListener('keypress', (e) => {
    value = e.key;
    if (lesson >= 0 && char >= 0) {
        input();
        pointer.style.visibility = "visible";
    }
})

function input() {
    if (value === exercises[lesson][char]) {
        newLessonChanges += value;
        replaceChar(exercises[lesson], newLessonChanges);

        writtenLetters.textContent += value;
        char++;
        score.textContent = char;
    }else{
        audio.play();
    }
}

function replaceChar(old, newLesson) {
    replacedLesson = "";
    if(newLesson.length === old.length){
        completedLessons ++;
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

startBtn.addEventListener("click", () => {
    if(lesson >= 0 && lesson + 1 != completedLessons){
        alert("Complete This Lesson")
        return;
    }
    if (currentExercise >= 0) {
        lesson++;
    }else{
        lesson = 0;
    }
    if(lesson >= 12){
        lessonText.textContent = "The End!"
        return;
    }
    currentExercise = lesson;
    char = 0;
    value = "";
    replacedLesson = "";
    newLessonChanges = "";
    writtenLetters.textContent = "";
    score.textContent = 0;

    lessonText.textContent = exercises[lesson];
    currentLesson.textContent = "Lesson_" + (lesson + 1);
    writtenLetters.textContent = '';
    pointer.style.visibility = "visible";
    clearInterval(pointerTimer);
    pointerTimer = setInterval(pointerDisplay, 500);
    startBtn.textContent = "New Lesson"
});
