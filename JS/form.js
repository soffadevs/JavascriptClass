document.getElementById("signupform").addEventListener("submit", function(e){
    e.preventDefault();

    const firstName = document.getElementById("firstname").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorEl = document.getElementById("signupError");


    if (!firstName || !lastName || !email || !password || !confirmPassword){
        errorEl.textContent = "All field are required.";
        return;
    }

    if (password !== confirmPassword){
        errorEl.textContent = "Password do not match.";
        return;
    }


    if (password < 10){
        errorEl.textContent = "password must be more than 10 digit"
        return;
    }

    window.location.href = "home.html";

    
})


