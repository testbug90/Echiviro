// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


// Slideshow
const slides = document.querySelectorAll('.screen-slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('is-active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('is-active');
}, 3000);


// Aurora Parallax
const left = document.querySelector('.aurora-left');
const right = document.querySelector('.aurora-right');

window.addEventListener('scroll', () => {
  const y = window.scrollY;

  if (left && right) {
    left.style.transform = `translateY(${y * 0.2}px)`;
    right.style.transform = `translateY(${y * -0.2}px)`;
  }
});
