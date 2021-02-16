import React from 'react'
import s from './PokemonPage.module.css'

const PokemonPage = (props) => {
    return(
        <div className={s.container}>
            <div className={s.pokemon}>
                <div className={s.image}>
                    <img src={props.pokemonSpecifications.image} alt={props.pokemonSpecifications.name}/>
                </div>
                <div className={s.name}>
                    Name: {props.pokemonSpecifications.name}
                </div>
                <div className={s.height}>
                    Height: {props.pokemonSpecifications.height}
                </div>
                <div className={s.weight}>
                    Weight: {props.pokemonSpecifications.weight}
                </div>
                <div className={s.stats}>
                    {props.pokemonSpecifications.stats.map((s) => 
                        <div key={s.stat.name}>
                            {s.stat.name}:{s.base_stat}
                        </div>
                    )}
                </div>
                <div className={s.type}>
                    Types:
                    {props.pokemonSpecifications.types.map((t) =>
                    <div key={t.type.name}>{t.type.name}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PokemonPage