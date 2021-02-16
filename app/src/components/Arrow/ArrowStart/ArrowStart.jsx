import React from 'react'
import s from './ArrowStart.module.css'

const ArrowStart = (props) => {

    return(
            <div className={s.container}>
                <div className={s.arrow}>
                    <div className={s.top}></div>
                    <div className={s.bottom}></div>
                </div>
                <div className={s.arrow}>
                    <div className={s.top}></div>
                    <div className={s.bottom}></div>
                </div>
            </div>
    )
}

export default ArrowStart