import React from 'react'
import { pokemonAPI } from '../api/api'
import {connect} from 'react-redux'
import ListNames from './ListNames'
import {withRouter} from 'react-router-dom'
import {addPokemonName, setSearchForName} from '../../redux/pokemonList-reducer'

class ListNamesAPIContainer extends React.Component {
    componentDidMount() {
        this.props.addPokemonName(pokemonAPI)
    }
    render() {
        return(
            <div>
                <ListNames totalPokemonName={this.props.totalPokemonName}
                        setSearchForName={this.props.setSearchForName}
                        searchForName={this.props.searchForName}/>
            </div>
        )   
    }
}

let mapStateToProps = (state) => {
    return {
        totalPokemonName: state.pokemonList.totalPokemonName,
        totalPokemonCards: state.pokemonList.totalPokemonCards,
        searchForName: state.pokemonList.searchForName
    }
}

const ListNamesContainer = connect(mapStateToProps, {
    addPokemonName,
    setSearchForName
})(withRouter(ListNamesAPIContainer))

export default ListNamesContainer