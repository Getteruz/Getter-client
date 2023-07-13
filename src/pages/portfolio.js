import { useEffect, useState } from "react";
import PortfolioPage from "../components/Page/portfolio";
import { GetPortfolio } from "../services/portfolio";

export default function Portfolio() {
  const [data, setData] = useState()
  const [loader , setLoader] = useState(true)
  useEffect(() => {
   
    GetPortfolio()
      .then(data => {
        setData(data?.items)
        setLoader(false)
      })
          .catch(err =>  setLoader(false))
  }, [])
    return (
      <>
        <PortfolioPage data={data} loader={loader} />
      </>
    )
  }