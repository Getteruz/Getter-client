import { useEffect, useState } from "react";
import TopSitePage from "../components/page/top-site";
import { GetWebSite } from "../services/web-sites";

export default function TopSite() {
  const [data, setData] = useState()
  const [loader , setLoader] = useState(true)
  useEffect(() => {
    GetWebSite()
      .then(data => {
        setData(data?.items)
        setLoader(false)
      })
          .catch(err =>  setLoader(false))
  }, [])
  return (
    <>
    
      <TopSitePage data={data} loader={loader } />
    </>
  )
}
