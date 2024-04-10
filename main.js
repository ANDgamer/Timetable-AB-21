// Виклик функції при прокручуванні сторінки
const days = document.querySelectorAll('.day');

function trackScroll(event) {
  var scrolledPixels = event.target.scrollTop;
  const currentDate = event.target.querySelector('.Date');
  if (scrolledPixels >= 8) {
    if(!currentDate.classList.contains('scrolled')){
      currentDate.classList.add('scrolled');
    }
  }
  else {
    if (currentDate.classList.contains('scrolled')) {
      currentDate.classList.remove('scrolled');
    }
  }
  var topPosition = container.scrollTop;
}

days.forEach(element => {
  element.addEventListener('scroll', trackScroll);
});

// Заміна чисельника або знаменника
const body = document.body;
function getCurrentWeekNumber() {
  var currentDate = new Date();
  var baseDate = new Date(2024, 1, 12);
  var diffMilliseconds = currentDate - baseDate;
  var oneWeekMilliseconds = 7 * 24 * 60 * 60 * 1000;
  var weekNumber = Math.floor(diffMilliseconds / oneWeekMilliseconds) + 1;
  return weekNumber;
}

function isEven(weekNumber) {
  return weekNumber % 2 === 0;
}

if (isEven(getCurrentWeekNumber())) {
  body.classList.remove('num');
  body.classList.add('den');
} else {
  body.classList.remove('den');
  body.classList.add('num');
}

//Встановлення поточного дня тижня
function getCurrentDayOfWeek() {
  var currentDate = new Date();
  var dayOfWeek = currentDate.getDay();
  if (dayOfWeek === 0) {
    return 6; // Понеділок
  } else {
    return dayOfWeek - 1;
  }
}

// Swiper js
const arr = ["ПН", "ВТ", "СР", "ЧТ", "ПТ"]; 

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    bulletClass: "dayBtn",
    bulletActiveClass: "active",
    clickable: true,
    renderBullet: function (index, className) { 
      return '<div class="' + className + '">' + arr[index] + "</div>"; 
    }, 
  },
  initialSlide: getCurrentDayOfWeek()
});