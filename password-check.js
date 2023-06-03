let form = document.querySelector("#signUpForm");
let password = form.pword;
let conPassword = form.conPword;
let feedback = document.getElementById("confirmPasswordMatch");
let isPasswordMatch = false;

submitBtn = document.getElementsByClassName("submitBtn")

conPassword.addEventListener("input", () =>{
    if (password.value != conPassword.value) {
        feedback.innerHTML = "Passwords do not match.";
        feedback.setAttribute('style', 'transition: all 0.5s')
        isPasswordMatch = false;
        conPassword.setAttribute('style', 'border: solid 2px red')
    } else {
        feedback.innerHTML = "";
        conPassword.setAttribute('style', 'border: solid 2px greenyellow')
        isPasswordMatch = true;
    }
})

form.onsubmit = function () {
    if (isPasswordMatch) {
        alert("Form submitted. Great!");
        return true;
    }
    alert("Wait! Password did not match.");
    return false;
};