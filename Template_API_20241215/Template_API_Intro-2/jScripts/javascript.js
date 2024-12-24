// יצירת מערך רשימת קורסים
    const courses = [
        { name: "Scratch", desc: "תכנות חזותי למתחילות", img: "images/imgScratch.svg", duration: "3", price : 1500 },
        { name: "HTML", desc: "יסודות יצירת מבנה האינטרנט", img: "images/imgHtml.svg", duration: "2", price : 1800 },
        { name: "Python", desc: "שפת תכנות פופולרית ופשוטה", img: "images/imgPython.svg" , duration: "5", price : 2500},
        { name: "C#", desc: "שפה מודרנית לבניית יישומים", img: "images/imgC.svg", duration: "4", price : 2500 },
        { name: "JavaScript", desc: "שפת תכנות דינמית לאינטרנט", img: "images/imgJs.svg" , duration: "3", price : 2300},
        { name: "CSS", desc: "עיצוב ובניית אתרים", img: "images/imgCss.svg" , duration: "2", price : 1800 },
        { name: "Java", desc: "שפה עוצמתית ליישומים מורכבים", img:"images/imgJava.svg" , duration: "3", price : 2000 },
        { name: "SQL", desc: "ניהול נתונים ומאגרי מידע", img: "images/imgSql.svg" , duration: "6", price : 3000},
        { name: "Ruby", desc: "תכנות דינמי ואינטואיטיבי", img: "images/imgRuby.svg", duration: "5", price : 3000 },
        { name: "PHP", desc: "פיתוח צד שרת לאינטרנט", img: "images/imgPhp.svg" , duration: "5", price : 2500},
    ];



document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("course-list");
    renderCourses(courses, container);

    // פונקציית החיפוש עם פילטור הקורסים
    document.getElementById("search-btn").addEventListener("click", function () {
        const searchTerm = document.getElementById("search-box").value.toLowerCase();
        const filteredCourses = courses.filter(course =>
            course.name.toLowerCase().includes(searchTerm) || course.desc.toLowerCase().includes(searchTerm)
        );

        if (filteredCourses.length > 0) {
            renderCourses(filteredCourses, container);
        } else {
            container.innerHTML = "<p class='text-center text-muted'>לא נמצאו תוצאות.</p>";
        }
    });
});

// פונקציה עם לולאה להצגת כרטיסיות הקורסים מהמערך למעלה ויצירת כפתור לכל אחד מהם
function renderCourses(data, container) {
    container.innerHTML = "";
    data.forEach((course, index) => {
        const card = `
            <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="card">
                    <img src="${course.img}" class="card-img-top" alt="${course.name}">
                    <div class="card-body">
                        <h5 class="card-title">${course.name}</h5>
                        <p class="card-text">${course.desc}</p>
                        <button class="btn btn-info" onclick="showCourseDetails(${index})">למידע נוסף</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// הצגת מידע נוסף על הקורס ב-Modal
function showCourseDetails(index) {
    const course = courses[index];
    document.getElementById("courseModalLabel").innerText = course.name;
    document.getElementById("courseModalBody").innerHTML = `
        <p><strong>תיאור הקורס:</strong> ${course.desc}</p>
        <p><strong>משך הקורס:</strong> ${course.duration} חודשים</p>
        <p><strong>עלות הקורס:</strong> ${course.price} ₪</p>
    `;
    const modal = new bootstrap.Modal(document.getElementById('courseModal'));
    modal.show();
}

// יצירת כפתור גלילה למעלה
const backToTopBtn = document.createElement("button");
backToTopBtn.textContent = "↑";
backToTopBtn.className = "btn btn-primary position-fixed";
backToTopBtn.style.bottom = "20px";
backToTopBtn.style.right = "20px";
backToTopBtn.style.display = "none";
document.body.appendChild(backToTopBtn);

// הצגת כפתור גלילה כשהמשתמש גולל מעבר לנקודה מסוימת
window.addEventListener("scroll", function () {
    backToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

// החזרת הדף לראש ע"י גלילה מעלה
backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
