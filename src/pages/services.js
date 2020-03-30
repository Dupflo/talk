import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import useToggler from "../components/useToggler"
import { render } from "react-dom"

function Services(props) {
  const [show1, toggle1] = useToggler(false)
  const [show2, toggle2] = useToggler(false)
  const [show3, toggle3] = useToggler(false)
  const [show4, toggle4] = useToggler(false)
  const [show5, toggle5] = useToggler(false)
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Notre solution clé en main</h1>
      <div className="round">
        <div className="arg arg1" onClick={toggle1}>
          <Image alt="Talk" filename="services/photo.png" />
          <div style={{ display: show1 ? "block" : "none" }}>test</div>
        </div>
        <div className="arg arg2" onClick={toggle2}>
          <Image alt="Talk" filename="services/bilan.png" />
          <div style={{ display: show2 ? "block" : "none" }}>test</div>
        </div>
        <div className="arg arg3" onClick={toggle3}>
        <div style={{ display: show3 ? "block" : "none" }}>test</div>
          <Image alt="Talk" filename="services/talk.png" />
          
        </div>
        <div className="arg arg4" onClick={toggle4}>
          <div style={{ display: show4 ? "block" : "none" }}>test</div>
          <Image alt="Talk" filename="services/sponsor.png" />
        </div>
        <div className="arg arg5" onClick={toggle5}>
          <div style={{ display: show5 ? "block" : "none" }}>test</div>
          <Image alt="Talk" filename="services/bell.png" />
        </div>
      </div>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Services
