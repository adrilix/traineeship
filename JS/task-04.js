// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const btnDecr = document.querySelector('[data-action=decrement]');

const btnIncr = document.querySelector('[data-action=increment]');

const resultValue = document.querySelector('#value');

const doDecrement = () =>{
    counterValue -= 1;
    resultValue.textContent = (`${counterValue}`) ;

}

const doIncrement = () =>{
    counterValue += 1;
    resultValue.textContent = (`${counterValue}`) ;

}

let counterValue = 0;

btnDecr.addEventListener("click", doDecrement);
btnIncr.addEventListener('click', doIncrement);




