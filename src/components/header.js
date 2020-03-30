import { Link } from "gatsby"
import React from "react"
import Image from "../components/image"
import Menu from "../components/menu"
import useToggler from "../components/useToggler"

function Header(props) {
  const [show, toggle] = useToggler(false)

  return (
    <>
      <header className="header-mobile visible-mobile">
        <div
          className="menu-btn"
          onClick={toggle}
        >
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
        <div style={{ display: show ? "block" : "none" }}>
          <Menu />
        </div>
      </header>
      <header className="header-desktop visible-desktop">
      <div className="logo" style={{ maxWidth: `100px` }}>
       <Link to="/"><Image alt="Gatsby in Space" filename="logo_talk.png" /></Link> 
      </div>
        <Menu />
      </header>
    </>
  )
}

export default Header
