import { useRouter } from 'next/router'
import React from 'react'

import Footer from '../../UI/footer'
import Navbar from '../../UI/navbar'

import { AllowFooter, Link } from "./data"

export default function MainLayout({ children }) {
    const router = useRouter()
    return (
        <>
            <Navbar link={Link} />
            {children}
            {AllowFooter.includes(router?.pathname) ? <Footer /> : ""}
        </>
    )
}
