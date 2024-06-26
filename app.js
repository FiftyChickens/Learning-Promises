let printFact = document.querySelector('p')

fetch('http://numbersapi.com/3/?json')
    .then(response => response.json())
    .then(data => printFact.innerText = data.text)
    .catch(err => console.log(err))

