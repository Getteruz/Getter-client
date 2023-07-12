import { useRouter } from 'next/router'
import React from 'react'
import BlueButtuns from '../../../UI/buttuns/blue'
import GoogleBtn from '../../../UI/buttuns/google'
import GrueButtun from '../../../UI/buttuns/grue'
import InputSms from '../../../UI/form/sms-input'
import { LeftIcon } from '../../../UI/icons'
import cls from "./Login.module.scss"

export default function VerifySmsPage() {
    const router = useRouter()
    return (
        <div className={cls.LoginPage}>
            <div className={cls.LoginPage__verify} onClick={() => router.push('/auth/send-sms')}>
                <LeftIcon />
                <p className={cls.LoginPage__verify__text}><span>+998 **** 1232</span> raqamiga yuborilgan sms kodni kiriting</p>
            </div>

            <p className={cls.LoginPage__what}>59</p>

            <form className={cls.LoginPage__form}>

                <InputSms label={"SMS kod"} style={{ marginBottom: "50px" }} />
                <BlueButtuns>Tasdiqlash</BlueButtuns>
            </form>
            <GrueButtun onClick={() => router.push('/auth/login')}>Kirish</GrueButtun>
            <GoogleBtn style={{ marginTop: "10px" }} />
        </div>
    )
}
