import Image from "next/image"
import { HeartIcons, MessegeIcons } from "../../icons"
import cls from "./Articles.module.scss"

export default function ArticlesCard({ avatar, tag = [], like, commit, title, text, img, commitUser, likeUser, onClick, ...other }) {
    return (
        <div className={cls.Articles}>
            <div className={cls.Articles__top}>
                <div className={cls.Articles__avatar}>
                    <Image
                        src={'/user.svg'}
                        width={50}
                        height={50}
                        object-fit="cover"
                        alt="ava"
                    />
                    {tag && <div className={cls.Articles__tags}>
                        {tag?.slice(0, 3).map(e, i => (
                            <p key={i} className={cls.Articles__tags__text}>{e}</p>
                        ))}
                    </div>
                    }

                </div>

                <div className={cls.Articles__left}>
                    <p className={cls.Articles__left__text}><HeartIcons fill={'#FFFFFF'} border="black" /> {like}</p>
                    <p className={cls.Articles__left__text}><MessegeIcons /> {commit}</p>
                </div>
            </div>
            <h2 className={cls.Articles__title}>{title}</h2>
            {img ?
                <Image
                    src={img}
                    width={251}
                    height={251}
                    object-fit="cover"
                    alt="imgage"
                /> :
                <p className={cls.Articles__text}>{text}</p>}
        </div>
    )
}
