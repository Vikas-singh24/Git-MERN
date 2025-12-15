const logbox = document.querySelectorAll("loginBox")
        const id = document.getElementById("text")
        const pass = document.getElementById("password")
        const hidebtn = document.getElementById("hide")
        const btn1 = document.getElementById("logIn")
       
       

hidebtn.addEventListener('click', () => {
    if (pass.type == "text") {
        pass.type = "password"
        logo.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        pass.type = "text"
        logo.classList.replace("fa-eye-slash", "fa-eye");
    }
})
function vaildColour(){
    if (id.value !== "" && pass.value.length > 8) {
    btn1.style.backgroundColor = "rgba(13, 162, 65, 0.855)"
    }
    else{
        btn1.style.backgroundColor = "lightgreen"
    }
}
id.addEventListener("input",vaildColour)
pass.addEventListener("input",vaildColour)

btn1.addEventListener("click", () => {
if (id.value !== "" && pass.value.length > 8) {
    
    alert("Login Successfully");
} 

});
vaildColour()
