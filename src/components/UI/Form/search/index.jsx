import React from 'react'
import cls from "./searchinput.module.scss"

export default function SearchInput({ placeholder, className, ...other }) {
    return (
        <input className={cls.SearchInput} type="text" placeholder={placeholder} {...other} />
    )
}
