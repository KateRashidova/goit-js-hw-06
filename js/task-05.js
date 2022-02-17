const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output')
const inputTextChange = inputRef.addEventListener('input', (event) => 
{
    if (event.currentTarget.value === "") {nameRef.textContent = 'Anonymous'}
    else {nameRef.textContent = event.currentTarget.value;};

});