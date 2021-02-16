import React from 'react'
import { pokemonAPI } from '../../api/api'
import Pages from './Pages'
import {connect} from 'react-redux'
import {setPokemonOffSet, 
        pokemonPages, 
        setTotalPages,
        setScreenResize,
        setPages} from '../../../redux/pokemonList-reducer'


class PagesAPIContainer extends React.Component {
    componentDidMount(){
        let pokemonPages = Math.round(this.props.totalPokemonCards / this.props.pokemonCards)
        this.props.setTotalPages(pokemonPages)
        let pages = []

        if(this.props.screenWidth < 480) {
            if(this.props.pokemonOffSet === 1){
                for (let i = this.props.pokemonOffSet; i <= this.props.pokemonOffSet + 2; i++) {
                    pages.push(i)
                }
            }
            else if(this.props.pokemonOffSet - 1 >= 1 && this.props.pokemonOffSet + 1 <= pokemonPages){ 
                for (let i = this.props.pokemonOffSet - 1; i <= this.props.pokemonOffSet + 1; i++) {
                    pages.push(i)
                }
            }
            else if(this.props.pokemonOffSet - 1 > 1 && this.props.pokemonOffSet + 1 > pokemonPages){ 
                for (let i = this.props.pokemonOffSet - 2; i <= pokemonPages; i++) {
                    pages.push(i)
                }
            }
            else if(this.props.pokemonOffSet === pokemonPages){
                for (let i = this.props.pokemonOffSet - 2; i <= pokemonPages; i++) {
                    pages.push(i)
                }
            }
            else if(this.props.pokemonOffSet > 1 && this.props.pokemonOffSet - 1 <= 0){
                for (let i = 1; i <= 3; i++) {
                    pages.push(i)
                }
            }
        }
        else {
            if(this.props.pokemonOffSet === 1){
                for (let i = this.props.pokemonOffSet; i <= this.props.pokemonOffSet + 6; i++) {
                    pages.push(i)
                }
            }
            else if(this.props.pokemonOffSet - 3 >= 1 && this.props.pokemonOffSet + 3 <= pokemonPages){ 
                for (let i = this.props.pokemonOffSet - 3; i <= this.props.pokemonOffSet + 3; i++) {
                    pages.push(i)
                }
            }
            else if(this.props.pokemonOffSet - 3 > 1 && this.props.pokemonOffSet + 3 > pokemonPages){ 
                for (let i = this.props.pokemonOffSet - 6; i <= pokemonPages; i++) {
                    pages.push(i)
                }
            }
            else if(this.props.pokemonOffSet === pokemonPages){
                for (let i = this.props.pokemonOffSet - 6; i <= pokemonPages; i++) {
                    pages.push(i)
                }
            }
            else if(this.props.pokemonOffSet > 1 && this.props.pokemonOffSet - 3 <= 0){
                for (let i = 1; i <= 7; i++) {
                    pages.push(i)
                }
            }
            
        }
        this.props.setPages(pages)
    }

    componentDidUpdate(prevProps){
        if (prevProps.pokemonOffSet !== this.props.pokemonOffSet || prevProps.screenWidth !== this.props.screenWidth) {
            let pokemonPages = Math.round(this.props.totalPokemonCards / this.props.pokemonCards)
            this.props.setTotalPages(pokemonPages)
            let pages = []
            if(this.props.screenWidth < 480) {
                if(this.props.pokemonOffSet === 1){
                    for (let i = this.props.pokemonOffSet; i <= this.props.pokemonOffSet + 2; i++) {
                        pages.push(i)
                    }
                }
                else if(this.props.pokemonOffSet - 1 >= 1 && this.props.pokemonOffSet + 1 <= pokemonPages){ 
                    for (let i = this.props.pokemonOffSet - 1; i <= this.props.pokemonOffSet + 1; i++) {
                        pages.push(i)
                    }
                }
                else if(this.props.pokemonOffSet - 1 > 1 && this.props.pokemonOffSet + 1 > pokemonPages){ 
                    for (let i = this.props.pokemonOffSet - 2; i <= pokemonPages; i++) {
                        pages.push(i)
                    }
                }
                else if(this.props.pokemonOffSet === pokemonPages){
                    for (let i = this.props.pokemonOffSet - 2; i <= pokemonPages; i++) {
                        pages.push(i)
                    }
                }
                else if(this.props.pokemonOffSet > 1 && this.props.pokemonOffSet - 1 <= 0){
                    for (let i = 1; i <= 3; i++) {
                        pages.push(i)
                    }
                }
            }
            else {
                if(this.props.pokemonOffSet === 1){
                    for (let i = this.props.pokemonOffSet; i <= this.props.pokemonOffSet + 6; i++) {
                        pages.push(i)
                    }
                }
                else if(this.props.pokemonOffSet - 3 >= 1 && this.props.pokemonOffSet + 3 <= pokemonPages){ 
                    for (let i = this.props.pokemonOffSet - 3; i <= this.props.pokemonOffSet + 3; i++) {
                        pages.push(i)
                    }
                }
                else if(this.props.pokemonOffSet - 3 > 1 && this.props.pokemonOffSet + 3 > pokemonPages){ 
                    for (let i = this.props.pokemonOffSet - 6; i <= pokemonPages; i++) {
                        pages.push(i)
                    }
                }
                else if(this.props.pokemonOffSet === pokemonPages){
                    for (let i = this.props.pokemonOffSet - 6; i <= pokemonPages; i++) {
                        pages.push(i)
                    }
                }
                else if(this.props.pokemonOffSet > 1 && this.props.pokemonOffSet - 3 <= 0){
                    for (let i = 1; i <= 7; i++) {
                        pages.push(i)
                    }
                }
                
            }
            this.props.setPages(pages)
          }
    }
    
    onPokemonPage = (pokemonCardsCount, pokemonLimit) => {
        this.props.pokemonPages(pokemonAPI, pokemonCardsCount, pokemonLimit)
    }

    render() {
        return(
            <div>
                <Pages 
                onPokemonPage={this.onPokemonPage}
                totalPokemonCards={this.props.totalPokemonCards}
                pokemonCards={this.props.pokemonCards}
                pokemonOffSet={this.props.pokemonOffSet}
                setPokemonOffSet={this.props.setPokemonOffSet}
                setTotalPages={this.props.setTotalPages}
                totalPages={this.props.totalPages}
                screenWidth={this.props.screenWidth}
                setScreenResize={this.props.setScreenResize}
                setPages={this.props.setPages}
                pages={this.props.pages}
                />
            </div>
        )   
    }
}

let mapStateToProps = (state) => {
    return {
        pokemonCards: state.pokemonList.pokemonCards,
        pokemonOffSet: state.pokemonList.pokemonOffSet,
        totalPokemonCards: state.pokemonList.totalPokemonCards,
        totalPages: state.pokemonList.totalPages,
        screenWidth: state.pokemonList.screenWidth,
        pages: state.pokemonList.pages
    }
}

const PagesContainer = connect(mapStateToProps, {
    setPokemonOffSet,
    pokemonPages,
    setTotalPages,
    setScreenResize,
    setPages
})(PagesAPIContainer)

export default PagesContainer