import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import cls from "./InputSms.module.scss"

let currentOPTIndex = 0

export default function InputSms({ ...other }) {
    const [otp, setOtp] = useState(new Array(4).fill(""))
    const [activeOpt, setActiveOpt] = useState(0)
    const inputRef = useRef()
    const handleChane = (e) => {
        const value = e.target.value
        const newOTP = [...otp]
        newOTP[currentOPTIndex] = value.substring(value.length - 1)
        if (!value) setActiveOpt(currentOPTIndex - 1)
        else setActiveOpt(currentOPTIndex + 1)

        setOtp(newOTP)
    };

    const handleKeyDown = ({ key }, index) => {
        currentOPTIndex = index;
        if (key === "Backspace") setActiveOpt(currentOPTIndex - 1)
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [activeOpt])

    return (
        <label className={cls.InputSms} {...other}>
            <p className={cls.InputSms__label}>SMS kod</p>
            <div className={cls.InputSms__input} >
                {otp?.map((_, index) => (
                    <input key={index} ref={index === activeOpt ? inputRef : null} type="number" placeholder='-'
                        onChange={handleChane}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        value={otp[index]}
                    />
                ))}
            </div>
        </label>
    )
}
