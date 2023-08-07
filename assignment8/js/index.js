/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-alert */
const xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
xhr.send();
let tableData = `<div><strong>Id</strong></div><div><strong>Name</strong></div><div><strong>UserName</strong></div><div><strong>Email</strong></div><div><strong>Phone</strong></div>`;
const table = document.getElementById('user-details');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            const basicDetails = xhr.responseText;
            const basicDetailsObj = JSON.parse(basicDetails);
            console.table(basicDetailsObj);
            for (let i = 0; i < basicDetailsObj.length; i += 1) {
                let singleObj = (basicDetailsObj[i]);
                const id = singleObj.id;
                const name = singleObj.name;
                const username = singleObj.username;
                const email = singleObj.email;
                const phone = singleObj.phone;
                tableData += `<div>${id}</div><div>${name}</div><div>${username}</div><div>${email}</div><div>${phone}</div>`;
            }
            table.innerHTML = tableData;
        } else {
            alert('No response');
        }
    }
};
