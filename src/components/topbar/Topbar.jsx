import { Mail, Person } from "@mui/icons-material"
import "./topbar.scss"

export default function Topbar({openMenu, setOpenMenu}) {
  return (
    <div className={"topbar " + (openMenu && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">AMINUL</a>
          <div className="itemContainer">
            <Person className="icon"></Person>
            <span>+880 1743724256</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"></Mail>
            <span>aminulds61@gmail.com</span>
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
