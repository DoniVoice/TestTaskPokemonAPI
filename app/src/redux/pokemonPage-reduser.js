const SET_PARAMS_POKEMON_NAME = 'SET-PARAMS-POKEMON-NAME'
const SET_POKEMON_SPECIFICATIONS_IMAGE = 'SET-POKEMON-SPECIFICATIONS-IMAGE'
const SET_POKEMON_SPECIFICATIONS_NAME = 'SET-POKEMON-SPECIFICATIONS-NAME'
const SET_POKEMON_SPECIFICATIONS_HEIGHT = 'SET-POKEMON-SPECIFICATIONS-HEIGHT'
const SET_POKEMON_SPECIFICATIONS_WEIGHT = 'SET-POKEMON-SPECIFICATIONS-WEIGHT'
const SET_POKEMON_SPECIFICATIONS_STATS = 'SET-POKEMON-SPECIFICATIONS-STATS'
const SET_POKEMON_SPECIFICATIONS_TYPES = 'SET-POKEMON-SPECIFICATIONS-TYPES'


let initialState = {
    paramsPokemonName: '',
    pokemonSpecifications: {
        image: '',
        name: '',
        height: '',
        weight: '',
        stats: [],
        types: []
    }
}

let pokemonPageReducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'SET-PARAMS-POKEMON-NAME':
            return {
                ...state,
                paramsPokemonName: action.paramsPokemonName
            }
        case 'SET-POKEMON-SPECIFICATIONS-IMAGE':
            return {
                ...state,
                pokemonSpecifications: {
                    ...state.pokemonSpecifications,
                    image: action.pokemonSpecificationsImage
                }
            }
        case 'SET-POKEMON-SPECIFICATIONS-NAME':
            return {
                ...state,
                pokemonSpecifications: {
                    ...state.pokemonSpecifications,
                    name: action.pokemonSpecificationsName
                }
            }
        case 'SET-POKEMON-SPECIFICATIONS-HEIGHT':
            return {
                ...state,
                pokemonSpecifications: {
                    ...state.pokemonSpecifications,
                    height: action.pokemonSpecificationsHeight
                }
            }
        case 'SET-POKEMON-SPECIFICATIONS-WEIGHT':
            return {
                ...state,
                pokemonSpecifications: {
                    ...state.pokemonSpecifications,
                    weight: action.pokemonSpecificationsWeight
                }
            }
        case 'SET-POKEMON-SPECIFICATIONS-STATS':
            return {
                ...state,
                pokemonSpecifications: {
                    ...state.pokemonSpecifications,
                    stats: [...action.pokemonSpecificationsStats]
                }
        }
        case 'SET-POKEMON-SPECIFICATIONS-TYPES':
            return {
                ...state,
                pokemonSpecifications: {
                    ...state.pokemonSpecifications,
                    types: [...action.pokemonSpecificationsTypes]
                }
            }
        default: 
           return state
    }
}

export let setParamsPokemonName = (paramsPokemonName) => {
    return {type: SET_PARAMS_POKEMON_NAME, paramsPokemonName}
}

export let setPokemonSpecificationsImage = (pokemonSpecificationsImage) => {
    return {type: SET_POKEMON_SPECIFICATIONS_IMAGE, pokemonSpecificationsImage}
}

export let setPokemonSpecificationsName = (pokemonSpecificationsName) => {
    return {type: SET_POKEMON_SPECIFICATIONS_NAME, pokemonSpecificationsName}
}

export let setPokemonSpecificationsHeight = (pokemonSpecificationsHeight) => {
    return {type: SET_POKEMON_SPECIFICATIONS_HEIGHT, pokemonSpecificationsHeight}
}

export let setPokemonSpecificationsWeight = (pokemonSpecificationsWeight) => {
    return {type: SET_POKEMON_SPECIFICATIONS_WEIGHT, pokemonSpecificationsWeight}
}

export let setPokemonSpecificationsStats = (pokemonSpecificationsStats) => {
    return {type: SET_POKEMON_SPECIFICATIONS_STATS, pokemonSpecificationsStats}
}

export let setPokemonSpecificationsTypes = (pokemonSpecificationsTypes) => {
    return {type: SET_POKEMON_SPECIFICATIONS_TYPES, pokemonSpecificationsTypes}
}

export const addPokemonSpecifications = (pokemonAPI, pokemonName) => {
    return (dispatch) => {
        pokemonAPI.getPokemonSpecifications(pokemonName).then(data => {
            dispatch(setPokemonSpecificationsImage(data.sprites.front_default))
            dispatch(setPokemonSpecificationsName(data.name))
            dispatch(setPokemonSpecificationsHeight(data.height))
            dispatch(setPokemonSpecificationsWeight(data.weight))
            dispatch(setPokemonSpecificationsStats(data.stats))
            dispatch(setPokemonSpecificationsTypes(data.types))
        })
    }
}

export default pokemonPageReducer