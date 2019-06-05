import data from './data';

const navigation = document.createElement('div');
navigation.classList.add('navigation-wrapper', 'navigation--isHidden');

const navigationBlock = document.createElement('nav');
navigationBlock.classList.add('navigation');

const menuList = document.createElement('ul');

const closeButton = document.createElement('div');
closeButton.classList.add('close');
closeButton.id = 'close';

data.forEach(item => {
  let menuListItem = document.createElement('li');
  menuListItem.classList.add('navigation__item');
  menuListItem.innerHTML = item.name;
  menuList.appendChild(menuListItem);
});

navigation.appendChild(navigationBlock);
navigationBlock.appendChild(menuList);
navigation.appendChild(closeButton);

export default navigation;
