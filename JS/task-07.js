const rangeSnake = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

const changeFontSize = (e)=>{

    textSpan.style.fontSize = `${e.target.value}px`;
}
rangeSnake.addEventListener('input', changeFontSize);
