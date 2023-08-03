/* eslint-disable no-restricted-syntax */
/* eslint-disable no-multi-assign */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable no-console */

// Question 1

console.log(`\nQuestion 1: Write a function to 
a) Calculate the height of the end user's browser screen
b) To console the name of the web host
c) To show a warning message if there is no https protocol used in the visited website.
d) To show an alert message after 10sec while the page is refreshed.\n`);

(function () {
    const windowHeight = window.innerHeight;
    console.log('Height of the end users browser screen is', windowHeight);

    const hostName = window.location.hostname;
    console.log('Host name is', hostName);

    const protocolName = window.location.protocol;
    if (protocolName !== 'https') {
        alert('This site is not using https protocol');
    }

    setTimeout(() => {
        alert('Page refreshed 10 seconds ago!');
    }, 10000);
}());

// Question 2

console.log(
    `\nQuestion 2: Store your basic details in local storage of the browser every time the page loads, then console them and finally delete them after 1 minute of the page load. \n`
);

const { localStorage } = window;

const basicDetails = {
    name: 'Midhun',
    age: 23,
    place: 'Calicut',
    company: 'Coddle Technologies',
    role: 'Software Engineer Trainee',
};

localStorage.setItem('basicDetails', JSON.stringify(basicDetails));
//get the details from local storage and then console it.

const localStorageDetails = localStorage.getItem('basicDetails'); // Added code to get details from localStorage
const basicDetailsobj = JSON.parse(localStorageDetails);

console.log('Name:', basicDetailsobj.name);
console.log('Age:', basicDetailsobj.age);
console.log('Place:', basicDetailsobj.place);
console.log('Company:', basicDetailsobj.company);
console.log('Role:', basicDetailsobj.role);
const tempBasicdetails = basicDetailsobj;
setTimeout(() => {
    localStorage.removeItem('basicDetails');
    console.log('Data has been deleted from local storage.');
}, 60000);

// Question 3

console.log(
    `\nCreate a form and submit button, on click of the button store your basic details from the form in the cookies. \n`
);

//Clear the form after submit
// const form = document.getElementById('store-cookie-form');
// form.addEventListener('submit', (event) => {
//     //Check is there any other ways to get all the form data
//     event.preventDefault();
//     const details = new FormData(form);
//     const username = details.get('user-name');
//     const company = details.get('user-company');
//     const age = details.get('user-age');
//     const role = details.get('user-role');
//     const cookie = {
//         name: 'userDetails',
//         value: { username: username, company: company, age: age, role: role },
//         expires: new Date(Date.now() + 100000),
//     };
//     document.cookie = cookie;
//     console.log(document.cookie);
//     console.log('User details have been stored in the cookie.');
//     form.reset(); // Added code to clear the form after submit
// });

const form = document.getElementById('store-cookie-form');
form.addEventListener('submit', (event) => {
    //Check is there any other ways to get all the form data
    event.preventDefault();
    const keyArray = [];
    const valueObj = {};
    const valueArray = [];
    const details = new FormData(form);
    for (const key of details.keys()) {
        keyArray.push(key);
    }
    for (const value of details.values()) {
        valueArray.push(value);
    }
    valueObj.username = valueArray[0];
    valueObj.company = valueArray[1];
    valueObj.age = valueArray[2];
    valueObj.role = valueArray[3];
    const cookie = {
        name: 'userDetails',
        value: valueObj,
        expires: new Date(Date.now() + 100000),
    };
    console.log(cookie.value);
    document.cookie = cookie;
    console.log('User details have been stored in the cookie.');
    form.reset(); // Added code to clear the form after submit
});

// Question 4

console.log(
    `\nQuestion 4: Redirect to the homepage of google from the console.\n`
);

// window.location.href = 'https://www.google.com';

// Question 5

console.log(`\nQuestion 5: Create a div with background color red, create buttons.
a) To hide the div
b) To change the background color of the div
c) To show your basic details on the div, the details should hide/show, on the click.\n`);

const divtoHide = document.getElementById('red-div');
const hidedivBtn = document.getElementById('hide-div');
// const changebgBtn = document.getElementById('change-bg');
const showdetailsBtn = document.getElementById('show-details');
let bgColorstate = 1;
let divHidestate = 1;
// hidedivBtn.addEventListener('click', hideDiv);
// changebgBtn.addEventListener('click', changeBg);
// showdetailsBtn.addEventListener('click', showDetails);
function hideDiv() {
    if (divHidestate === 1) {
        divtoHide.style.display = 'none';
        divHidestate = 0;
        hidedivBtn.innerHTML = 'Show Div';
    } else {
        divtoHide.style.display = 'block';
        divHidestate = 1;
        hidedivBtn.innerHTML = 'Hide Div';
    }
}
//Toggle background colors
function changeBg() {
    if (bgColorstate === 1) {
        divtoHide.style.backgroundColor = 'green'; //Added code to toggle the background color
        bgColorstate = 0;
    } else {
        divtoHide.style.backgroundColor = 'red';
        bgColorstate = 1;
    }
}

function showDetails() {
    if (divtoHide.style.display === 'none') {
        divtoHide.style.display = 'block';
    }
    if (divtoHide.innerHTML === '') {
        showdetailsBtn.innerHTML = 'Hide Details'; // Added code to change the text on button either as Show/Hide
        divtoHide.innerHTML = `<p>Name: ${tempBasicdetails.name}</p><p>Age: ${tempBasicdetails.age}</p><p>Place: ${tempBasicdetails.place}</p><p>Company: ${tempBasicdetails.company}</p><p>Role: ${tempBasicdetails.role}</p>`;
    } else {
        divtoHide.innerHTML = '';
        showdetailsBtn.innerHTML = 'Show Details';
    }
}

// Question 6

const numberSelect = document.getElementById('number-select');
const messageDiv = document.getElementById('message-div');
let numberSelectInner = '';

for (let i = 1; i <= 10; i += 1) {
    numberSelectInner = numberSelectInner += `<option value="${i}">${i}</option>`; // Added code to dynamically add option to the select in HTML
}
numberSelect.innerHTML = numberSelectInner;

numberSelect.addEventListener('change', changeNumber);
function changeNumber() {
    const selectedNumber = numberSelect.value;
    if (selectedNumber === '9') {
        numberSelect.value = '10';
        messageDiv.innerHTML = '9 is fully occupied please select another number';
    } else {
        messageDiv.innerHTML = `You have selected ${selectedNumber}`;
    }
}

messageDiv.addEventListener('mouseover', changedivBg);
messageDiv.addEventListener('mouseout', revertdivBg);

//show grey bg color only when slected any number
function changedivBg() {
    if (messageDiv.innerHTML !== '') {
        messageDiv.style.backgroundColor = 'grey'; // Added code to show bg color only when an element is selected
    }
}
function revertdivBg() {
    messageDiv.style.backgroundColor = 'white';
}

// Question 7

console.log(
    `\nQuestion 7: Consider an array with names of 10 programming languages, make 10 buttons by iterating this array, when clicked on each button the name of the programming language should be shown in a corresponding div. \n`
);
const programmingLanguages = [
    'JavaScript',
    'Python',
    'Java',
    'C',
    'PHP',
    'Dart',
    'TypeScript',
    'Swift',
    'Ruby',
    'C++',
];
const buttonContainer = document.getElementById('button-container');
programmingLanguages.forEach((language) => {
    const languageBtn = document.createElement('button');
    languageBtn.innerHTML = language;
    languageBtn.classList.add('language-btn');
    languageBtn.id = `${language}-btn`;
    languageBtn.addEventListener('click', () => {
        const languageDiv = document.getElementById('language-div');
        languageDiv.innerHTML = language;
    });
    buttonContainer.appendChild(languageBtn);
});

// Question 8

console.log(
    `\nQuestion 8: Create a form with a text field which when submitted, will change the tab title to whatever is entered, limit the field to 50 characters, otherwise show an error message, and stay on the same page when submitted(it shouldn't refresh).\n`
);

document
    .getElementById('tab-title-form')
    .addEventListener('submit', (event) => {
        event.preventDefault();
        const titleInput = document.getElementById('title-box');
        const newTitle = titleInput.value;
        if (newTitle.length === 0 || newTitle.length > 50) {
            alert('Enter text with 50 character or below');
        } else {
            document.title = newTitle;
            titleInput.value = '';
        }
    });

// Question 9

console.log(
    `\nQuestion 9: When the control+enter key is pressed show an alert message. \n`
);

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'Enter') {
        alert('Control+Enter key pressed!');
    }
});
