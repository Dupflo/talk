import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contexte = () => (
  <Layout>
    <div className>
    <SEO title="Page two" />
    
    <h1 className="title container-lg text-center">
      Les réseaux sociaux sont indispensables à la visibilité de votre
      entreprise
    </h1>
    <div className="grid-3 container">
      <div className="card p-3 m-2">
        <div className="context-img context-img-1"></div>
        <h2>
          38<small>millions</small>
        </h2>
        <p>de français actifs sur les réseaux sociaux</p>
      </div>
      <div className="card p-3 m-1 primary">
        <div className="context-img context-img-2"></div>
        <h2>
          01<small>h20</small>
        </h2>
        <p>c’est le temps quotidien moyen passé sur les médias sociaux.</p>
      </div>
      <div className="card p-3 m-1">
        <div className="context-img context-img-3"></div>
        <h2>
          90<small>%</small>
        </h2>
        <p>des internautes font confiances à l’avis d’un ami sur internet.</p>
      </div>
    </div>
    <p className="text-center">Source "We are social 2019"</p>
    </div>
  </Layout>
)

export default Contexte
