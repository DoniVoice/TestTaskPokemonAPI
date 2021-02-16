import React from 'react'
import s from './PokemonList.module.css'
import {NavLink} from 'react-router-dom'
import PagesContainer from './Pages/PagesContainer'
import PageSizeContainer from './PageSize/PageSizeContainer'
import PagesTitleContainer from './PagesTitle/PagesTitleContainer'

const PokemonList = (props) => {
    return(
        <div className={s.container}>
            <PagesTitleContainer />
            <PagesContainer />
            <PageSizeContainer />
            <div className={s.pokemonList}>
                    {props.pokemon.map(p => 
                        <div className={s.pokemon} key={p.name}>
                            <NavLink to={`/pokemon/${p.name}`} className={s.navlink}>
                                <div>
                                    <img className={s.pokemon_image} src={p.UrlImage} alt={p.name}/>
                                    <div className={s.pokemon_name}>
                                        {p.name}
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    )}
            </div>
            <PagesContainer />
        </div>
    )
}

export default PokemonList