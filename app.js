const formCols = document.querySelectorAll(".form-col");
const form = document.getElementById("reg-form");
const firstName = form.elements[0];
const lastName = form.elements[1];
const email = form.elements[2];
const password = form.elements[3];

// !!!!!!!!!
//
// BUGS:
// submitting the form does not work. The form is checked before submission, but not submitted anyways.
// tried few ways of e-mail regex check and applying it to the addEventListener method below, but any wrong email passed as a correct one. (See the commented area at the bottom).
//
// !!!!!!!!!

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (firstName.value.trim() || lastName.value.trim() || email.value.trim() || password.value.trim() === "") {

        for (let i = 0; i < formCols.length; i++) {
            if (formCols[i].value.trim() === "") {
                formCols[i].nextElementSibling.classList.add("show");
                formCols[i].classList.add("red-addons");
            } else if (formCols[i].nextElementSibling.classList.contains("show")) {
                formCols[i].nextElementSibling.classList.remove("show");
                formCols[i].classList.remove("red-addons");
            }
        }
    } else if (!(document.querySelectorAll(".error-mes").classList.contains("show"))) {
        form.submit();
    }

})

//Here is the addEventListener method with methods checkFormInputs and checkEmail (for reg-ex email check) implemented that failed:

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     if (!checkFormInputs()) {

//         for (let i = 0; i < formCols.length; i++) {
//             if ((formCols[i].value.trim() === "") || !checkEmail()) {
//                 formCols[i].nextElementSibling.classList.add("show");
//                 formCols[i].classList.add("red-addons");
//             } else if (formCols[i].nextElementSibling.classList.contains("show")) {
//                 formCols[i].nextElementSibling.classList.remove("show");
//                 formCols[i].classList.remove("red-addons");
//             }
//         }
//     } else if (!(document.querySelectorAll(".error-mes").classList.contains("show"))) {
//         form.submit();
//     }

// })
// function checkFormInputs() {


//     if (firstName.value.trim() || lastName.value.trim() ||
//         email.value.trim() || password.value.trim() === "") {
//         return false;
//     } else if (!checkEmail()) {
//         return false;
//     }
//     return true;
// }

// function checkEmail() {
//     const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|
//(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     if (!regexEmail.test(String(email.value).toLowerCase())) {
//         return false;
//     } else {
//         return true;
//     }