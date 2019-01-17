function handleMenu() {
  const hamburger = document.getElementById('hamburger');
  const navigationWrapper = document.querySelector('.navigation-wrapper');

  hamburger.classList.toggle('hamburger--isHidden');
  navigationWrapper.classList.toggle('navigation--isHidden');
  navigationWrapper.classList.toggle('navigation--isActive');
}

export default handleMenu
