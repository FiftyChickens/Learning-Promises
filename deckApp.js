// let printFact = document.querySelector('p')
// let factNumbers = '3';
// for (let i = 0; i < 4; i++) {
//     fetch(`http://numbersapi.com/${factNumbers}/?json`)
//         .then(response => response.json())
//         .then(data => {
//             // for (const key in data) {
//             //     printFact.innerText += `${data[key]}
//             // `;
//             // }
//             printFact.innerText += `${data.text}
//             `;
//         })
//         .catch(err => console.log(err))
// }

fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
    .then(response => response.json())
    .then(data => console.log(data.cards[0].value, data.cards[0].suit))
    .catch(err => console.log(err))