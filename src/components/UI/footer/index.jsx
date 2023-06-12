import Link from 'next/link'
import React from 'react'
import { Logo } from '../icons'
import cls from "./Footer.module.scss"

export default function Footer() {
    return (
        <div className={cls.Footer}>
            <div className={cls.Footer__contianer}>
                <Logo />
                <p className={cls.Footer__title}>IT va Innovatsion g'oyalar markazi</p>
                <p className={cls.Footer__text}>Kompaniya 2018 yildan buyon zamonaviy IT-mahsulotlar va veb-saytlarni ishlab chiqishda
                    davom etmoqda, individual yechimlari bilan mijozlar qalbini zabt etibgina qolmay hamma uchun sifatli yechimlarni taklif etishda davom etmoqda.</p>
                <div className={cls.Footer__Nav}>
                    <Link className={cls.Footer__Nav__item} href={'/'} >Biz haqimizda</Link>
                    <Link className={cls.Footer__Nav__item} href={'/'} >Biz bilan aloqa</Link>
                    <Link className={cls.Footer__Nav__item} href={'/'} >Sayt joylashtirish</Link>
                    <Link className={cls.Footer__Nav__item} href={'/'} >Buyurtmachilarga</Link>
                    <Link className={cls.Footer__Nav__item} href={'/'} >Normativ hujjatlar</Link>
                    <Link className={cls.Footer__Nav__item} href={'/'} >Maqolalar</Link>
                    <Link className={cls.Footer__Nav__item} href={'/'} >Savol javob</Link>
                    <Link className={cls.Footer__Nav__item} href={'/'} >Jamoa</Link>
                </div>
                <div className={cls.Footer__list}>
                    <Link className={cls.Footer__list__item} href={'/'} >Mahfiylik siyosati</Link>
                    <Link className={cls.Footer__list__item} href={'/'} >Foydalanish shartlari</Link>
                </div>
            </div>
        </div >
    )
}
