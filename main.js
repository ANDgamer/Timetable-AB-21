const currentDate = document.getElementById('Date');
const content = document.getElementById('Content');

function trackScroll() {
  var scrolledPixels = content.scrollTop;
  if (scrolledPixels >= 8) {
    if(!currentDate.classList.contains('scrolled')){
      currentDate.classList.add("scrolled");
    }
  }
  else {
    if (currentDate.classList.contains('scrolled')) {
      currentDate.classList.remove('scrolled');
    }
  }
  var topPosition = content.scrollTop;
}

// Виклик функції при прокручуванні сторінки
content.addEventListener('scroll', trackScroll);

// Swiper js
const arr = ["ПН", "ВТ", "СР", "ЧТ", "ПТ"]; 

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    bulletClass: "bullet",
    bulletActiveClass: "active",
    clickable: true,
    renderBullet: function (index, className) { 
      return '<div class="' + className + '">' + arr[index] + "</div>"; 
    }, 
  },
});