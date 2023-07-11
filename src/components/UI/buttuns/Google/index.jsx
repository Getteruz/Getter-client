import React from 'react'
import { GoogleIcon, RightIcon } from '../../icons'
import cls from "./google.module.scss"

export default function GoogleBtn({ onClick, ...other }) {
    return (
        <button className={cls.GoogleBtn} onClick={onClick}{...other}>
            <div>
                <GoogleIcon />Gmail
            </div>
            <RightIcon color={"#1D1D1F"} />
        </button>
    )
}
