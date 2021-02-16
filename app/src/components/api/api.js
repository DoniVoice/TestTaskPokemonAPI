import *as axios from 'axios'

export const pokemonAPI = {
    getPokemon() {
        return (
            axios.get('https://pokeapi.co/api/v2/pokemon').then(response => response.data)
        )
    },
    getPokemonImage(url) {
        return (
            axios.get(url).then(response => response.data)
        )
    },
    getPokemonPage(pokemonOffSet, pokemonLimit) {
        return (
            axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${pokemonOffSet}&limit=${pokemonLimit}`).then(response => response.data)
        )
    },
    getPokemonName(totalPokemonCards) {
        return (
            axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${totalPokemonCards}`).then(response => response.data)
        )
    },
    getPokemonSpecifications(pokemonName) {
        return (
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(response => response.data)
        )
    }
}