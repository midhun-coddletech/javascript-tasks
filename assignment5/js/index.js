/* eslint-disable no-console */
/* eslint-disable no-undef */
console.log(`Create a button and div using JS, when clicked on the button your basic details should be shown in the div. The static HTML file should only contain the basic HTML structure, no div/buttons.`);
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
    <p>Age: ${age}</p>
    <p>Email: ${email}</p>
    <p>Place: ${place}</p>
    <p>Role: ${role}</p>`;
}
button.addEventListener('click', displayDetails);
