import "./portfolioList.scss"

export default function PortfolioList({menuItem, active, setSelected}) {
  const {id, title} = menuItem;

  return (
    <li className={active ? "portfolioList active": "portfolioList"} onClick={() => setSelected(id)}>
      {title}
    </li>
  )
}
