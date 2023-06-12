import Image from 'next/image'
import React from 'react'
import cls from "./TopSiteCatd.module.scss"

export default function TopSiteCatd({ img, title, text, onClick, onLike, ...other }) {
    return (
        <div className={cls.TopSiteCatd} {...other}>
            <Image
                className={cls.TopSiteCatd__img}
                src={img}
                layout='fill'
                objectFit='cover'
                alt="Picture "
            />
        </div>
    )
}
