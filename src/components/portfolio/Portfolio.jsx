import { useEffect, useState } from "react";
import { bootstrapData, featuredData, htmlCssData, portfolioMenu } from "../../data";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"


export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setPortfolioData(featuredData);
        break;
      case "htmlcss":
        setPortfolioData(htmlCssData);
        break;
      case "bootstrap":
        setPortfolioData(bootstrapData);
        break;
    
      default:
        setPortfolioData(featuredData);
        break;
    }
  }, [selected]);
  

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {
          portfolioMenu.map(item => (
            <PortfolioList  
            menuItem={item}
            active={selected === item.id}
            setSelected={setSelected}
            key={item.id}
            />
            ) 
          ) 
        }
      </ul>
      <div className="container">
        {
          portfolioData.map(data => (
          <div className="item">
            <img src={data.img} alt="" />
            <h3>{data.title}</h3>
          </div>
          ))
        };
      </div>
    </div>
  )
}
