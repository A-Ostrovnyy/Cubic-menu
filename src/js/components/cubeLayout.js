import data from './data'
import navigation from './menuMarkup';
import fillData from './fillData'

const root = document.getElementById('root');

const cube = document.createElement('div');
cube.className = `cube cube--isNotFliped`;

const cubeFront = document.createElement('div');
cubeFront.className = `cube__front cube__side`;

const cubeRight = document.createElement('div');
cubeRight.className = `cube__right cube__side`;

cubeFront.innerHTML = fillData(data[0]);
setData(cubeFront);

function setData(side) {
  cubeRight.appendChild(navigation);
  cube.appendChild(side);
  cube.appendChild(cubeRight);
  root.appendChild(cube);
}

export default setData
