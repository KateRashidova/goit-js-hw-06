

const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', (event) => {
    const email = event.currentTarget.elements.email.value;
       const password = event.currentTarget.elements.password.value;
    event.preventDefault();
     
    if (email === '' || password === '') {
        alert('Все поля должны быть заполнены!')
    } else {
        const inputValue = {
        email,
        password,
    }
        console.log(inputValue);
        
    }
    
    formRef.reset()
});

