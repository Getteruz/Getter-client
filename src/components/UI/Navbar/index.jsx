import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Logo, PlusIcon } from '../icons'
import cls from "./Navbar.module.scss"



export default function Navbar({ link = [] }) {
    const router = useRouter()

    return (
        < >
            <div className={cls.Navbar__logo}> <Logo /></div>
            {
                link && <ul className={cls.Navbar__list}>
                    {link?.map(e => (
                        <li key={e?.id} className={cls.Navbar__item}>
                            <div
                                onClick={() => {
                                    if (router.pathname == e?.link && e?.btnLink) {
                                        router.replace({ query: { openFilter: true } })
                                    }
                                    else {
                                        router.push(e?.link)
                                    }

                                }}
                                className={`${cls.Navbar__link} 
                                ${router.pathname === e?.link ? cls.Navbar__active : ""}`}
                            >
                                {e?.label}

                            </div>
                            {(router.pathname === e?.link || router.pathname === e?.btnLink) && e?.btnLink ?
                                <button
                                    onClick={() => router.push(e?.btnLink)}
                                    className={`${cls.Navbar__btn} ${router.pathname == e?.btnLink ? cls.Navbar__btnactive : ""} `}>
                                    <PlusIcon fill={router.pathname == e?.btnLink ? "#fff" : "#1D1D1F"} />
                                </button> : ""}
                        </li>
                    ))}
                </ul>
            }

        </ >
    )
}
