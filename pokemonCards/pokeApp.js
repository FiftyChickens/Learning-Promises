const button = document.getElementById('display');


button.addEventListener('click', () => {


    setTimeout(() => {
        for (let i = 0; i < 3; i++) {
            const div = document.getElementById('div');
            const h1 = document.createElement('h1');
            const img = document.createElement('img');
            const p = document.createElement('p');
            let randomPokemon = Math.floor(Math.random() * (1025 - 1 + 1) + 1)

            h1.setAttribute('id', `${i}`)
            img.setAttribute('id', `${i}`)
            p.setAttribute('id', `${i}`)

            div.appendChild(h1);
            div.appendChild(img);
            div.appendChild(p);
            setTimeout(() => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        img.src = data.sprites.front_default;
                        h1.innerHTML = data.species.name;
                    })
                console.log(i, 'second')
                fetch(`https://pokeapi.co/api/v2/pokemon-species/${randomPokemon}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        p.innerHTML = data.flavor_text_entries[0].flavor_text;
                    })
                    .catch(err => console.log(err));
            }, 1)
        }
    }, 1)
})
