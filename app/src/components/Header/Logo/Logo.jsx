import React from 'react'
import s from './Logo.module.css'
import {NavLink} from 'react-router-dom'

const Logo = (props) => {
    return (
            <div className={s.container}>
                    <div  className={s.logo}>
                        <NavLink to='/' className={s.navlink}>
                            <div className={s.title}>
                                Pokemon Cards Logo
                            </div>
                        </NavLink>
                    </div>
            </div>
    )
}

export default Logo