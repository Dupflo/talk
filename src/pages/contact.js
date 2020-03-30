import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Page two" />
    <div class="container container-md">
      <div class="grid-2 flex-start">
        <div>
          <h1 className="title">
              Évaluons ensemble vos besoins et vos enjeux <i class="smile"></i>
            </h1>
            <div className="card-list">
           
           
            <div className="card-follow">
              <i className="fb"></i>
              <p>@Talkcm</p>
            </div>
            <div className="card-follow">
              <i className="insta"></i>
              <p>@Talkcm</p>
            </div>
            </div>
          </div>
          <div className="card-id mx-3 p-2">
            <i className="profil"></i>
            <h2>Raphaël Leclerc</h2>
            <h3>Fondateur de Talk</h3>
            <div className="label-group">
              <p id="phone" class="label-light">
                06.48.09.42.60
              </p>
              <p id="email" class="label-light">
                raph@talk-cm.com
              </p>
            </div>
          </div>
        </div>
      </div>

  </Layout>
)

export default Contact
