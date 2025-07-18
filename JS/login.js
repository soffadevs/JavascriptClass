document.getElementById("login").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const errorEl = document.getElementById("logError");


    if (!email || !password){
        errorEl.textContent = "All field are required.";
        return;
    }

    window.location.href = "home.html";



})