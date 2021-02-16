import React from 'react'
import { pokemonAPI } from './../api/api'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addPokemonSpecifications} from '../../redux/pokemonPage-reduser'
import PokemonPage from './PokemonPage'

class PokemonAPIContainer extends React.Component {
    componentDidMount() {
        let pokemonName = this.props.match.params.pokemonName
        this.props.addPokemonSpecifications(pokemonAPI, pokemonName)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.pokemonName !== this.props.match.params.pokemonName) {
            let pokemonName = this.props.match.params.pokemonName
            this.props.addPokemonSpecifications(pokemonAPI, pokemonName)
        }
      }

    render() {
        return(
            <div>
                <PokemonPage pokemonSpecifications={this.props.pokemonSpecifications}/>
            </div>
        )   
    }
}

let mapStateToProps = (state) => {
    return {
        pokemonSpecifications: state.pokemonPage.pokemonSpecifications
    }
}

const PokemonPageContainer = connect(mapStateToProps, {
    addPokemonSpecifications
})(withRouter(PokemonAPIContainer))

export default PokemonPageContainer