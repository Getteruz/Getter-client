import React from 'react'
import cls from "./serviceCard.module.scss"

export default function ServiceCard({ title, text, arr = [], number, ...other }) {
    return (
        <div className={cls.ServiceCard} {...other}>
            <h2 className={cls.ServiceCard__title}><span>{number}</span> {title}</h2>
            <p className={cls.ServiceCard__text}>{text}</p>
            <ul>
                {
                    arr && arr.map((e, i) => (
                        <li key={i} className={cls.ServiceCard__arr}>{e}</li>
                    ))
                }
            </ul>
        </div>
    )
}
