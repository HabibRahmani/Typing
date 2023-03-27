import { exercises } from "./languages";
const lessons = document.querySelectorAll('.lesson');
const lessonText = document.querySelector('.lesson-text');
const currentLesson = document.querySelector('.current-lesson');


for(let i = 0; i < lessons.length; i++){
    lessons[i].addEventListener("click", function() {
        lessonText.textContent = exercises[i];
        lessonText.style.textAlign = "left";
        currentLesson.textContent = "Lesson_"+(i+1);
    })
}
