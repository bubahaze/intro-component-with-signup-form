const btn = document.getElementById("submit-btn");
const formCols = document.getElementsByTagName("input");
// previous formCols: document.querySelectorAll(".form-col");
// const form = document.getElementById("reg-form");
// const firstName = form.elements[0];
// const lastName = form.elements[1];
// const email = form.elements[2];
// const password = form.elements[3];


function checkEmail(email) {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexEmail.test(email)) {
        return (true);
    } else {
        return (false);
    }
}

function formValidation() {

    for (let i = 0; i < formCols.length; i++) {
        if (formCols[i].type === "email" && formCols[i].value.trim() != "") {
            let correctEmail = checkEmail(formCols[i].value);
            if (correctEmail === false) {
                formCols[i].className = "error";
                formCols[i].parentElement.lastElementChild.className = "message";
                formCols[i].parentElement.lastElementChild.innerHTML = "Look like this is not an email";
            } else {
                formCols[i].className = "inputField";
                formCols[i].parentElement.lastElementChild.className = "message-hide";
            }
        } else {
            if (formCols[i].value.trim() === "") {
                formCols[i].className = "error";
                formCols[i].parentElement.lastElementChild.className = "message";
                formCols[i].parentElement.lastElementChild.innerHTML = "This field cannot be blank";
            } else {
                formCols[i].className = "inputField";
                formCols[i].parentElement.lastElementChild.className = "message-hide";
            }
        }
    }
}

function clearFormCols() {
    for (i = 0; i < formCols.length; i++) {
        formCols[i].value = "";
    }
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    formValidation();
});

window.onload = () => {
    clearFormCols();
}




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