import React from 'react'

import cls from './articulCategory.module.scss'

export default function CategoryArticul({ children, className, onClick, ...other }) {
    return (
        <button className={`${cls.CategoryArticul} ${className && className}`} onClick={onClick} {...other}>
            {children}
        </button>
    )
}
