import React from 'react'
import cls from "./blueBtn.module.scss"

export default function BlueButtuns({ children, type = "buttun", onClick, onChange, OnSubmit, ...other }) {
    return (
        <button className={cls.BlueButtuns} type={type} >
            {children}
        </button>
    )
}
