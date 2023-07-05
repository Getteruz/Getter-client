'use client'
import { useEffect, useState } from "react";
import TopSitePage from "../components/Page/TopSite";
import { GetWebSite } from "../services/webSites";
export default function Home() {
  const [data, setData] = useState()
  useEffect(() => {
    console.l
    GetWebSite()
          .then(data => setData(data?.items))
          .catch(err => console.log(err))
  }, [])
  return (
    <>
      <TopSitePage data={data} />
    </>
  )
}
