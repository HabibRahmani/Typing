const lessons = document.querySelectorAll('.lesson');
const lessonText = document.querySelector('.lesson-text');

const exercises = [
    "asl; ll aa ss ;; all saa a;; ll aa llss aa;; ssll llaa ss;; ssaa aa ;; ll llaa ll;; ssaa aa;; llss aa;; ss aass llss;; asl; ll aa ss ;; all saa a;; ll aa llss aa;; ssll llaa ss;; ssaa aa ;; ll llaa ll;; ssaa aa;; ;;ss aall ss aass llss;; asl; ll aa ss ;; all saa a;; ll aa llss aa;; ssll llaa ss;; ssaa aa ;; ll llaa ll;; ssaa aal; ;;ss aass ss aass llss;; asl;",
    "df jk dddd jjkk dkjf fjkd fjj kdd kkaa all; dddd fjj kk ssll fjkl asdf jkl; df jk dddd jjkk dkjf fjkd fjj kdd kkaa all; dddd fjj kk ssll fjkl asdf jkl; df jk dddd jjkk dkjf fjkd fjj kdd kkaa all; dddd fjj kk ssll fjkl asdf jkl; df jk dddd jjkk dkjf fjkd fjj kdd kkaa all; dddd fjj kk ssll fjkl asdf jkl; df jk dddd jjkk dkjf fjkd fjj kdd kkaa all; dddd fjj kk ssll fjkl asdf jkl;",
    "3","4","5","6","7","8","9","10","11","12",];

for(let i = 0; i < lessons.length; i++){
    lessons[i].addEventListener("click", function() {
        lessonText.textContent = exercises[i];
    })
}
