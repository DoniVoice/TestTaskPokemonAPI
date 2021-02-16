import React from 'react'
import s from './ListNames.module.css'
import {Link} from 'react-router-dom'

const ListNames = (props) => {

    return(
        <div className={s.container}>
            <div className={
                props.searchForName
                ?s.active
                :s.list}>
                <ul>
                    {props.totalPokemonName.map((p) => 
                        <li key={p.name}>
                        <Link to={`/pokemon/${p.name}`} className={s.navlink}>
                            <span>{p.name}</span>
                        </Link>
                        </li>
                    )}
                </ul>
            </div>
            <button onClick={() =>
                props.searchForName
                ?props.setSearchForName(false)
                :props.setSearchForName(true)
            } className={
                props.searchForName
                ?s.searchNameActive
                :s.searchName}>List Names</button>
        </div>
    )
}

export default ListNames