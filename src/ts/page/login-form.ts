const email = document.querySelector<HTMLInputElement>("#inputEmail")!;
const password = document.querySelector<HTMLInputElement>("#inputPassword")!;


email.addEventListener('input',function (){
    if (email.classList.contains('is-valid')){
        email.classList.remove('is-valid')
    }else if(email.classList.contains('is-invalid')){
        email.classList.remove('is-invalid')
    }
    (email.value.match("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"))? email.classList.add('is-valid') :
        email.classList.add("is-invalid");
})
password.addEventListener('input',function (){
    if (password.classList.contains('is-valid')){
        password.classList.remove('is-valid')
    }else if(password.classList.contains('is-invalid')){
        password.classList.remove('is-invalid')
    }
    (password.value.match("[A-Za-z\\0-9]{8}"))? password.classList.add('is-valid') :
        password.classList.add("is-invalid");
})


