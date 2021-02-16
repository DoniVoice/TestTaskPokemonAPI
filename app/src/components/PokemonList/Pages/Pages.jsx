import React from 'react'
import ArrowBack from '../../Arrow/ArrowBack/ArrowBack'
import ArrowNext from '../../Arrow/ArrowNext/ArrowNext'
import ArrowEnd from '../../Arrow/ArrowEnd/ArrowEnd'
import s from './Pages.module.css'
import ArrowStart from '../../Arrow/ArrowStart/ArrowStart'

const Pages = (props) => {
    window.addEventListener('resize', () => {
        props.setScreenResize(window.innerWidth)
    })
    return(
        <div className={s.container}>
            <ul className={s.pages}>
                <li onClick={() => {
                    props.setPokemonOffSet(1)
                    props.onPokemonPage(0, props.pokemonCards)
                }} className={s.numbers}>
                    <ArrowStart />
                </li>
                <li onClick={() => {
                    props.pokemonOffSet - 1 <= 0
                    ?props.setPokemonOffSet(1)
                    :props.setPokemonOffSet(props.pokemonOffSet - 1)
                    props.pokemonOffSet === 1
                    ?props.onPokemonPage(1, props.pokemonCards)
                    :props.onPokemonPage((props.pokemonCards * (props.pokemonOffSet - 1)) - props.pokemonCards, 
                    props.pokemonCards)
                }} className={s.numbers}>
                    <ArrowBack />
                </li>
                {props.pages.map((p)=> {
                    return <li onClick={() => {
                        props.setPokemonOffSet(p)
                        props.onPokemonPage((props.pokemonCards * p) - props.pokemonCards, props.pokemonCards)
                    }} 
                    className={
                        props.pokemonOffSet === p
                        ?s.active
                        :s.numbers} 
                    key={p}>{p}</li>
                })}
                <li onClick={() => {
                    props.pokemonOffSet + 1 >= props.totalPages
                    ?props.setPokemonOffSet(props.totalPages)
                    :props.setPokemonOffSet(props.pokemonOffSet + 1)
                    props.pokemonOffSet === props.totalPages
                    ?props.onPokemonPage(props.pokemonCards * props.totalPages, props.pokemonCards)
                    :props.onPokemonPage((props.pokemonCards * (props.pokemonOffSet + 1)), 
                    props.pokemonCards)
                }} className={s.numbers}>
                    <ArrowNext />
                </li>
                <li onClick={() => {
                    props.setPokemonOffSet(props.totalPages)
                    props.onPokemonPage((props.pokemonCards * props.totalPages), props.pokemonCards)
                }} className={s.numbers}>
                    <ArrowEnd />
                </li>
            </ul>
        </div>
    )
}

export default Pages