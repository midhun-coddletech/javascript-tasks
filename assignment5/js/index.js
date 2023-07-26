/* eslint-disable no-undef */
const button = document.createElement('button');
button.textContent = 'Show My Basic Details';
document.body.appendChild(button);

const detailsDiv = document.createElement('div');
document.body.appendChild(detailsDiv);

function displayDetails() {
    const name = 'Midhun';
    const age = 23;
    const role = 'Software Engineer trainee';
    const place = 'Calicut';
    const email = 'midhun.o@coddletech.com';
    detailsDiv.innerHTML = `<p>Name: ${name}<p>
    <p>Age: ${age}<p>
    <p>Email: ${email}<p>
    <p>Place: ${place}<p>
    <p>Role: ${role}</p>`;
}

button.addEventListener('click', displayDetails);
