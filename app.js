let printFact = document.querySelector('p')
let factNumbers = '1..4';
fetch(`http://numbersapi.com/${factNumbers}/?json`)
    .then(response => response.json())
    .then(data => printFact.innerText = data.text)
    .catch(err => console.log(err))

