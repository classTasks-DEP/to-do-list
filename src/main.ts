let lightMode = document.querySelector<HTMLButtonElement>("#light-mode")!;
let darkMode = document.querySelector<HTMLButtonElement>("#dark-mode")!;
let theme = document.querySelector<HTMLDivElement>("#theme h1")!;
let signUp = document.querySelector<HTMLButtonElement>("#sign-up")!;
let signIn = document.querySelector<HTMLButtonElement>("#sign-in")!;
let outer = document.querySelector<HTMLDivElement>("#outer")!;

lightMode.addEventListener('click',()=>{
       outer.style.backgroundColor="white"
       theme.style.color="#0c2461"
       signUp.style.backgroundColor="#198754"
       signIn.style.backgroundColor="#ffc107"
});

darkMode.addEventListener('click',()=>{
    outer.style.backgroundColor="black"
    theme.style.color="white"
    signUp.style.backgroundColor="#0dcaf0"
    signIn.style.backgroundColor="#0d6efd"
    signIn.style.borderStyle="none"
    signUp.style.borderStyle="none"
});