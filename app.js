let printFact = document.querySelector('p')
let factNumbers = '1..4';
fetch(`http://numbersapi.com/${factNumbers}/?json`)
    .then(response => response.json())
    .then(data => {
        for (const key in data) {
            printFact.innerText += `${data[key]}
            `;
        }
    })
    .catch(err => console.log(err))

