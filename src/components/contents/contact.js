import React from "react"
import Container from "../container"

const Contact = () => (
  <Container>
    <div className="container-lg grid-2 flex-start">
      <div>
        <h1 className="title">
          Évaluons ensemble vos besoins et vos enjeux <i className="smile"></i>
        </h1>
      </div>
      <div className="card-id mx-3 p-4">
        <i className="profil"></i>
        <h2>Raphaël Leclerc</h2>
        <h3>Fondateur de Talk</h3>
        <div className="label-group">
          <p id="phone" className="label-light">
            06.48.09.42.60
          </p>
          <p id="email" className="label-light">
            <a href="mailto:raph@talk-cm.com"> raph@talk-cm.com</a>
          </p>
        </div>

        <div className="card-list">
          <div className="card-follow">
            <i className="fb"></i>
            <a href="https://www.facebook.com/talkcm/" target="_blank">
              <p>@Talkcm</p>
            </a>
          </div>

          <div className="card-follow">
            <i className="insta"></i>
            <a href="https://www.instagram.com/talkcm/" target="_blank">
              <p>@Talkcm</p>
            </a>
          </div>

          <div className="card-follow">
            <i className="linkedin"></i>
            <a href="https://www.linkedin.com/company/talk-cm/about/" target="_blank">
              <p>@Talkcm</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Container>
)

export default Contact
