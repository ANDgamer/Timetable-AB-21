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