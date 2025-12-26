const loginId = document.getElementById("text");
const loginPass = document.getElementById("password");
const loginBtn = document.getElementById("logIn");

const signFormInputs = document.querySelectorAll("#signUpForm input");
const signPass = document.getElementById("signPassword");
const signBtn = document.getElementById("signBtn");


document.querySelectorAll(".togglePass").forEach(btn => {
    btn.addEventListener("click", () => {
        const input = document.getElementById(btn.dataset.target);
        const icon = btn.querySelector("i");

        if (!input) return;

        if (input.type === "password") {
            input.type = "text";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        } else {
            input.type = "password";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        }
    });
});


function validateLogin() {
    if (loginId.value.trim() !== "" && loginPass.value.length > 8) {
        loginBtn.disabled = false;
        loginBtn.style.background = "rgba(13, 43, 162, 0.85)";
        loginBtn.style.cursor = "pointer";
    } else {
        loginBtn.disabled = true;
        loginBtn.style.background =
            "linear-gradient(120deg,rgba(21,56,162,0.31),rgba(12,140,182,1))";
        
    }
}

loginId.addEventListener("input", validateLogin);
loginPass.addEventListener("input", validateLogin);


function validateSignUp() {
    let allFilled = true;
    signFormInputs.forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });

    if (allFilled && signPass.value.length > 8) {
        signBtn.disabled = false;
        signBtn.style.background = "rgba(13, 43, 162, 0.85)";
        signBtn.style.cursor = "pointer";
    } else {
        signBtn.disabled = true;
        signBtn.style.background =
            "linear-gradient(120deg,rgba(21,56,162,0.31),rgba(12,140,182,1))";
        
    }
}

signFormInputs.forEach(input => {
    input.addEventListener("input", validateSignUp);
});


loginBtn.addEventListener("click", () => {
    if (!loginBtn.disabled) alert("Login Successfully");
});

signBtn.addEventListener("click", () => {
    if (!signBtn.disabled) alert("Sign Up Successfully");
});


loginBtn.disabled = true;
signBtn.disabled = true;
validateLogin();
validateSignUp();
