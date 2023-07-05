import { useEffect, useState } from "react";
import PortfolioPage from "../components/Page/portfolio";
import { GetPortfolio } from "../services/portfolio";

export default function Portfolio() {
  const [data, setData] = useState()
  useEffect(() => {
   
    GetPortfolio()
          .then(data => setData(data?.items))
          .catch(err => console.log(err))
  }, [])
    return (
      <>
        <PortfolioPage data={data} />
      </>
    )
  }