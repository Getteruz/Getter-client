import { Suspense } from 'react'
import { useRouter } from 'next/router'
// import NextNProgress from "nextjs-progressbar"
import FixedFilter from '../components/Layouts/fixed-filter'
import UserLayout from '../components/Layouts/user-layout'
import MainLayout from '../components/Layouts/main'

import '../styles/globals.css'

const UserLink = ['/user','/create-articles','/user-select','/user-messege']

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      {UserLink.includes(router.pathname) ?
        <UserLayout>
          <Component {...pageProps} />
          <FixedFilter />
        </UserLayout>
        :
        <MainLayout>
          <Component {...pageProps} />
          <FixedFilter/>
        </MainLayout>
      }
      </Suspense>
  )
}

export default MyApp
