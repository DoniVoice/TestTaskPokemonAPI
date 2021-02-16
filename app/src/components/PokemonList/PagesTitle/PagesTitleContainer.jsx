import React from 'react'
import PageTitle from './PagesTitle'
import {connect} from 'react-redux'


class PageTitleAPIContainer extends React.Component {

    render() {
        return(
            <div>
                <PageTitle 
                pokemonCards={this.props.pokemonCards}
                onPokemonPageNumber={this.props.onPokemonPageNumber}
                pokemonOffSet={this.props.pokemonOffSet}
                />
            </div>
        )   
    }
}

let mapStateToProps = (state) => {
    return {
        onPokemonPageNumber: state.pokemonList.onPokemonPageNumber,
        pokemonCards: state.pokemonList.pokemonCards,
        pokemonOffSet: state.pokemonList.pokemonOffSet
    }
}

const PageTitleContainer = connect(mapStateToProps, {
    
})(PageTitleAPIContainer)

export default PageTitleContainer