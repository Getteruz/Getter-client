import React from 'react'
import cls from "./notPobot.module.scss"

export default function NotRobat({ label, onChange, onClick, ...other }) {
    return (
        <label className={cls.NotRobat}  {...other}>
            <input type={"checkbox"} />
            {label}
        </label>
    )
}
