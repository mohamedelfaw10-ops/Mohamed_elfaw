const courses = {

html: {
title: "كورس HTML كامل",
lessons: [
{
title: "الدرس 1: ما هي HTML؟",
text: "HTML هي اللغة التي تستخدم لبناء هيكل صفحات الويب.",
code: `<h1>عنوان الصفحة</h1>
<p>هذه فقرة</p>`
},
{
title: "الدرس 2: العناوين والفقرات",
text: "نستخدم h1 إلى h6 للعناوين و p للفقرات.",
code: `<h1>عنوان كبير</h1>
<h2>عنوان أصغر</h2>
<p>هذه فقرة نصية.</p>`
},
{
title: "الدرس 3: الروابط",
text: "نستخدم a لإنشاء رابط.",
code: `<a href="https://google.com">
اذهب إلى Google
</a>`
},
{
title: "الدرس 4: الصور",
text: "نستخدم img لإضافة صورة.",
code: `<img src="image.jpg" width="300">`
},
{
title: "الدرس 5: القوائم",
text: "يمكن إنشاء قوائم مرتبة وغير مرتبة.",
code: `<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
</ul>`
},
{
title: "الدرس 6: النماذج",
text: "تستخدم form لإنشاء نماذج إدخال البيانات.",
code: `<form>
<input type="text" placeholder="اكتب اسمك">
<button>إرسال</button>
</form>`
}
]
},

css: {
title: "كورس CSS كامل",
lessons: [
{
title: "الدرس 1: ما هي CSS؟",
text: "CSS تستخدم لتنسيق وتصميم صفحات HTML.",
code: `body {
  background: lightblue;
  color: black;
}`
},
{
title: "الدرس 2: الألوان",
text: "يمكن تغيير لون النص والخلفية باستخدام color و background.",
code: `h1 {
  color: blue;
  background: yellow;
}`
},
{
title: "الدرس 3: الخطوط",
text: "يمكن تغيير نوع وحجم الخط.",
code: `p {
  font-size: 20px;
  font-family: Arial;
}`
},
{
title: "الدرس 4: Box Model",
text: "يتكون العنصر من content و padding و border و margin.",
code: `.box {
  padding: 20px;
  margin: 10px;
  border: 2px solid black;
}`
},
{
title: "الدرس 5: Flexbox",
text: "Flexbox تستخدم لترتيب العناصر بجانب بعضها.",
code: `.container {
  display: flex;
  gap: 20px;
}`
},
{
title: "الدرس 6: Position",
text: "يمكن استخدام position لتحريك وترتيب العناصر.",
code: `.box {
  position: relative;
  left: 20px;
}`
}
]
},

js: {
title: "كورس JavaScript كامل",
lessons: [
{
title: "الدرس 1: ما هي JavaScript؟",
text: "JavaScript تضيف التفاعل والحركة إلى صفحات الويب.",
code: `alert("Hello World");`
},
{
title: "الدرس 2: المتغيرات",
text: "نستخدم let و const لتخزين البيانات.",
code: `let name = "Mohamed";
const age = 15;

console.log(name);
console.log(age);`
},
{
title: "الدرس 3: الشروط",
text: "نستخدم if لاتخاذ القرارات.",
code: `let age = 18;

if (age >= 18) {
  console.log("مسموح");
} else {
  console.log("غير مسموح");
}`
},
{
title: "الدرس 4: الحلقات",
text: "تستخدم الحلقات لتكرار الأوامر.",
code: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}`
},
{
title: "الدرس 5: الدوال",
text: "الدوال تجمع مجموعة من الأوامر لتنفيذها عند الحاجة.",
code: `function hello() {
  console.log("Hello Mohamed");
}

hello();`
},
{
title: "الدرس 6: التعامل مع HTML",
text: "يمكن لـ JavaScript تغيير محتوى عناصر HTML.",
code: `document.getElementById("title")
.innerHTML = "Hello Mohamed";`
}
]
},

python: {
title: "كورس Python كامل",
lessons: [
{
title: "الدرس 1: البداية",
text: "Python لغة سهلة وقوية وتستخدم في مجالات كثيرة.",
code: `print("Hello World")`
},
{
title: "الدرس 2: المتغيرات",
text: "نستخدم المتغيرات لتخزين البيانات.",
code: `name = "Mohamed"
age = 15

print(name)
print(age)`
},
{
title: "الدرس 3: الشروط",
text: "نستخدم if لاتخاذ القرارات.",
code: `age = 18

if age >= 18:
    print("Adult")
else:
    print("Young")`
},
{
title: "الدرس 4: الحلقات",
text: "تستخدم for لتكرار الأوامر.",
code: `for i in range(5):
    print(i)`
},
{
title: "الدرس 5: الدوال",
text: "نستخدم def لإنشاء الدوال.",
code: `def hello():
    print("Hello Mohamed")

hello()`
}
]
},

cpp: {
title: "كورس C++ كامل",
lessons: [
{
title: "الدرس 1: البداية",
text: "C++ لغة قوية تستخدم في البرامج والألعاب.",
code: `#include <iostream>
using namespace std;

int main() {
  cout << "Hello World";
  return 0;
}`
},
{
title: "الدرس 2: المتغيرات",
text: "يمكن تخزين الأرقام والنصوص داخل المتغيرات.",
code: `int age = 15;
string name = "Mohamed";`
},
{
title: "الدرس 3: الشروط",
text: "نستخدم if لاتخاذ القرارات.",
code: `if (age >= 18) {
  cout << "Adult";
} else {
  cout << "Young";
}`
},
{
title: "الدرس 4: الحلقات",
text: "نستخدم for لتكرار الأوامر.",
code: `for (int i = 0; i < 5; i++) {
  cout << i;
}`
}
]
},

java: {
title: "كورس Java كامل",
lessons: [
{
title: "الدرس 1: البداية",
text: "Java لغة برمجة تستخدم في التطبيقات والأنظمة.",
code: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`
},
{
title: "الدرس 2: المتغيرات",
text: "يمكن استخدام int و String وغيرها لتخزين البيانات.",
code: `int age = 15;
String name = "Mohamed";`
},
{
title: "الدرس 3: الشروط",
text: "نستخدم if لاتخاذ القرارات.",
code: `if (age >= 18) {
  System.out.println("Adult");
} else {
  System.out.println("Young");
}`
},
{
title: "الدرس 4: الحلقات",
text: "تستخدم for لتكرار الأوامر.",
code: `for (int i = 0; i < 5; i++) {
  System.out.println(i);
}`
}
]
},

php: {
title: "كورس PHP كامل",
lessons: [
{
title: "الدرس 1: البداية",
text: "PHP تستخدم في برمجة مواقع الويب.",
code: `<?php
echo "Hello World";
?>`
},
{
title: "الدرس 2: المتغيرات",
text: "تبدأ متغيرات PHP بعلامة الدولار.",
code: `<?php
$name = "Mohamed";
$age = 15;

echo $name;
?>`
},
{
title: "الدرس 3: الشروط",
text: "يمكن استخدام if لاتخاذ القرارات.",
code: `<?php

$age = 18;

if ($age >= 18) {
  echo "Adult";
} else {
  echo "Young";
}

?>`
}
]
},

sql: {
title: "كورس SQL كامل",
lessons: [
{
title: "الدرس 1: ما هي SQL؟",
text: "SQL تستخدم للتعامل مع قواعد البيانات.",
code: `SELECT * FROM students;`
},
{
title: "الدرس 2: إنشاء جدول",
text: "نستخدم CREATE TABLE لإنشاء جدول.",
code: `CREATE TABLE students (
  id INT,
  name VARCHAR(50),
  age INT
);`
},
{
title: "الدرس 3: إضافة بيانات",
text: "نستخدم INSERT لإضافة البيانات.",
code: `INSERT INTO students
VALUES (1, 'Mohamed', 15);`
},
{
title: "الدرس 4: البحث عن البيانات",
text: "نستخدم SELECT للحصول على البيانات.",
code: `SELECT name, age
FROM students;`
},
{
title: "الدرس 5: WHERE",
text: "تستخدم WHERE لتحديد البيانات المطلوبة.",
code: `SELECT *
FROM students
WHERE age > 15;`
}
]
}

};


function showCourse(language) {

  const course = courses[language];

  let html = `
    <button class="back" onclick="goHome()">⬅ العودة للرئيسية</button>

    <h2>📚 ${course.title}</h2>

    <p>عدد الدروس: ${course.lessons.length}</p>
  `;

  course.lessons.forEach((lesson, index) => {

    html += `
      <div class="lesson">

        <h3>${lesson.title}</h3>

        <p>${lesson.text}</p>

        <h4>💻 مثال:</h4>

        <pre>${lesson.code}</pre>

      </div>
    `;

  });

  document.getElementById("content").innerHTML = html;
}


function goHome() {

  document.getElementById("content").innerHTML = `
    <h2>👋 أهلاً بك في أكاديمية Mohamed Elfaw</h2>

    <p>
      اختار أي لغة برمجة من القائمة لفتح الكورس الخاص بها.
    </p>

    <div class="welcome">
      <h3>📚 الكورسات المتاحة</h3>

      <p>
        HTML - CSS - JavaScript - Python - C++ - Java - PHP - SQL
      </p>
    </div>
  `;
}