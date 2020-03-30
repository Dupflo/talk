import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import man from "../images/freins/man.jpg"
import { Container, Row, Col } from "react-grid-system"

const Problematiques = () => (
  <Layout>
    <SEO title="Page two" />

    <div className="problems">
      <div className="py-2">
        <h1 className="title text-center">Vos problématiques ?</h1>
        <div className="pb">
          <div className="pb vertical-card py-1">
            <div className="pb-img pb-img-1"></div>
            <p>"Je n'ai pas le temps de m'en occuper"</p>
          </div>
          <div className="pb vertical-card py-1 primary">
            <div className="pb-img pb-img-2"></div>
            <p>"Je ne dispose pas des compétences en interne"</p>
          </div>
          <div className="pb vertical-card py-1">
            <div className="pb-img pb-img-3"></div>
            <p>"Je souhaite maitriser mon investissement"</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Problematiques
