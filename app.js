const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const userName = loginInput.value;

}

loginForm.addEventListener("submit", onLoginSubmit);