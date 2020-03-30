import { Link } from "gatsby"
import React from "react"


const Menu = ({ siteTitle }) => (
  <div className="menu">
    <ul className="menu-branding">
      <li className="nav-item">
        <Link to="/contexte" className="nav-link" activeClassName="active">
          Le Contexte
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/problematiques"
          className="nav-link"
          activeClassName="active"
        >
          Vos freins
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/expertises" className="nav-link" activeClassName="active">
          Nos expertises
        </Link>
      </li>
      <li className="nav-item">
        {" "}
        <Link to="/services" className="nav-link" activeClassName="active">
          Nos services
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/tarifs" className="nav-link" activeClassName="active">
          Nos tarifs
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/references" className="nav-link" activeClassName="active">
          Références
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link" activeClassName="active">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Menu
