import React from 'react'
import { useState } from 'react'
import CategoryArticul from '../../UI/buttuns/articul-category'
import ArticlesCard from '../../UI/cards/articles'
import { articles, categories, tags } from './data'
import cls from "./user.module.scss"

export default function UserPage() {
    const [category, setCategoty] = useState(false)
    const [tagId, setTags] = useState(false)

    return (
        <div className={cls.UserPage}>
            <div className={cls.UserPage__category}>
                <h3 className={cls.UserPage__category__text} style={{ marginBottom: "16px" }}> Kategoriya</h3>
                <div className={cls.UserPage__category__wrap}>
                    {
                        categories?.map(e => (
                            <CategoryArticul className={`${category == e?.id ? cls.UserPage__category__btn : ""} `} key={e?.id} onClick={(() => setCategoty(state => state == e?.id ? false : e?.id))}>
                                {e?.label}
                            </CategoryArticul>
                        ))
                    }
                </div>

                <h3 className={cls.UserPage__category__text} style={{ marginBottom: "20px" }}> Kategoriya</h3>
                <div className={cls.UserPage__category__wrap}>
                    {
                        tags?.map(e => (
                            <CategoryArticul className={`${tagId == e?.id ? cls.UserPage__category__btn : ""} `} key={e?.id} onClick={(() => setTags(state => state == e?.id ? false : e?.id))}>
                                {e?.label}
                            </CategoryArticul>
                        ))
                    }
                </div>


            </div>
            <div className={cls.UserPage__content}>
                {articles?.slice(0, 3).map(e => (
                    <ArticlesCard
                        key={e?.id}
                        avatar={e?.avatar}
                        tag={e?.tag}
                        like={e?.like}
                        commit={e?.comment}
                        title={e?.text}
                        text={e?.title}
                        img={e?.imgae}
                        center={true}
                        likeUser={e?.avatars}
                        commitUser={e?.avatars}
                        owner={true}
                        style={{ paddingBottom: "31px", marginBottom: "50px" }}
                    />
                ))}
            </div>
        </div>
    )
}
