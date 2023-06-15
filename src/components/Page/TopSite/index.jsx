import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import CategoryBtn from '../../UI/buttuns/category'
import TopSiteCatd from '../../UI/Cards/TopSite'
import Container from '../../UI/Container'
import { XIcon } from '../../UI/icons'
import { Cards, category } from "./data"

import cls from "./Home.module.scss"
export default function TopSitePage() {
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
                    Cards && Cards?.map(e => (
                        <TopSiteCatd className={cls.home__Card} key={e?.id} img={e?.image} link={'/'} text={e?.text} title={e?.title} />
                    ))
                }
            </div>
        </Container >
    )
}