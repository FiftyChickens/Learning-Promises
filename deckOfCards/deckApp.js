fetch(`https://deckofcardsapi.com/api/deck/rwsxpwlsd867/shuffle/?deck_count=1`)
    .then(response => response.json())
    .then(data => (data))
    .catch(err => console.log(err))

const drawButton = document.getElementById('draw');
let drawn = 1;

drawButton.addEventListener('click', () => {
    fetch(`https://deckofcardsapi.com/api/deck/rwsxpwlsd867/draw/?count=1`)
        .then(response => response.json())
        .then(data => console.log(data.cards[0].value, data.cards[0].suit))
        .catch(err => console.log(err))

    if (53 === drawn) {
        console.log('Out of cards');
        drawButton.remove();
    }
})