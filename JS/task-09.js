// 1. Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// 2. Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return`#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`; 
  ;
}
const btnToChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body');

btnToChangeColor.addEventListener('click', doChangeColor);

function doChangeColor (){
  body.style.backgroundColor = getRandomHexColor() ;
}



