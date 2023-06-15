'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HeartIcons, LinkIcons } from '../../icons'
import cls from "./TopSiteCatd.module.scss"

export default function TopSiteCatd({ img, title, text, user, onClick, link, onLike, className, ...other }) {
    const [like, setLike] = useState(false)
    return (
        <div className={`${cls.TopSiteCatd} ${className && className}`} {...other}>
            <Image
                className={cls.TopSiteCatd__img}
                src={img}
                layout='fill'
                objectFit='cover'
                alt="Picture "
            />
            <div className={cls.TopSiteCatd__wrap}>
                <div className={cls.TopSiteCatd__content}>
                    <div>
                        <h3 className={cls.TopSiteCatd__title}>{title}</h3>
                        <p className={cls.TopSiteCatd__text}>{text}</p>
                    </div>
                    <div className={cls.TopSiteCatd__ava}>
                        {user && user?.map((e, i) => (
                            <Image
                                key={i}
                                className={cls.TopSiteCatd__ava__img}
                                src={e}
                                width={40}
                                height={40}
                                objectFit='cover'
                                alt="Picture"
                            />
                        ))}
                    </div>
                </div>
                <div className={cls.TopSiteCatd__btns}>
                    <button className={cls.TopSiteCatd__like} onClick={() => setLike(!like)} ><HeartIcons
                        fill={like ? "red" : "white"} border={like ? "red" : "white"} /> Baho bering</button>
                    <Link href={link} className={cls.TopSiteCatd__like} ><LinkIcons /></Link>
                </div>
            </div>
        </div>
    )
}
