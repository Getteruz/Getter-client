import React from 'react'
import BlueButtuns from '../../../UI/buttuns/blue'
import GoogleBtn from '../../../UI/buttuns/Google'
import GrueButtun from '../../../UI/buttuns/grue'
import InputLogin from '../../../UI/Form/loginInput'
import cls from "./Login.module.scss"

export default function LoginPage() {
    return (
        <div className={cls.LoginPage}>
            <h3 className={cls.LoginPage__title}>
                Kirish
            </h3>

            <form className={cls.LoginPage__form}>
                <InputLogin label={"Elektron pochta:"} style={{ marginBottom: "45px" }} />
                <InputLogin label={"Elektron pochta:"} style={{ marginBottom: "50px" }} />
                <BlueButtuns>Kirish</BlueButtuns>
            </form>
            <GrueButtun >Ro`yhatdan o`tish</GrueButtun>
            <GoogleBtn style={{ marginTop: "10px" }} />
        </div>
    )
}
