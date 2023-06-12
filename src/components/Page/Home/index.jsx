import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import CategoryBtn from '../../UI/buttuns/category'
import Container from '../../UI/Container'
import { XIcon } from '../../UI/icons'
import { category } from "./data"

import cls from "./Home.module.scss"
export default function HomePage() {
    const router = useRouter()
    const [categoryId, setCatgeryId] = useState(['All'])

    return (
        <Container>
            <div className={cls.home__Filter}>
                {router?.query?.openFilter == "true" && <>
                    <CategoryBtn
                        className={`${categoryId.includes("All") ? cls.CategoryBtnActove : ""}`}
                        onClick={() => {
                            if (categoryId.includes("All")) {
                                router.replace({ query: { openFilter: "false" } })
                            }
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
                </>

                }

            </div>

        </Container >
    )
}
