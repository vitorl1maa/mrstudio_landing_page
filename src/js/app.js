const btnMenu = document.querySelector('.btn-menu');
const nav = document.querySelector('.ul');
const slides = document.querySelectorAll('.slides .slides-img');
const firstImgIndixe = 0;
const firstImg = document.querySelector('.first-img');

btnMenu.addEventListener('click', () => {
  if(nav.classList.contains('active')) {
    nav.classList.remove('active');
    document.querySelector('.btn-menu i').classList.add('fa-bars');
    document.querySelector('.btn-menu i').classList.remove('fa-x');

  } else {
    nav.classList.add('active');
    document.querySelector('.btn-menu i').classList.add('fa-x');
    document.querySelector('.btn-menu i').classList.remove('fa-bars');

  }
});

const scrollAnimation = ScrollReveal ({
  distance: '60px',
  duration: 2500,
  reset: true
});

scrollAnimation.reveal('#home-info', {delay:400, origin:'top'});

let interval = 0;
let maxSlider = document.querySelectorAll('.box-img').length -1;
console.log(maxSlider);

action();

function action() {
  let img = document.querySelectorAll('.box-img');

  setInterval(function() {
    img[interval].style.display = 'none';
    interval++;

    if(interval > maxSlider){
      interval = 0;

    }
    img[interval].style.display = 'block';

  },3000)

}