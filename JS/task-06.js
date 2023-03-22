const inputValue = document.querySelector('#validation-input');


const doValidationCheck = (evt) =>{

    if (evt.target.value.length<inputValue.getAttribute('data-length') ||evt.target.value.length>inputValue.getAttribute('data-length')){
        inputValue.classList.add("invalid");
        alert(`очікувалося ${inputValue.getAttribute('data-length')} symbols, а не  ${evt.target.value.length}`)
    }else inputValue.classList.replace("invalid", "valid");

}

inputValue.addEventListener('blur', doValidationCheck);

