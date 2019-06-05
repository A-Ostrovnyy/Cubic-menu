import data from './components/data';
import navigation from './components/menuMarkup';
import setData from './components/setdata';
import handleMenu from './components/handleMenu';

const root = document.getElementById('root');

root.innerHTML = setData(data[0]);
root.appendChild(navigation);

const navigationItem = document.querySelectorAll('.navigation__item');
navigationItem[0].classList.add('navigation__item--isActive');

root.addEventListener('click', ({target}) => {
  if (target && target.matches('li.navigation__item')) {
    const checkedElement = el => target.textContent === el.name;
    root.innerHTML = setData(data.find(checkedElement));
    root.appendChild(navigation);
    navigationItem.forEach(item => {
      item.classList.remove('navigation__item--isActive');
    });
    target.classList.add('navigation__item--isActive');
  } else if (target && target.matches('div.hamburger-wrapper') || target.matches('div.close')) {
    handleMenu();
  }
});
