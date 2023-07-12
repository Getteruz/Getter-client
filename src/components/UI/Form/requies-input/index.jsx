import React from 'react'
import cls from "./RequiesInput.module.scss"

export default function RequiesInput({ type, placeholder, register, onChange, ...other }) {
    return (
        <input className={cls.RequiesInput} type={type} placeholder={placeholder} onChange={onChange} {...register}  {...other} />
    )
}
