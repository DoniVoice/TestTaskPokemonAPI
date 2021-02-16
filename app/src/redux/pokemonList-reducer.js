const SET_POKEMON = 'SET-POKEMON'
const SET_POKEMON_CARDS = 'SET-POKEMON-CARDS'
const SET_TOTAL_POKEMON_CARDS = 'SET-TOTAL-POKEMON-CARDS'
const SET_ON_POKEMON_PAGE_NUMBER = 'SET-ON-POKEMON-PAGE-NUMBER'
const SET_POKEMON_NAME = 'SET-POKEMON-NAME'
const SET_TOTAL_PAGES = 'SET-TOTAL-PAGES'
const SET_POKEMON_OFF_SET = 'SET-POKEMON-OFF-SET'
const SET_SEARCH_FOR_NAME = 'SET-SEARCH-FOR-NAME'
const SET_CLICK_MENU_BURGER = 'SET-CLICK-MENU-BURGER'
const SET_SCREEN_RESIZE = 'SET-SCREEN-RESIZE'
const SET_PAGES = 'SET-PAGES'

let initialState = {
    pokemon: [],
    onPokemonPageNumber: 1,
    pokemonCards: 12,
    pokemonOffSet: 1,
    totalPokemonCards: 0,
    totalPokemonName: [],
    totalPages: 0,
    searchForName: false,
    clickMenuBurger: true,
    screenWidth: window.innerWidth,
    pages: []
}

let pokemonListReducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'SET-POKEMON':
            return {
                ...state,
                pokemon: [...action.pokemon]
           }
        case 'SET-POKEMON-CARDS':
            return {
                ...state,
                pokemonCards: action.pokemonCards
           }
        case 'SET-TOTAL-POKEMON-CARDS':
            return {
                ...state,
                totalPokemonCards: action.totalPokemonCards
            }
        case 'SET-ON-POKEMON-PAGE-NUMBER':
            return {
                ...state,
                onPokemonPageNumber: action.onPokemonPageNumber
            }
        case 'SET-POKEMON-NAME':
            return {
                ...state,
                totalPokemonName: [...action.totalPokemonName]
            }
        case 'SET-TOTAL-PAGES':
            return {
                ...state,
                totalPages: action.totalPages
            }
        case 'SET-POKEMON-OFF-SET':
            return {
                ...state,
                pokemonOffSet: action.pokemonOffSet
            }
        case 'SET-SEARCH-FOR-NAME':
            return {
                ...state,
                searchForName: action.searchForName
            }
        case 'SET-CLICK-MENU-BURGER':
            return {
                ...state,
                clickMenuBurger: action.clickMenuBurger
            }
        case 'SET-SCREEN-RESIZE':
            return {
                ...state,
                screenWidth: action.screenWidth
            }
        case 'SET-PAGES':
            return {
                ...state,
                pages: [...action.pages]
        }
        default: 
           return state
    }
}

export let setPokemon = (pokemon) => {
    return {type: SET_POKEMON, pokemon}
}

export let setPokemonCards = (pokemonCards) => {
    return {type: SET_POKEMON_CARDS, pokemonCards}
}

export let setTotalPokemonCards = (totalPokemonCards) => {
    return {type: SET_TOTAL_POKEMON_CARDS, totalPokemonCards}
}

export let setOnPokemonPageNumber = (onPokemonPageNumber) => {
    return {type: SET_ON_POKEMON_PAGE_NUMBER, onPokemonPageNumber}
}

export let setPokemonName = (totalPokemonName) => {
    return {type: SET_POKEMON_NAME, totalPokemonName}
}

export let setTotalPages = (totalPages) => {
    return {type: SET_TOTAL_PAGES, totalPages}
}

export let setPokemonOffSet = (pokemonOffSet) => {
    return {type: SET_POKEMON_OFF_SET, pokemonOffSet}
}

export let setSearchForName = (searchForName) => {
    return {type: SET_SEARCH_FOR_NAME, searchForName}
}

export let setClickMenuBurger = (clickMenuBurger) => {
    return {type: SET_CLICK_MENU_BURGER, clickMenuBurger}
}

export let setScreenResize = (screenWidth) => {
    return {type: SET_SCREEN_RESIZE, screenWidth}
}

export let setPages = (pages) => {
    return {type: SET_PAGES, pages}
}

export const addPokemonThunk = (pokemonAPI, pokemonOffSet, pokemonLimit) => {
    return (dispatch) => {
        dispatch(setPokemonCards(pokemonLimit))
        pokemonAPI.getPokemon().then(data => {
            dispatch(setTotalPokemonCards(data.count))
        })
        pokemonAPI.getPokemonPage(pokemonOffSet, pokemonLimit).then(data => {
            data.results.map(p => {
                return(
                    pokemonAPI.getPokemonImage(p.url).then(dataImage => {
                        p.UrlImage = dataImage.sprites.front_default
                        dispatch(setPokemon(data.results))
                    })
                )
            })
        })
    }
}

export const pokemonPages = (pokemonAPI, pokemonOffSet, pokemonLimit, totalPokemonCards) => {
    return (dispatch) => {
            dispatch(setOnPokemonPageNumber(pokemonOffSet))
        pokemonAPI.getPokemonPage(pokemonOffSet, pokemonLimit).then(data => {
            data.results.map(p => {
                return(
                    pokemonAPI.getPokemonImage(p.url).then(dataImage => {
                        p.UrlImage = dataImage.sprites.front_default
                        dispatch(setPokemon(data.results))
                    })
                )
            })
        })
    }
}

export const addPokemonName = (pokemonAPI) => {
    return (dispatch) => {
        pokemonAPI.getPokemon().then(data => {
            pokemonAPI.getPokemonName(data.count).then(dataName => {
                let NewDataName = dataName.results.filter(p => {
                    return p.name
                })
                dispatch(setPokemonName(NewDataName))
            })
        })
    }
}

export default pokemonListReducer