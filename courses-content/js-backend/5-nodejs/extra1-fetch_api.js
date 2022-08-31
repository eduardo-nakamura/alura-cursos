import fetch from 'node-fetch';
import chalk from 'chalk';

async function getPokemon(pokemonName) {
    // const [pokemonResponse, categoriesResponse] = await Promise.all([
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`),
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    // ]);

    // const movies = await pokemonResponse.json();
    // const categories = await categoriesResponse.json();
    // return [movies, categories];
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        let userData = await response.json();
        return printName(userData)

    } catch (error) {
        return 'err'
    }


}
function printName(pokemon){
    console.log(chalk.green(`
    ${pokemon.id}) ${pokemon.name}
    Weight: ${pokemon.weight}
    Height: ${pokemon.height}
    `))    
}

getPokemon(2)
