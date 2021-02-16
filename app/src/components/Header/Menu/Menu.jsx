import React from 'react'
import s from './Menu.module.css'
import Forum from './Forum/Forum'
import ListNamesContainer from './ListNames/ListNameContainer'
import {NavLink} from 'react-router-dom'
import Contacts from './Contacts/Contacts'
import Games from './Games/Games'

const Menu = (props) => {
    if(props.screenWidth > 767) {
        props.setClickMenuBurger(true)
    }
    return (
            <div className={
                props.clickMenuBurger
                ?s.menu
                :s.active
                }>
                <ul className={s.list}>
                    <ListNamesContainer />
                    <NavLink to='/forum' className={s.navLink}>
                        <Forum />
                    </NavLink>
                    <NavLink to='/contacts' className={s.navLink}>
                        <Contacts />
                    </NavLink>
                    <NavLink to='/games' className={s.navLink}>
                        <Games />
                    </NavLink>
                </ul>
            </div>
    )
}

export default Menu