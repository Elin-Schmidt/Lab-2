// The querySelector() method returns the first element that matches a CSS selector.
// To return all matches (not only the first), use the querySelectorAll() instead.
// The let statement declares a variable.
let headerMain = document.querySelector('.header-main');
let headerMobileBtn = document.querySelector('.mobile-menu-btn');
let headerMainAnimals = document.querySelector('.animal-links');
let headerMobileBtnAnimals = document.querySelector('.mobile-menu-btn-animals');

let isMenuOpen = false;
let isAnimalMenuOpen = false;

headerMobileBtn.onclick = function () {
  if (!isMenuOpen) {
    headerMain.style.display = 'flex';
    isMenuOpen = true;
  } else if (isMenuOpen) {
    headerMain.style.display = 'none';
    isMenuOpen = false;
  }
};
