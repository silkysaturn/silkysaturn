const loginSec = document.getElementById("login-section");
const loginButton = document.getElementById("login-bttn");
const loginError = document.getElementById("login-error");

if (loginButton){
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();

        const user = loginSec.username.value;
        const pass = loginSec.password.value;

        if (user == "Maya" && pass == "Developer"){
            location.href = "page.html";
        } else {
            loginError.style.opacity = 1;
        }
    });
}
