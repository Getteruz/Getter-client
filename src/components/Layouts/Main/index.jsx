import React from 'react'
import Footer from '../../UI/footer'
import Navbar from '../../UI/Navbar'
import { Link } from "./data"

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar link={Link} />
            {children}
            <Footer />
        </>
    )
}
