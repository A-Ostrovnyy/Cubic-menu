import navigation from './components/menuMarkup';
import setData from './components/setdata';
import data from './components/data';
import handleMenu from './components/handleMenu'

const root = document.getElementById('root');

root.innerHTML = setData(0, data);
root.appendChild(navigation);

const navigationItem = document.querySelectorAll('.navigation__item');
navigationItem[0].classList.add('navigation__item--isActive');

root.addEventListener('click', ({target}) => {
  if (target && target.matches("li.navigation__item")) {
    root.innerHTML = setData(target.dataset.order, data);
    root.appendChild(navigation);
    navigationItem.forEach(item => {
      item.classList.remove('navigation__item--isActive');
    });
    navigationItem[target.dataset.order].classList.add('navigation__item--isActive');
  } else if (target && target.matches("div.hamburger-wrapper") || target.matches("div.close")) {
      handleMenu();
  } else {
    return
  }
});
