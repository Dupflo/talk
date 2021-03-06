import React from "react"
import Container from "../container"

const Problematiques = () => (
  <Container >
    <div className="problems">
  
        <div className="pb">
        <h1 className="title text-center">Vos problématiques ?</h1>
          <div className="vertical-card py-1">
            <div className="pb-img pb-img-1"></div>
            <p>"Je n'ai pas le temps de m'en occuper"</p>
          </div>
          <div className="vertical-card py-1 primary">
            <div className="pb-img pb-img-2"></div>
            <p>"Je ne dispose pas des compétences en interne"</p>
          </div>
          <div className="vertical-card py-1">
            <div className="pb-img pb-img-3"></div>
            <p>"Je souhaite maitriser mon investissement"</p>
          </div>
        </div>
        <div className="pb-bkg"></div>
 
    </div>
  </Container>
)

export default Problematiques
