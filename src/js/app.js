import data from './components/data';
import navigation from './components/menuMarkup';
import setData from './components/setdata';
import handleMenu from './components/handleMenu';

const root = document.getElementById('root');

const hamburgerWrapper = document.createElement('div');
hamburgerWrapper.classList.add('hamburger-wrapper');
hamburgerWrapper.id = 'hamburger';

root.innerHTML = setData(data[0]);
root.appendChild(navigation);
root.appendChild(hamburgerWrapper);

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
    root.appendChild(hamburgerWrapper);
  } else if (target && target.matches('div.hamburger-wrapper') || target.matches('div#close')) {
    handleMenu();
  }
});
