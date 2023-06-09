import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import { FaceBookIcon, InstaIcon, LogoSmoll, Searchcon, TelegramIcon } from "../../UI/icons"
import { filter, Links } from "./data"

import cls from "./fixed.module.scss"


export default function FixedFilter() {
    const [openCategory, setCategory] = useState(false)
    const router = useRouter()
    return (
        <div className={cls.FixedFilter}>
            <div className={`${cls.FixedFilter__wrap}  ${openCategory ? cls.FixedFilter__wrapOpen : cls.FixedFilter__wrapClose}`}
                onMouseLeave={() => setCategory(false)}>

                <div className={cls.FixedFilter__botton}>
                    <div className={`${cls.FixedFilter__top} ${openCategory ? cls.FixedFilter__topOpen : cls.FixedFilter__topClose}`}>
                        <div className={cls.FixedFilter__content}>
                            <div className={cls.FixedFilter__content__left} >
                                {
                                    filter && <div>
                                        {filter?.map(e => (
                                            <p key={e?.id} className={cls.FixedFilter__content__link}>{e?.text}</p>
                                        ))}
                                    </div>
                                }
                                {
                                    filter && <div>
                                        {filter?.map(e => (
                                            <p key={e?.id} className={cls.FixedFilter__content__link}>{e?.text}</p>
                                        ))}
                                    </div>
                                }
                                {
                                    filter && <div>
                                        {filter?.map(e => (
                                            <p key={e?.id} className={cls.FixedFilter__content__link}>{e?.text}</p>
                                        ))}
                                    </div>
                                }
                                {
                                    filter && <div>
                                        {filter?.map(e => (
                                            <p key={e?.id} className={cls.FixedFilter__content__link}>{e?.text}</p>
                                        ))}
                                    </div>
                                }
                            </div>
                            <div className={cls.FixedFilter__right}>
                                <p className={cls.FixedFilter__content__link}>+998 95 122-44-72</p>
                                <p className={cls.FixedFilter__content__link}>Toshkent shahar. M.Ulugbek tumani. Parkent kochasi 131 A</p>
                                <p className={cls.FixedFilter__content__link}>info@gmail.uz</p>
                            </div>
                        </div>
                    </div>
                    <div className={cls.FixedFilter__botton__wrap}>
                        <div className={cls.FixedFilter__Flter}>
                            <div
                                onClick={() => setCategory(!openCategory)}
                                className={`${cls.FixedFilter__humberger} ${openCategory && cls.FixedFilter__openHumberger}`}>
                                <div ></div>
                            </div>
                            <div className={cls.FixedFilter__logo}>
                                <LogoSmoll />
                            </div>
                            <input className={cls.FixedFilter__SearchInput} placeholder={"Matningizni kiritng"} type="text" />
                        </div>
                        <div className={cls.FixedFilter__Links}>
                            <div className={cls.FixedFilter__Links__left}>
                                {Links && Links?.map(e => (
                                    <Link
                                        className={cls.FixedFilter__Links__text}
                                        key={e?.id}
                                        href={e?.link}>
                                        {e?.text}
                                    </Link>
                                ))}
                            </div>
                            <div className={cls.FixedFilter__sosiad}>
                                <Link className={cls.FixedFilter__sosiad__link} href={'/'}>
                                    <FaceBookIcon />
                                </Link>
                                <Link className={cls.FixedFilter__sosiad__link} href={'/'}>
                                    <InstaIcon />
                                </Link>
                                <Link className={cls.FixedFilter__sosiad__link} href={'/'}>
                                    <TelegramIcon />
                                </Link>
                            </div>
                            <div className={cls.FixedFilter__profile} onClick={() => router.push("/user")}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
