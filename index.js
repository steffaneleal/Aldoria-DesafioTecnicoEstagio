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


/*carousel*/
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;
const gallery = document.querySelector(".gallery");

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const isLeft = control.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    const itemWidth = items[currentItem].offsetWidth + 15; 
    gallery.style.transform = `translateX(${-currentItem * itemWidth}px)`;

    items.forEach((item) => item.classList.remove("current-item"));
    items[currentItem].classList.add("current-item");
  });
});