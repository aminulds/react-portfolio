import { GitHub, LinkedIn } from "@mui/icons-material"
import "./topbar.scss"

export default function Topbar({openMenu, setOpenMenu}) {
  return (
    <div className={"topbar " + (openMenu && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">AMINUL</a>
          <div className="itemContainer">
            <a href="https://github.com/aminulds"><GitHub className="icon"></GitHub></a>
            <a href="https://www.linkedin.com/in/aminulds"><LinkedIn className="icon"></LinkedIn></a>
          </div>
        </div>
        
        <div className="right">
          <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
