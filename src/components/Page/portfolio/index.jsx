import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import CategoryBtn from '../../UI/buttuns/category'
import TopSiteCatd from '../../UI/Cards/TopSite'
import Container from '../../UI/Container'
import { XIcon } from '../../UI/icons'
import { Cards, category } from "./data"

import cls from "./portfolio.module.scss"
export default function PortfolioPage({ data }) {
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

            <div className={cls.home__Cards}>
                {
                    data && data?.map(e => (
                        <TopSiteCatd
                            className={cls.home__Card}
                            key={e?.id} img={e?.avatar?.url}
                            link={'/'}
                            user={['/user.svg', '/user.svg', '/user.svg']}
                            text={e?.text}
                            title={e?.title} />
                    ))
                }
            </div>
        </Container >
    )
}
