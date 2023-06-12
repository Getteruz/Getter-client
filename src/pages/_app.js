import { Suspense } from 'react'
import MainLayout from '../components/Layouts/Main'
import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar"
import FixedFilter from '../components/Layouts/fixedFilter'

function MyApp({ Component, pageProps }) {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
        <MainLayout>
        {/* <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true}/> */}
        <Component {...pageProps} />
        <FixedFilter/>
        </MainLayout>
      </Suspense>
  )
}

export default MyApp
