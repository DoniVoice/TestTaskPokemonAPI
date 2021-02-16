import React from 'react'
import s from './ListNames.module.css'

const ListNames = (props) => {
    return (
            <li onClick={() => {
                props.searchForName
                ?props.setSearchForName(false)
                :props.setSearchForName(true)
            }} className={s.link}>
                List Names
            </li>
    )
}

export default ListNames