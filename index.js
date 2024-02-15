/*MENU BUTTON*/

/*button animation*/
function animation(){            
    const btn = document.getElementById('header-nav-bt');
    btn.classList.toggle('activate');

    menu.classList.toggle('open');
    btnAnimation.classList.toggle('opened');
}

/*menu activate*/
const menu = document.getElementById('header-nav-mobile');
const btnAnimation = document.getElementById('header-nav-bt');

menu.addEventListener('click', animation);

