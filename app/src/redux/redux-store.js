import {applyMiddleware, combineReducers, createStore} from 'redux'
import pokemonListReducer from './pokemonList-reducer'
import thunkMiddleware from 'redux-thunk'
import pokemonPageReducer from './pokemonPage-reduser'

let reducers = combineReducers({
    pokemonList: pokemonListReducer,
    pokemonPage: pokemonPageReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

if(process.env.NODE_ENV !== 'production') {
    window.store = store;
}

export default store