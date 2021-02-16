import React from 'react'
import { pokemonAPI } from '../../api/api'
import {connect} from 'react-redux'
import {addPokemonThunk, 
        setPokemonOffSet} from '../../../redux/pokemonList-reducer'
import PageSize from './PageSize'


class PageSizeAPIContainer extends React.Component {

    pokemonPageCardsCounter = (pokemonOffSet, pokemonLimit) => {
        this.props.addPokemonThunk(pokemonAPI, pokemonOffSet, pokemonLimit)
    }

    render() {
        return(
            <div>
                <PageSize
                pokemonCards={this.props.pokemonCards}
                pokemonOffSet={this.props.pokemonOffSet}
                setPokemonOffSet={this.props.setPokemonOffSet}
                pokemonPageCardsCounter={this.pokemonPageCardsCounter}
                searchForName={this.props.searchForName}
                />
            </div>
        )   
    }
}

let mapStateToProps = (state) => {
    return {
        pokemonCards: state.pokemonList.pokemonCards,
        pokemonOffSet: state.pokemonList.pokemonOffSet,
        searchForName: state.pokemonList.searchForName
    }
}

const PageSizeContainer = connect(mapStateToProps, {
    setPokemonOffSet,
    addPokemonThunk
})(PageSizeAPIContainer)

export default PageSizeContainer