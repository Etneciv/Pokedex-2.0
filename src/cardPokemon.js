const pokemonsBoard = document.getElementById('pokemonsBoard');

for(let i=0;i<pokemons[0].pokemon.length;i++){
    

    pokemonsBoard.innerHTML+=
    `<div class="card" id="${pokemons[0].pokemon[i].name}" name="${pokemons[0].pokemon[i].name}">
        <div class="titleCard">
            <h2>${pokemons[0].pokemon[i].name}</h2>
        </div>
        <img src="${pokemons[0].pokemon[i].img}"/>
    </div>`;
}


