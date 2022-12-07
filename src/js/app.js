const btnMenu = document.querySelector('.btn-menu');
const nav = document.querySelector('.ul');

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

