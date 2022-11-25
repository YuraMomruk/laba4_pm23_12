
Exit2.onclick=function(){
  WorldMapBox.style.display='none';
}

ReportBoxExit.onclick=function(){
  ReportBox.style.display='none';
}
Exit4.onclick=function(){
  UsersTrendBox.style.display='none';
}
//Анімація
$(".Anim").slideDown('500');
$(".Anim").css('display','flex');

//Календар
let Numbers = 0;
$('.CelendarItem').attr('Number', false);

$('.CelendarItem').click(function (e) {
  let Number = $(this).attr('Number');
  if (Number == "false") {
      $(this).css('background-color', '#9b59b6');
      $(this).attr('Number', true);
      Numbers++;
  } else {
      $(this).css('background-color', '#8e44ad');
      $(this).attr('Number', false);
      Numbers--;
  }
});
const date = new Date();

const renderCalendar = () => {
date.setDate(1);

const monthDays = document.querySelector(".days");

const lastDay = new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  0
).getDate();

const prevLastDay = new Date(
  date.getFullYear(),
  date.getMonth(),
  0
).getDate();

const firstDayIndex = date.getDay();

const lastDayIndex = new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  0
).getDay();

const nextDays = 7 - lastDayIndex - 1;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.querySelector(".date h1").innerHTML = months[date.getMonth()];

document.querySelector(".date p").innerHTML = new Date().toDateString();

let days = "";

for (let x = firstDayIndex; x > 0; x--) {
  days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
}

for (let i = 1; i <= lastDay; i++) {
  if (
    i === new Date().getDate() &&
    date.getMonth() === new Date().getMonth()
  ) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

for (let j = 1; j <= nextDays; j++) {
  days += `<div class="next-date">${j}</div>`;
  monthDays.innerHTML = days;
}
};

document.querySelector(".prev").addEventListener("click", () => {
date.setMonth(date.getMonth() - 1);
renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
date.setMonth(date.getMonth() + 1);
renderCalendar();
});

renderCalendar();