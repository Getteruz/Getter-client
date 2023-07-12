import { useRouter } from 'next/router'
import React from 'react'
import BlueButtuns from '../../../UI/buttuns/blue'
import GoogleBtn from '../../../UI/buttuns/google'
import GrueButtun from '../../../UI/buttuns/grue'
import InputLogin from '../../../UI/form/login-input'

import cls from "./Login.module.scss"

export default function SendSmsPage() {
    const router = useRouter()
    return (
        <div className={cls.LoginPage}>
            <h3 className={cls.LoginPage__title}>
                Ro`yhatdan o`tish
            </h3>

            <form className={cls.LoginPage__form}>
                <InputLogin label={"Elektron pochta yoki telefon raqamingiz:"} style={{ marginBottom: "50px" }} />

                <BlueButtuns>Keyingisi</BlueButtuns>
            </form>
            <GrueButtun onClick={() => router.push('/auth/login')}>Kirish</GrueButtun>
            <GoogleBtn style={{ marginTop: "10px" }} />
        </div>
    )
}
