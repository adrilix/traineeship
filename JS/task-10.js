// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.

// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.

// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

const controls = document.querySelector('#controls');
const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);
const boxes = document.createElement('div')
boxes.style.display = "inline-flex";
boxes.style.gap = "5px";

function createBoxes(){
  let amount = input.value;
  
  for (let index = 0; index < amount; index +=1) {
  
    const box = document.createElement('div');

    box.style.width = String( 30 + 10 * index ) + 'px';
    box.style.height= String( 30 + 10 * index ) + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
  divBoxes.innerHTML='';
  
  divBoxes.append(boxes);
 
  input.value = '';

}

function destroyBoxes(){
  divBoxes.innerHTML='';
  boxes.innerHTML='';

  }






function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
