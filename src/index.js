import './styles.scss';
import './index.html';

window.addEventListener('DOMContentLoaded', () => {
  const carouselInner = document.querySelector('.carousel__inner');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let activeIndex = 0;

  prevButton.addEventListener('click', () => {
    activeIndex -= 1;
    if (activeIndex < 0) {
      activeIndex = carouselInner.children.length - 1;
    }
    carouselInner.style.transform = `translateX(-${activeIndex * 100}%)`;
  });

  nextButton.addEventListener('click', () => {
    activeIndex += 1;
    if (activeIndex > carouselInner.children.length - 1) {
      activeIndex = 0;
    }
    carouselInner.style.transform = `translateX(-${activeIndex * 100}%)`;
  });

  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => card.addEventListener('click', () => {
    cards.forEach(
      (item) => item.classList.contains('active') && item.classList.remove('active'),
    );
    card.classList.add('active');
  }));
});
