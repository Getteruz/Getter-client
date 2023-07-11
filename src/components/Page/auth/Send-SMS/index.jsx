import React from 'react'
import BlueButtuns from '../../../UI/buttuns/blue'
import GoogleBtn from '../../../UI/buttuns/Google'
import GrueButtun from '../../../UI/buttuns/grue'
import InputLogin from '../../../UI/Form/loginInput'
import cls from "./Login.module.scss"

export default function SendSmsPage() {
    return (
        <div className={cls.LoginPage}>
            <h3 className={cls.LoginPage__title}>
                Ro`yhatdan o`tish
            </h3>

            <form className={cls.LoginPage__form}>
                <InputLogin label={"Elektron pochta yoki telefon raqamingiz:"} style={{ marginBottom: "50px" }} />

                <BlueButtuns>Keyingisi</BlueButtuns>
            </form>
            <GrueButtun>Kirish</GrueButtun>
            <GoogleBtn style={{ marginTop: "10px" }} />
        </div>
    )
}
