import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Logo } from '../../UI/icons'
import { NavLink } from './data'
import cls from "./UserLayout.module.scss"


export default function UserLayout({ children }) {
    const router = useRouter()
    return (
        <>
            <header className={cls.UserLayout}>
                <Link href={'/'}> <Logo /></Link>
                <div className={cls.UserLayout__user}>
                    <div className={cls.UserLayout__user__img}>
                        <Image
                            src={'/user.svg'}
                            width={52}
                            height={52}
                            objectFit={"cover"}
                        />
                    </div>
                    <div className={cls.UserLayout__user__content}>
                        <h3 className={cls.UserLayout__user__title}>Bekzod Eshmatov</h3>
                        <p className={cls.UserLayout__user__text}>WebDesigner</p>
                    </div>
                </div>
            </header>
            <div className={cls.UserLayout__content}>
                <div className={cls.UserLayout__navbar}>
                    {NavLink && NavLink?.map(e => (
                        <div>
                            <Link href={e?.link} className={`${cls.UserLayout__navbar__link} ${router.pathname === e?.link ? cls.UserLayout__navbar__linkActive : ""}`} >
                                {e?.icon(router.pathname === e?.link ? "#7000FF" : "#1D1D1F")}
                                {e?.label}
                            </Link>
                            {e?.children && e?.children?.map(el => (
                                <p onClick={() => router.push(el?.link)}
                                    className={`${cls.UserLayout__navbar__linkChild} ${router.pathname === el?.link ?
                                        cls.UserLayout__navbar__linkActive : ""}`}>
                                    {el?.icon(router.pathname === el?.link ? "#7000FF" : "#1D1D1F")}
                                    {el?.label}
                                </p >
                            ))}
                        </div>
                    ))}
                </div>
                {children}
            </div>

        </>
    )
}