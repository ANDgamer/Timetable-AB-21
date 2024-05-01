// Виклик функції при прокручуванні сторінки
const days = document.querySelectorAll('.day');

function trackScroll(event) {
  var scrolledPixels = event.target.scrollTop;
  const currentDate = event.target.querySelector('.date');
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

// Отримати назву місяця
const monthNames = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];

// Заміна чисельника або знаменника
const body = document.body;
function getCurrentWeekNumber() {
  var currentDate = new Date();
  var baseDate = new Date(2024, 1, 11);
  var diffMilliseconds = currentDate - baseDate;
  //console.log(`${currentDate} - ${baseDate} = ${diffMilliseconds}`);
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
    return dayOfWeek;
  }
  else if (dayOfWeek === 6) {
    return 4;
  }
  else {
    return dayOfWeek - 1;
  }
}

const dates = document.querySelectorAll('.date');
// Отримати поточну дату
const today = new Date();
// Отримати номер дня тижня (неділя - 0, понеділок - 1, ..., субота - 6)
const dayOfWeek = today.getDay();
// Отримати номер поточного дня в місяці
const dayOfMonth = today.getDate();
// Розрахувати номер понеділка цього тижня
const monday = dayOfMonth - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
// Розрахувати номер п'ятниці цього тижня
const friday = monday + 4;

// Заповнити масив числами місяця
for (let i = 0; i < dates.length; i++) {
  const date = new Date(today.getFullYear(), today.getMonth(), monday + i);
  dates[i].innerHTML = date.getDate() + " " + monthNames[date.getMonth()];
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
  initialSlide: getCurrentDayOfWeek(),
  breakpoints: {
    1440: {
      slidesPerView: 5,
      // pagination: {
      //   enabled: false,
      // }
    }
  }
});

// підсвічування поточного дня
function setCurrentdayOfWeek() {
  setTimeout(function() {
    const content = document.getElementById('content');
    const dayBtns = document.querySelectorAll('.dayBtn');
    if (window.innerWidth < 1440) {
      dayBtns[dayOfWeek - 1].classList.add('current');
    }
  }, 10); // Затримка в мілісекундах
}
setCurrentdayOfWeek();

window.addEventListener('resize', function() {
  swiper.activeIndex = getCurrentDayOfWeek();
  setCurrentdayOfWeek();
});

//----------------------------------------------------------------------
// Вікно контакту з розробниками
function changeContactPageStatus(setStatus) {
  let contactPage = document.getElementById('contactPage');
  if (setStatus == 1) {
    contactPage.style.visibility='visible';
  }
  else if (setStatus == 0) {
    contactPage.style.visibility='hidden';
  }
}

function copy(copyValue) {
  navigator.clipboard.writeText(copyValue);

  // Alert the copied text
  // alert("Copied the text");
}