import { TextField } from '@mui/material'
import React from 'react'
import cls from "./InputLogin.module.scss"

export default function InputLogin({ label, onChange, register, ...other }) {
    return (
        <TextField className={cls.InputLogin} id="standard-basic" label={label} variant="standard" onChange={onChange}  {...register} {...other} />
    )
}
