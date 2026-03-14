const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

const showSlide = index => {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
};

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// 自动轮播
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);
