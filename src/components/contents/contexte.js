import React from "react"
import Container from "../container"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Contexte = (title) => (
  <Container >
    <h1 className="title text-center">
      Les réseaux sociaux sont indispensables à la visibilité de votre
      entreprise
    </h1>
    <ExpandMoreIcon fontSize="large"/>
    <div className="container-md grid-3">
    
      <div className="card p-3 m-2" >
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
  </Container>
)

export default Contexte
