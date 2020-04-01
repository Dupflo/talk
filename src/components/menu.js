import { Link } from "gatsby"
import React from "react"
import Logo from "./logo"
import useToggler from "../components/useToggler"


function Menu() {
  const [show, toggle] = useToggler(false)
  
  
  return (
    <>
      <div className={show ? "menu-btn close" : "menu-btn"} onClick={toggle}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <div className={show ? "overlay show" : "overlay"}></div>
      <header className={show ? "menu show" : "menu"}>
        <div className="logo" style={{ maxWidth: `100px` }}>
          <Link to="/" onClick={toggle}>
            <Logo />
          </Link>
        </div>
        <ul className={show ? "menu-nav show" : "menu-nav"}>
          <li className={show ? "nav-item show" : "nav-item "}>
            <Link
              to="#context"
              className="nav-link"
              activeClassName="active"
              onClick={toggle}
            >
              Le Contexte
            </Link>
          </li>
          <li className={show ? "nav-item show" : "nav-item "}>
            <Link
              to="#problematiques"
              className="nav-link"
              activeClassName="active"
              onClick={toggle}
            >
              Vos freins
            </Link>
          </li>
          <li className={show ? "nav-item show" : "nav-item "}>
            <Link
              to="#expertises"
              className="nav-link"
              activeClassName="active"
              onClick={toggle}
            >
              Nos expertises
            </Link>
          </li>
          <li className={show ? "nav-item show" : "nav-item "}>
            {" "}
            <Link
              to="#services"
              className="nav-link"
              activeClassName="active"
              onClick={toggle}
            >
              Nos services
            </Link>
          </li>
          <li className={show ? "nav-item show" : "nav-item "}>
            <Link to="#tarifs" className="nav-link" activeClassName="active"  onClick={toggle}>
              Nos tarifs
            </Link>
          </li>
          <li className={show ? "nav-item show" : "nav-item "}>
            <Link
              to="#references"
              className="nav-link"
              activeClassName="active"
              onClick={toggle}
            >
              Références
            </Link>
          </li>
          <li className={show ? "nav-item show" : "nav-item "}>
            <Link
              to="#contact"
              className="nav-link"
              activeClassName="active"
              onClick={toggle}
            >
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Menu
