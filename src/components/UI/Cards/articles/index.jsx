import Image from "next/image"
import { HeartIcons, MessegeIcons } from "../../icons"
import cls from "./Articles.module.scss"

export default function ArticlesCard({ avatar, tag = [], like, commit, title, text, img, commitUser, likeUser, center, onClick, ...other }) {
    return (
        <div className={cls.Articles} {...other}>
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
                        {tag?.slice(0, 3).map((e, i) => (
                            <p key={i} className={cls.Articles__tags__text}>{e}</p>
                        ))}
                    </div>
                    }

                </div>

                {!center && <div className={cls.Articles__left}>
                    <p className={cls.Articles__left__text}><HeartIcons fill={'#FFFFFF'} border="black" /> {like}</p>
                    <p className={cls.Articles__left__text}><MessegeIcons /> {commit}</p>
                </div>}
            </div>
            <h2 className={cls.Articles__title}>{title}</h2>
            {
                center && <p className={cls.Articles__text}>{text}</p>
            }
            {img ?
                <Image
                    src={img}
                    width={251}
                    height={251}
                    object-fit="cover"
                    alt="imgage"
                    className={`${center ? cls.Articles__img : cls.Articles__img1}`}
                /> : !center ? <p className={cls.Articles__text}>{text}</p> : ""}
            {
                center &&
                <div className={cls.Articles__btn}>

                    <div className={cls.Articles__btn__wrap}>
                        <HeartIcons fill={'#FFFFFF'} border="black" />
                        <p className={cls.Articles__btn__text}>{like}</p>
                        <p className={cls.Articles__btn__text1}>Понравилась:</p>
                        <div className={cls.Articles__btn__avatar}>
                            {commitUser && commitUser?.map((e, i) => (
                                <div className={cls.Articles__btn__ava} key={i}>
                                    <Image
                                        src={e}
                                        width={28}
                                        height={28}
                                        alt={"img"}
                                        object-fit="contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cls.Articles__btn__wrap}>
                        <MessegeIcons fill={'#FFFFFF'} border="black" />
                        <p className={cls.Articles__btn__text}>{commit}</p>
                        <p className={cls.Articles__btn__text1}>Комментарии:</p>
                        <div className={cls.Articles__btn__avatar}>
                            {likeUser && likeUser?.map((e, i) => (
                                <div className={cls.Articles__btn__ava} key={i}>
                                    <Image
                                        src={e}
                                        width={28}
                                        height={28}
                                        alt={"img"}
                                        object-fit="contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
