import React from 'react'
import { UploadIcon } from '../../icons'
import cls from "./UploadText.module.scss"

export default function UploadText({ label, onChange, ...other }) {
    return (
        <label className={cls.UploadText}{...other}>
            <UploadIcon color={"#5200FF"} /> {label}
            <input className={cls.UploadText__file} type="file" onChange={onChange} />
        </label>
    )
}
