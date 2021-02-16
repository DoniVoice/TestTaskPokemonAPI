import React from 'react'
import s from './ArrowEnd.module.css'

const ArrowEnd = (props) => {

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

export default ArrowEnd