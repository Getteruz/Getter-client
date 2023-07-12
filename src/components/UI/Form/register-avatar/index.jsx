import Image from 'next/image'
import React from 'react'
import { UserIcon } from '../../icons'
import cls from "./register.module.scss"

export default function RegisterAvatar({ onChange, file, ...other }) {
    return (
        <label className={cls.RegisterAvatar} {...other}>
            <input type="file" />
            <div className={cls.RegisterAvatar__avatar}>
                {file ? <Image
                    src={file}
                    width={102}
                    height={102}
                    objectFit="cover"
                    alt='img'
                /> : <UserIcon />}
            </div>
            <p className={cls.RegisterAvatar__text}>Profil avatarini yuklang!</p>
        </label>
    )
}
