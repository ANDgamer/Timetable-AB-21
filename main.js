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
  var baseDate = new Date(2024, 1, 10);
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
  initialSlide: getCurrentDayOfWeek(),
  breakpoints: {
    // when window width is >= 320px
    1440: {
      slidesPerView: 5,
      pagination: {
        enabled: false,
      }
    }
  }
});

//----------------------------------------------------------------------
const dates = document.querySelectorAll('.date')
// Отримати поточну дату
const today = new Date();
//today.setDate(14);
// Отримати день тижня
const dayOfWeek = today.getDay();
// Отримати номер дня в місяці
const dayOfMonth = today.getDate();
// Розрахувати номер понеділка
const monday = dayOfMonth - dayOfWeek + 1;
// Розрахувати номер п'ятниці
const friday = monday + 4;

const monthName = monthNames[today.getMonth()];
// Заповнити масив числами місяця
for (let i = monday; i <= friday; i++) {  
dates[i - monday].innerHTML = i + " " + monthName.charAt(0).toUpperCase() + monthName.slice(1);
}

// підсвічування поточного дня
// dates[dayOfWeek - 1].classList.add('active');
const dayBtns = document.querySelectorAll('.dayBtn');

dayBtns[dayOfWeek - 1].classList.add('current')

// Вікно контакту з розробниками
const contactPage = document.getElementById('contactPage');

function changePageStatus(setStatus) {
  if (setStatus == 1) {
    contactPage.style.visibility='visible';
  }
  else {
    contactPage.style.visibility='hidden';
  }
}