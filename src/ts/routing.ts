const token = window.sessionStorage.getItem('token') ?? window.localStorage.getItem('token');

if (!token){
    if (location.pathname === '/' || location.pathname === '/index.html'){
        location.replace('welcome.html');
    }

    // else if(location.pathname === '/login-form.html'){
    //     location.replace('login-form.html')
    // }
}else{

}

// sign-in user

