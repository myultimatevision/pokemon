const fs = require('fs');
const pokemons = JSON.parse(fs.readFileSync('./pokemon.json', 'utf8'));
const formattedPokemons = [];
const formatPokemons = (pokemon) => {
  const { name, description, art_url } = pokemon;
  formattedPokemons.push(`<div class="pokemon">
    <div class="flip_box"><div class="front">
     <h4 class="name">${name}</h4>
      <img src="${art_url}" alt="image" />
    </div>
      <div class="back">
        <h5 class="name">${name}</h5>
        <img src="${art_url}" alt="image" class="image" />
        <p class="description">\n${description}\n</p>
      </div>
    </div>
  </div>`)
}

pokemons.forEach(pokemon => formatPokemons(pokemon));
fs.writeFileSync('./pokemonSample.html', formattedPokemons.join('\n'), 'utf8');