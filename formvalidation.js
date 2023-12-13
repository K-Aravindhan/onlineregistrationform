// Global variables qs
let submitbutton = document.querySelector('.submit');
let resetbutton = document.querySelector('.reset');
let allfieldscheck = document.querySelectorAll('input');

// Global variables ids
let fullname = document.getElementById("name");
let phno = document.getElementById("phno");
let dob = document.getElementById("DOB");
let password = document.getElementById("password");

let male = document.getElementById("male");
let female = document.getElementById("female");
let others = document.getElementById("others");
let email = document.getElementById("email");
let country = document.getElementById("country");

//Validation variables
const letters = /^[A-Za-z ]+$/;
const numbers = /^[0-9]+$/;
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordformat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

//function needs to be active anytime to check if the focus is in order

submitbutton.addEventListener('click', function handleFormSubmission(event) {
    event.preventDefault();
    let gender = document.querySelector('input[name="gender"]:checked');
    if (fullname.value === "" || !fullname.value.match(letters) || phno.value === "" || !phno.value.match(numbers) || dob.value === "" || password.value === "" || password.value.length < 8 || !password.value.match(passwordformat) || !gender|| email.value === "" || !email.value.match(mailformat) || country.value === "default") {
        focusevent(); //
        alert("Please fill in all required fields.");

        if (fullname.value === "" || !fullname.value.match(letters)) {
            fullname.parentElement.className = "formfields_error";
        }
    
        if (phno.value === "" || !phno.value.match(numbers)) {
            phno.parentElement.className = "formfields_error";
        }
    
        if (dob.value === "") {
            dob.parentElement.className = "formfields_error";
        }
    
        if (password.value === "" || password.value.length < 8 || !password.value.match(passwordformat)) {
            password.parentElement.className = "formfields_error";
        }
    
        if (!(male.checked || female.checked || others.checked)) {
            document.getElementById("genderError").innerHTML = "Please select your gender.";
            male.closest(".formfields").className = "formfields_error";
        }
        }
    
        if (email.value === "" || !email.value.match(mailformat)) {
            email.parentElement.className = "formfields_error";
        }
    
        if (country.value === "default") {
            country.parentElement.className = "formfields_error";
        }
    else {
        alert("Form submitted successfully");
    }
    })

function focusevent() {
    if (fullname.value === "" || !fullname.value.match(letters)) {
        fullname.focus();
    }

    else if (phno.value === "" || !phno.value.match(numbers)) {
        phno.focus();
    }

    else if (dob.value === "") {
        dob.focus();
    }

    else if (password.value === "" || password.value.length < 8 || !password.value.match(passwordformat)) {
        password.focus();
    }

    else if (!(male.checked || female.checked || others.checked)) {
        male.focus();
    }

    else if (email.value === "" || !email.value.match(mailformat)) {
        email.focus();
    }

    else if (country.value === "default") {
        country.focus();
    }
}

//For individual input checks
for (let i = 0; i < allfieldscheck.length; i++) {
    // name
    allfieldscheck[i].addEventListener('blur', function namevalidation() {
        if (allfieldscheck[i] === fullname) {
            if (fullname.value === "") {
                document.getElementById("wrongentryname").innerHTML = "This field is required.";
                allfieldscheck[i].parentElement.className = "formfields_error";
            }
            else if (!fullname.value.match(letters)) {
                document.getElementById("wrongentryname").innerHTML = "Numbers and special characters are not allowed.";
                allfieldscheck[i].parentElement.className = "formfields_error";
            }
            else {
                allfieldscheck[i].parentElement.className = "formfields_success";
            }
        }
    })

    // phno
    allfieldscheck[i].addEventListener('blur', function phnovalidation() {
        if (allfieldscheck[i] === phno) {
            if (phno.value === "") {
                document.getElementById("wrongentrynumber").innerHTML = "This field is required.";
                allfieldscheck[i].parentElement.className = "formfields_error";
            }
            else if (!phno.value.match(numbers)) {
                document.getElementById("wrongentrynumber").innerHTML = "Only numbers are allowed.";
                allfieldscheck[i].parentElement.className = "formfields_error";
            }
            else {
                allfieldscheck[i].parentElement.className = "formfields_success";
            }
        }
    })

    // dob
    allfieldscheck[i].addEventListener('blur', function dobvalidation() {
        if (allfieldscheck[i] === dob) {
            if (dob.value === "") {
                document.getElementById("dobError").innerHTML = "This field is required.";
                allfieldscheck[i].parentElement.className = "formfields_error";
            }
            else {
                allfieldscheck[i].parentElement.className = "formfields_success";
            }
        }
    })

    // password
    allfieldscheck[i].addEventListener('blur', function passwordvalidation() {
        if (allfieldscheck[i] === password) {
            if (password.value === "") {
                document.getElementById("pswrdError").innerHTML = "This field is required.";
                allfieldscheck[i].parentElement.className = "formfields_error";
            }
            else if (password.value.length < 8) {
                document.getElementById("pswrdError").innerHTML = "Password must have at least 8 characters.";
                allfieldscheck[i].parentElement.className = "formfields_error";
            }
            else if (!password.value.match(passwordformat)) {
                document.getElementById("pswrdError").innerHTML = "Password must have at least one letter and one number.";
                allfieldscheck[i].parentElement.className = "formfields_error";
            }
            else {
                allfieldscheck[i].parentElement.className = "formfields_success";
            }
        }
    })

    // gender
    allfieldscheck[i].addEventListener('blur', function () {
        if (allfieldscheck[i] === male || allfieldscheck[i] === female || allfieldscheck[i] === others) {
            let checkedGender = male.checked || female.checked || others.checked;
            if (!checkedGender) {
                document.getElementById("genderError").innerHTML = "This field is required.";
                allfieldscheck[i].closest(".formfields").className = "formfields_error";
            }
            else {
                allfieldscheck[i].closest(".formfields").className = "formfields_success";
            }
        }
    })

    // Email
    allfieldscheck[i].addEventListener('blur', function () {
        if (allfieldscheck[i] === email) {
            if (email.value === "") {
                document.getElementById("emailError").innerHTML = "This field is required.";
                allfieldscheck[i].parentElement.className = "formfields_error";
            }
            else if (!email.value.match(mailformat)) {
                document.getElementById("emailError").innerHTML = "Invalid mailID, Please enter the correct mailID";
                allfieldscheck[i].parentElement.className = "formfields_error";
            }
            else {
                allfieldscheck[i].parentElement.className = "formfields_success";
            }
        }
    })
}

selectfieldvalidation();
function selectfieldvalidation() {
    country.addEventListener('blur', function () {
        if (country.options[country.selectedIndex].value === "default") {
            document.getElementById("CountryError").innerHTML = "This field is required.";
            country.parentElement.className = "formfields_error";
        }
        else {
            country.parentElement.className = "formfields_success";
        }
    })
}

resetbutton.addEventListener("click", function () {
    allfieldscheck.forEach(function (input) {
        if ( input.type === "radio") {
            input.closest('.formfields').className = "formfields";
            input.checked = false;  
        }
        else if ( input.type === "text") {
            input.parentElement.className = "formfields";
            input.value = "";
        }
        else if (input.type === "button" || input.type === "submit") {
            console.log("no changes");
        }
    })
    if (country && country.parentElement) {
        country.parentElement.className = "formfields";
    } else {
        console.error("Country element or its parent element is not found.");
    }
})
