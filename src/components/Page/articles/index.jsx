import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import CategoryBtn from '../../UI/buttuns/category'
import Container from '../../UI/container'
import { XIcon } from '../../UI/icons'
import ArticlesCard from '../../UI/cards/articles'

import cls from "./articles.module.scss"
import { articles, category } from "./data"

export default function ArticlesPage() {
    const router = useRouter()
    const [categoryId, setCatgeryId] = useState(['All'])

    return (
        <Container>
            {router?.query?.openFilter == "true" ?
                <div className={cls.home__Filter}>
                    <CategoryBtn
                        className={`${categoryId.includes("All") ? cls.CategoryBtnActove : ""}`}
                        onClick={() => {
                            setCatgeryId(["All"])
                        }}>
                        Barcha maqolalar
                        {categoryId.includes("All") ? <button > <XIcon /></button> : ""}
                    </CategoryBtn>
                    {
                        category?.map(e => (
                            <>
                                <CategoryBtn
                                    className={`${categoryId.includes(e?.id) ? cls.CategoryBtnActove : ""}`}
                                    onClick={() => {
                                        setCatgeryId((state) => state.includes('All') ? [e?.id] : state.includes(e?.id) && state.length > 1 ? state.filter(item => item !== e?.id) : state.includes(e?.id) && state.length == 1 ? ['All'] : [...state, e?.id])
                                    }}>
                                    {e?.text}
                                    {categoryId.includes(e?.id) ?
                                        <button >
                                            <XIcon />
                                        </button> : ""}
                                </CategoryBtn>
                            </>
                        ))
                    }

                </div> : ""
            }

            <div className={cls.ArticlesPage}>
                {
                    articles && <div className={cls.ArticlesPage__wrap}>
                        {articles?.map(e => (
                            <ArticlesCard
                                key={e?.id}
                                avatar={e?.avatar}
                                tag={e?.tag}
                                like={e?.like}
                                commit={e?.comment}
                                title={e?.text}
                                text={e?.title}
                                img={e?.imgae}
                                style={{ padding: "35px 48px 40px 30px" }}
                            />
                        ))}
                    </div>
                }
                {
                    articles && <div className={cls.ArticlesPage__wrap}>
                        <input className={cls.ArticlesPage__search} type="text" placeholder='+ Что нового?' />
                        {articles?.slice(0, 4).map(e => (
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
                                style={{ paddingBottom: "31px" }}
                            />
                        ))}
                    </div>
                }
                {
                    articles && <div className={cls.ArticlesPage__wrap}>
                        {articles?.map(e => (
                            <ArticlesCard
                                key={e?.id}
                                avatar={e?.avatar}
                                tag={e?.tag}
                                like={e?.like}
                                commit={e?.comment}
                                title={e?.text}
                                text={e?.title}
                                img={e?.imgae}
                            />
                        ))}
                    </div>
                }
            </div>

        </Container >
    )
}
