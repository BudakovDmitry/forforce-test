import './styles.scss';
import './index.html';
window.addEventListener('DOMContentLoaded', function () {
  var carouselInner = document.querySelector('.carousel__inner');
  var prevButton = document.querySelector('.prev');
  var nextButton = document.querySelector('.next');
  var activeIndex = 0;
  prevButton.addEventListener('click', function () {
    activeIndex -= 1;
    if (activeIndex < 0) {
      activeIndex = carouselInner.children.length - 1;
    }
    carouselInner.style.transform = "translateX(-".concat(activeIndex * 100, "%)");
  });
  nextButton.addEventListener('click', function () {
    activeIndex += 1;
    if (activeIndex > carouselInner.children.length - 1) {
      activeIndex = 0;
    }
    carouselInner.style.transform = "translateX(-".concat(activeIndex * 100, "%)");
  });
  var cards = document.querySelectorAll('.card');
  cards.forEach(function (card) {
    return card.addEventListener('click', function () {
      cards.forEach(function (item) {
        return item.classList.contains('active') && item.classList.remove('active');
      });
      card.classList.add('active');
    });
  });
});