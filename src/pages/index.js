import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Context from "../components/contents/contexte"
import Home from "../components/contents/home"
import Problematiques from "../components/contents/problematiques"
import Expertises from "../components/contents/expertises"
import Services from "../components/contents/services"
import Tarifs from "../components/contents/tarifs"
import References from "../components/contents/references"
import Contact from "../components/contents/contact"

const IndexPage = () => (
  <>
    <Header />
    <SEO title="Home" />
    <div id="home">
      <Home />
    </div>
    <div id="context" className="bkg">
      <Context />
    </div>
    <div id="problematiques">
      <Problematiques />
    </div>
    <div id="expertises" className="bkg">
      <Expertises />
    </div>
    <div id="services">
    <Services />
    </div>
    <div id="tarifs" className="bkg">
      <Tarifs />
    </div>
    <div id="references">
      <References />
    </div>
    <div id="contact" className="bkg">
      <Contact />
    </div>
  </>
)

export default IndexPage
