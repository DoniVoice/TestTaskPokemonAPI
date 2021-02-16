import React from 'react'
import s from './Header.module.css'
import MenuContainer from './Menu/MenuContainer'
import Logo from './Logo/Logo'

const Header = (props) => {
    return (
            <div className={s.container}>
                    <Logo />
                    <div onClick={() =>
                        props.clickMenuBurger
                        ?props.setClickMenuBurger(false)
                        :props.setClickMenuBurger(true)

                    } className={
                        props.clickMenuBurger
                        ?s.burger
                        :s.active
                        }>
                        <span>
                        </span>
                    </div>
                    <MenuContainer />
            </div>
    )
}

export default Header