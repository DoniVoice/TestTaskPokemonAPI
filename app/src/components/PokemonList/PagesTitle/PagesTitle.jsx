import React from 'react'
import s from './PagesTitle.module.css'

const PagesTitle = (props) => {
    return(
        <div className={s.title}>
            <h2> Page {props.pokemonOffSet}</h2>
        </div>
    )
}

export default PagesTitle