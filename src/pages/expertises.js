import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Expertises = () => (
  <Layout>
    <div className="container-lg">
    <SEO title="Page two" />
    <div className="m-5">
      <h1 className="title">
        Nous intervenons sur les réseaux sociaux les plus consultés par les
        français
      </h1>
      <div className="grid-3">
        <div className="social-service m-1 p-2">
          <div className="social-bandname inline-flex">
            <div className="social-logo">
              <Image alt="Talk" filename="expertises/gmb.png" />
            </div>
            <h2>Google my Business</h2>
          </div>
          <div className="social-advantages">
            <p>Site internet le plus consulté en France et dans le monde.</p>
            <p>
              <strong>94%</strong> des recherches effectuées sur le Web.
            </p>
          </div>
        </div>
        <div className="social-service m-1 p-2">
          <div className="social-bandname inline-flex">
            <div className="social-logo">
              <Image alt="Talk" filename="expertises/fb.png" />
            </div>
            <h2>Facebook</h2>
          </div>
          <div className="social-advantages">
            <p>Application mobile la plus utilisée par les français.</p>
            <p>
              <strong>28</strong> millions d’utilisateurs quotidien.
            </p>
          </div>
        </div>
        <div className="social-service m-1 p-2">
          <div className="social-bandname inline-flex">
            <div className="social-logo">
              <Image alt="Talk" filename="expertises/insta.png" />
            </div>
            <h2>Instagram</h2>
          </div>
          <div className="social-advantages">
            <p>2ème réseau social le plus utilisé en France.</p>
            <p>
              <strong>17</strong> millions d’utilisateurs.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </Layout>
)

export default Expertises
