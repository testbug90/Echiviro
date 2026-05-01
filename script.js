// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');

const reveal = () => {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el => {
    if(el.getBoundingClientRect().top < trigger){
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', reveal);
reveal();


// Slideshow
const slides = document.querySelectorAll('.screen-slide');
let i = 0;

setInterval(()=>{
  slides[i].classList.remove('is-active');
  i = (i+1)%slides.length;
  slides[i].classList.add('is-active');
},3000);


// Aurora Parallax
const left = document.querySelector('.aurora-left');
const right = document.querySelector('.aurora-right');

window.addEventListener('scroll', ()=>{
  let y = window.scrollY;
  if(left && right){
    left.style.transform = `translateY(${y*0.2}px)`;
    right.style.transform = `translateY(${y*-0.2}px)`;
  }
});
