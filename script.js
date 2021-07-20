'use strict';

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');
const colorsGroup = document.querySelector('.colors-group');

function generatePastColorElement(generatedColor) {
  const colorsGroupChild = document.createElement('div');
  colorsGroupChild.classList.add('colors-group-child');

  const pastColorElement = document.createElement('div');
  pastColorElement.classList.add('past-color');
  pastColorElement.style.backgroundColor = generatedColor;

  const pastColorText = document.createElement('p');
  pastColorText.innerHTML = generatedColor;

  colorsGroupChild.appendChild(pastColorElement);
  colorsGroupChild.appendChild(pastColorText);

  return colorsGroupChild;
}

btn.addEventListener('click', function () {
  let colorGenerated = Math.random().toString(16).substring(2, 8);
  const styledColor = `#${colorGenerated}`;

  document.body.style.backgroundColor = styledColor;
  color.innerHTML = styledColor;
  color.style.color = styledColor;
  btn.style.boxShadow = `5px 4px 7px -7px ${styledColor}`;

  const createdNewColorsGroupChild = generatePastColorElement(styledColor);

  colorsGroup.appendChild(createdNewColorsGroupChild);

  if (colorsGroup.offsetHeight > 700) {
    colorsGroup.style.overflowY = 'scroll';
  }
});
