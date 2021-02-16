import React from 'react'
import { pokemonAPI } from '../api/api'
import PokemonList from './PokemonList'
import {connect} from 'react-redux'
import {addPokemonThunk} from '../../redux/pokemonList-reducer'



class PokemonListAPIContainer extends React.Component {
    componentDidMount() {
        this.props.addPokemonThunk(pokemonAPI, this.props.pokemonOffSet, this.props.pokemonCards)
    }

    render() {
        return(
            <div>
                <PokemonList pokemon={this.props.pokemon}/>
            </div>
        )   
    }
}

let mapStateToProps = (state) => {
    return {
        pokemon: state.pokemonList.pokemon,
        pokemonCards: state.pokemonList.pokemonCards
    }
}

const PokemonListContainer = connect(mapStateToProps, {
    addPokemonThunk
})(PokemonListAPIContainer)

export default PokemonListContainer