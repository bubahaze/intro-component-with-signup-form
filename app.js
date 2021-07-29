//nazwa form2 jest do poprawy, zrobione na szybko bo poprzez 'form' nie potrafilem dostac sie do arrayu

const form2 = document.querySelectorAll(".form-col");
const form = document.getElementById("reg-form");
const firstName = form.elements[0];
const lastName = form.elements[1];
const email = form.elements[2];
const password = form.elements[3];

//CO NIE DZIALA: 
//submit gdy pola sa poprawnie wypelnione !! prawdopodobnie form.submit() powraca do eventlistener "submit", ktore na samym poczatku ma preventDefault i tak sie blokuje...
//reg-ex emaila niezrobiony
//po pojawieniu sie error-mes i wpisaniu stringa w pole error-mes nie cofa sie - NAPRAWIONE
//
// Jezeli naciskam submit button i ktorekolwiek z pol jest puste (lub email zle wpisany),
//to tam gdzie jest puste wyswietlam wiadomosc, zmieniam border pola i wyswietlam icon-error
form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (firstName.value.trim() || lastName.value.trim() ||
            email.value.trim() || password.value.trim() === "") {

            for (let i = 0; i < form2.length; i++) {
                if (form2[i].value.trim() === "") {
                    form2[i].nextElementSibling.classList.add("show");
                } else if (form2[i].nextElementSibling.classList.contains("show")) {
                    form2[i].nextElementSibling.classList.remove("show")
                }
            }
        } else if (!(document.querySelectorAll(".error-mes").classList.contains("show"))) {
            //form.submit();
        }

    })
    // let nameValid = hasValue(firstName, NAME_REQUIRED);
    // let lastNameValid = hasValue(lastName, LASTNAME_REQUIRED);
    // let emailValid = validateEmail(email, EMAIL_REQUIRED, EMAIL_INVALID);
    // let passwordValid = hasValue(password, PASSWORD_REQUIRED);
    // // if valid, submit the form.
    // if (nameValid && lastNameValid && emailValid && passwordValid) {
    //     alert("Demo only. No form was posted.");
    // }




// show a message with a type of the input
// function showMessage(input, message, type) {
//     // get the <small> element and set the message
//     const msg = input.nextElementSibling; //instead of nextElementSibling - parentNode.querySelector(".error-mes"); ??
//     msg.innerText = message;
//     // update the class for the input
//     input.className = type ? "success" : "error";
//     return type;
// }

// function showError(input, message) {
//     return showMessage(input, message, false);
// }

// function showSuccess(input) {
//     //shows empty string instead of error message
//     return showMessage(input, "", true);
// }

// function hasValue(input, message) {
//     if (input.value.trim() === "") {
//         return showError(input, message);
//     }
//     return showSuccess(input);
// }

// function validateEmail(input, requiredMsg, invalidMsg) {
//     // check if the value is not empty
//     if (!hasValue(input, requiredMsg)) {
//         return false;
//     }
//     // validate email format
//     const emailRegex =
//         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     const email = input.value.trim();
//     if (!emailRegex.test(email)) {
//         return showError(input, invalidMsg);
//     }
//     return true;
// }

// const NAME_REQUIRED = "First Name cannot be empty";
// const LASTNAME_REQUIRED = "Last Name cannot be empty";
// const EMAIL_REQUIRED = "E-mail Address cannot be empty";
// const EMAIL_INVALID = "Looks like this is not an email";
// const PASSWORD_REQUIRED = "Password cannot be empty";

// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let nameValid = hasValue(firstName, NAME_REQUIRED);
//     let lastNameValid = hasValue(lastName, LASTNAME_REQUIRED);
//     let emailValid = validateEmail(email, EMAIL_REQUIRED, EMAIL_INVALID);
//     let passwordValid = hasValue(password, PASSWORD_REQUIRED);
//     // if valid, submit the form.
//     if (nameValid && lastNameValid && emailValid && passwordValid) {
//         alert("Demo only. No form was posted.");
//     }
// })