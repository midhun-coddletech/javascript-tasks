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
})();

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
    role: 'Software Engineer Trainee'
};

localStorage.setItem('basicDetails', JSON.stringify(basicDetails));
console.log('Name:', basicDetails.name);
console.log('Age:', basicDetails.age);
console.log('Place:', basicDetails.place);
console.log('Company:', basicDetails.company);
console.log('Role:', basicDetails.role);
const tempBasicdetails = basicDetails;
setTimeout(() => {
    localStorage.removeItem('basicDetails');
    console.log('Data has been deleted from local storage.');
}, 60000);

// Question 3

console.log(
    `\nCreate a form and submit button, on click of the button store your basic details from the form in the cookies. \n`
);

document
    .getElementById('store-cookie-form')
    .addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('user-name').value;
        const company = document.getElementById('user-company').value;
        const age = document.getElementById('user-age').value;
        const role = document.getElementById('user-role').value;
        const cookie = {
            name: 'userDetails',
            value: JSON.stringify({ name, company, age, role }),
            expires: new Date(Date.now() + 3600000)
        };
        document.cookie = cookie;
        console.log('User details have been stored in the cookie.');
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
const changebgBtn = document.getElementById('change-bg');
const showdetailsBtn = document.getElementById('show-details');
hidedivBtn.addEventListener('click', hideDiv);
changebgBtn.addEventListener('click', changeBg);
showdetailsBtn.addEventListener('click', showDetails);
function hideDiv() {
    divtoHide.style.display = 'none';
}

function changeBg() {
    divtoHide.style.backgroundColor = 'green';
}

function showDetails() {
    divtoHide.style.display = 'block';
    if (divtoHide.innerHTML === '') {
        divtoHide.innerHTML = `<p>Name: ${tempBasicdetails.name}</p><p>Age: ${tempBasicdetails.age}</p><p>Place: ${tempBasicdetails.place}</p><p>Company: ${tempBasicdetails.company}</p><p>Role: ${tempBasicdetails.role}</p>`;
    } else {
        divtoHide.innerHTML = '';
    }
}

// Question 6

const numberSelect = document.getElementById('number-select');
const messageDiv = document.getElementById('message-div');
numberSelect.addEventListener('change', changeNumber);
function changeNumber() {
    const selectedNumber = numberSelect.value;
    if (selectedNumber === '9') {
        numberSelect.value = '10';
        messageDiv.innerHTML =
            '9 is fully occupied please select another number';
    } else {
        messageDiv.innerHTML = `You have selected ${selectedNumber}`;
    }
}

const numMessagediv = document.getElementById('message-div');
numMessagediv.addEventListener('mouseover', changedivBg);
numMessagediv.addEventListener('mouseout', revertdivBg);
function changedivBg() {
    numMessagediv.style.backgroundColor = 'grey';
}
function revertdivBg() {
    numMessagediv.style.backgroundColor = 'white';
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
    'C++'
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
