import data from './data'

let listItem = '';

data.forEach(item => {
  listItem += `<li class="navigation__item">${item.name}</li>
  `;
});

const navigation = document.createElement('div');
navigation.className = `navigation-wrapper navigation--isHidden`;
navigation.innerHTML = `
  <nav class="navigation">
    <ul>
      ${listItem}
    </ul>
  </nav>
  <div class="hamburger-wrapper" id="hamburger"></div>
  <div class="close" id="close"></div>
`;

export default navigation
