fetch(`https://deckofcardsapi.com/api/deck/rwsxpwlsd867/shuffle/?deck_count=1`)
    .then(response => response.json())
    .then(data => (data))
    .catch(err => console.log(err))

const drawButton = document.getElementById('draw');
const cardStack = document.getElementById('cardStack');
let cardImage = document.createElement('img');
let drawn = 0;

function fetchCardData() {
    return fetch(`https://deckofcardsapi.com/api/deck/rwsxpwlsd867/draw/?count=1`)
        .then(response => response.json())
        .then(data => {
            cardImage.src = (data.cards[0].image)
        })
        .catch(err => console.log(err))
}

drawButton.addEventListener('click', () => {
    let newRotation = Math.floor(Math.random() * 60 - 30);
    cardStack.appendChild(cardImage);
    cardImage.style.transform = `rotate(${newRotation}deg)`;

    fetchCardData()

    console.log(drawn)
    if (52 === drawn) {
        console.log('Out of cards');
        drawButton.remove();
    }
    drawn++;
})