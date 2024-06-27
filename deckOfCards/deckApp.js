
let drawn = 1;
fetch(`https://deckofcardsapi.com/api/deck/rwsxpwlsd867/shuffle/?deck_count=1`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

const drawButton = document.getElementById('draw');
drawButton.addEventListener('click', () => {
    console.log(drawn++);
    fetch(`https://deckofcardsapi.com/api/deck/rwsxpwlsd867/draw/?count=26`)
        .then(response => response.json())
        .then(data => console.log(data.cards[0].value, data.cards[0].suit))
        .catch(err => console.log(err))
})
