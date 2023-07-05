import { useEffect, useState } from "react";
import TopSitePage from "../components/Page/TopSite";
import { GetWebSite } from "../services/webSites";

export default function TopSite() {
  const [data, setData] = useState()
  useEffect(() => {
   
    GetWebSite()
          .then(data => setData(data?.items))
          .catch(err => console.log(err))
  }, [])
  return (
    <>
    
        <TopSitePage data={data}/>
    </>
  )
}
