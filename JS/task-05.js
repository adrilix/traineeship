// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputValue = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output')
const emptyInputData = 'Anonymous';

inputValue.addEventListener('input', (e)=>{

    outputName.textContent=e.currentTarget.value
    if (e.currentTarget.value === ''){
        outputName.textContent=emptyInputData;
    }
})