const lessons = document.querySelectorAll('.lesson');
const lessonText = document.querySelector('.lesson-text');
const currentLesson = document.querySelector('.current-lesson');
const userInput = document.getElementById("userInput")
const score = document.querySelector('.score');
let curserLeft = 365;

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



let lesson;
let timer;
timer = setInterval(input, 20)
let char = 0;
function input() {
    let value = userInput.value;
    if (value === exercises[lesson][char]) {
        char++;
        score.textContent = char;
        curserLeft += 10;
        userInput.style.left = curserLeft+'px';
    }
    userInput.value = ""
    userInput.focus();

}
for (let i = 0; i < lessons.length; i++) {
    const a = userInput.value;

    lessons[i].addEventListener("click", function () {
        lesson = i;
        char = 0;
        score.textContent = char;
        userInput.value = a;
        console.log(userInput.value);
        lessonText.textContent = exercises[i];
        lessonText.style.textAlign = "left";
        currentLesson.textContent = "Lesson_" + (i + 1);
    })
}
exercises[0].style.color = 'red';
