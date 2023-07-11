import React from 'react'
import cls from "./GrueButtun.module.scss"

export default function GrueButtun({ children, onClick }) {
    return (
        <button className={cls.GrueButtun} onClick={onClick}>
            {children}
        </button>
    )
}
