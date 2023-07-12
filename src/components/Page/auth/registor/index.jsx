import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

import BlueButtuns from '../../../UI/buttuns/blue'
import GoogleBtn from '../../../UI/buttuns/google'
import GrueButtun from '../../../UI/buttuns/grue'
import InputLogin from '../../../UI/form/login-input'
import RegisterAvatar from '../../../UI/form/register-avatar'
import SelectRegister from '../../../UI/form/register-select'
import { LeftIcon } from '../../../UI/icons'

import cls from "./registor.module.scss"

export default function RegisterPage() {
    const router = useRouter()
    return (
        <div className={cls.RegisterPage}>
            <div className={cls.RegisterPage__verify} >
                <LeftIcon />
                <p className={cls.RegisterPage__verify__text}>Komuniti profilingizni yarating!</p>
            </div>
            <form className={cls.RegisterPage__form}>
                <RegisterAvatar style={{ marginBottom: "43px" }} />
                <InputLogin label={"Ismi sharifingiz"} style={{ marginBottom: "45px" }} />
                <SelectRegister />
                <BlueButtuns style={{ marginTop: "50px" }} >Komunitiga kirish</BlueButtuns>
            </form>
            <GrueButtun onClick={() => router.push('/auth/login')} >Kirish</GrueButtun>
            <GoogleBtn style={{ marginTop: "10px" }} />
        </div>
    )
}
