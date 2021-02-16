import React from 'react'
import s from './PageSize.module.css'

const PageSize = (props) => {
    return(
        <div className={s.counter}>
                <span className={s.counter_title}>Pokemon Cards of page</span>
                <span onClick={() => {
                    props.pokemonPageCardsCounter(props.pokemonOffSet, 12)
                    props.setPokemonOffSet(1)
                }}
                className={
                    props.pokemonCards === 12
                    ?s.counter_numbersOn
                    :s.counter_numbers
                }>12</span>
                <span onClick={() => {
                    props.setPokemonOffSet(1)
                    props.pokemonPageCardsCounter(props.pokemonOffSet, 36)
                }}
                className={
                    props.pokemonCards === 36
                    ?s.counter_numbersOn
                    :s.counter_numbers
                }>36</span>
                <span onClick={() => {
                    props.setPokemonOffSet(1)
                    props.pokemonPageCardsCounter(props.pokemonOffSet, 72)
                }}
                className={
                    props.pokemonCards === 72
                    ?s.counter_numbersOn
                    :s.counter_numbers
                }>72</span>
        </div>
    )
}

export default PageSize