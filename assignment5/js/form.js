/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-undef */

// Question 1: Make a form with fields name, phone number, place, company name, pin code

// a) If any of the fields are empty on submitting it should show corresponding error messages below all the required fields.

// b) pin code and mobile number fields should not be submitted with non-integer values, if so, then show an error msg stating only numbers are allowed.

// c) The minimum length of the phone number should be 10, otherwise, show the corresponding error msg below the mobile no. field.

// d) On submission of the form, store the details in the local storage and clear the form. (it should stay on the same page don't refresh the page).

// e) Make a prepopulate button, which when clicked will populate the form with values in the local storage if it exists, otherwise, the button will be disabled.

//Add validation for space as well
const form = document.getElementById('detailsForm');
const nameInput = document.getElementById('user-name');
const nameError = document.getElementById('nameError');
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phoneError');
const placeInput = document.getElementById('place');
const placeError = document.getElementById('placeError');
const companyInput = document.getElementById('company');
const companyError = document.getElementById('companyError');
const pincodeInput = document.getElementById('pincode');
const pincodeError = document.getElementById('pincodeError');
const prepopulateBtn = document.getElementById('prepopulateBtn');
// if (!formData) {
//     prepopulateBtn.disabled = true;
// }
prepopulateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const formData = JSON.parse(localStorage.getItem('formData'));
    if (formData) {
        nameInput.value = formData.name;
        phoneInput.value = formData.phone;
        placeInput.value = formData.place;
        companyInput.value = formData.company;
        pincodeInput.value = formData.pincode;
    }
});

// Created a seperate function for updating Errors
function showError(span, message) {
    span.innerHTML = message;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Added trim() method so that the space before and after the string will be removed
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const place = placeInput.value.trim();
    const company = companyInput.value.trim();
    const pincode = pincodeInput.value.trim();
    let isValid = true;
    nameError.innerHTML = '';
    phoneError.innerHTML = '';
    placeError.innerHTML = '';
    companyError.innerHTML = '';
    pincodeError.innerHTML = '';
    //why nameInput.value
    if (name === '') { // used variable name instead of nameInput.value
        showError(nameError, 'Name cannot be empty &#9888;');
        isValid = false;
    }
    //is there any other methode to check empty validations?
    //create seperate function for updating errors
    if (phone.length === 0) { // Used string length method which gives the same result to check empty validation.
        showError(phoneError, 'Phone number cannot be empty &#9888;');
        isValid = false;
    } else if (typeof +phone !== 'number' || Number.isNaN(+phone)) {
        showError(phoneError, 'Phone Number should be a number &#9888;');
        isValid = false;
    } else if (phone.length < 10) {
        showError(phoneError, 'Phone number should have 10 digits &#9888;');
        isValid = false;
    }
    if (place.length === 0) {
        showError(placeError, 'Place cannot be empty &#9888;');
        isValid = false;
    }
    if (company.length === 0) {
        companyError.innerHTML = 'Company name  cannot be empty &#9888;';
        isValid = false;
    }
    if (pincode.length === 0) {
        showError(pincodeError, 'Pin code cannot be empty &#9888;');
        isValid = false;
    } else if (
        typeof +pincode !== 'number'
    || Number.isNaN(+pincodeInput.value)
    ) {
        showError(pincodeError, 'Pin code should be a number &#9888;');
        isValid = false;
    }
    if (isValid) {
        const formData = {
            name,
            place,
            phone,
            company,
            pincode,
        };
        localStorage.setItem('formData', JSON.stringify(formData));
        form.reset();
    }
});
