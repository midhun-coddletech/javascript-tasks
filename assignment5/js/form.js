/* eslint-disable no-undef */
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

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;
    const name = nameInput.value;
    const phone = phoneInput.value;
    const place = placeInput.value;
    const company = companyInput.value;
    const pincode = pincodeInput.value;
    nameError.innerHTML = '';
    phoneError.innerHTML = '';
    placeError.innerHTML = '';
    companyError.innerHTML = '';
    pincodeError.innerHTML = '';
    if (nameInput.value === '') {
        nameError.innerHTML = 'Name cannot be empty &#9888;';
        isValid = false;
    }
    if (phone === '') {
        phoneError.innerHTML = 'Phone number cannot be empty &#9888;';
        isValid = false;
    } else if (typeof +phone !== 'number' || Number.isNaN(+phone)) {
        phoneError.innerHTML = 'Phone Number should be a number &#9888;';
        isValid = false;
    } else if (phone.length < 10) {
        phoneError.innerHTML = 'Phone number should have 10 digits &#9888;';
        isValid = false;
    }
    if (placeInput.value === '') {
        placeError.innerHTML = 'Place cannot be empty &#9888;';
        isValid = false;
    }
    if (companyInput.value === '') {
        companyError.innerHTML = 'Company name  cannot be empty &#9888;';
        isValid = false;
    }
    if (pincodeInput.value === '') {
        pincodeError.innerHTML = 'Pin code cannot be empty &#9888;';
        isValid = false;
    } else if (
        typeof +pincodeInput.value !== 'number' ||
        Number.isNaN(+pincodeInput.value)
    ) {
        pincodeError.innerHTML = 'Pin code should be a number &#9888;';
        isValid = false;
    }
    if (isValid) {
        const formData = { name, place, phone, company, pincode };
        localStorage.setItem('formData', JSON.stringify(formData));
        form.reset();
    }
});
