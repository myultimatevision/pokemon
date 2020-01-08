const fs = require('fs');
const pokemons = JSON.parse(fs.readFileSync('./pokemon.json', 'utf8'));
const oldPokemonData = JSON.parse(fs.readFileSync('./oldPokemon.json', 'utf8'));
const formattedPokemons = [];
const createPara = (able) => {
  return `<p class="ability">${able.ability.name}</p>`;
}
const formatPokemons = (pokemon, i) => {
  const { name } = pokemon.forms[0];
  const { art_url, description } = oldPokemonData[i];
  const abilities = pokemon.abilities.map(createPara);
  formattedPokemons.push(`<div class="pokemon">
    <div class="flip_box"><div class="front">
     <h4 class="name">${name}</h4>
      <img src="${art_url}" alt="image" />
      ${abilities.join('\n')}
    </div>
      <div class="back">
        <h5 class="name">${name}</h5>
        <img src="${art_url}" alt="image" class="image" />
        <p class="description">\n${description}\n</p>
      </div>
    </div>
  </div>`)
}

pokemons.forEach((pokemon, i) => formatPokemons(pokemon, i));
fs.writeFileSync('./pokemonSample.html', formattedPokemons.join('\n'), 'utf8');