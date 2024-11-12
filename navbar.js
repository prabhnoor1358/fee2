const menuIcon = document.querySelector('#menu-icon');
const navbar = document.getElementsByClassName('navbar')[0];
const spans = navbar.querySelectorAll('span');
const loginBtn = document.getElementById('login-btn');

menuIcon.addEventListener('click', ()=>{

  if (menuIcon.src.endsWith('closeIcon.png')) {
    menuIcon.style.backgroundColor = 'grey';
    menuIcon.src = '../img/menuIcon.png';
  }
  else {
    menuIcon.style.backgroundColor = '#c90202';
    menuIcon.src = '../img/closeIcon.png';
  }


  if (navbar.classList.contains('expanded')) {
    navbar.classList.remove('expanded');
    spans.forEach(span => span.style.display = 'none');

  }
  else {
    navbar.classList.add('expanded');
    spans.forEach(span =>{
      span.style.display = 'block';
    });
  }

});
