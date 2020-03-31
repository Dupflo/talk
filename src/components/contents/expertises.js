import React from "react"
import Image from "../image"
import Container from "../container"


const Expertises = () => (
  <Container >
    <div id="expertises" className="m-5">
      <h1 className="title">
        Nous intervenons sur les réseaux sociaux les plus consultés par les
        français
      </h1>
      <div className="grid-3 container-lg">
      {/* <div className="square">
        <div className="square-top-left"></div> */}
        <div className="social-service m-1 p-2 ">
        
          <div className="social-bandname inline-flex">
            
              <i className="gmb"></i>
            
            <h2>Google my Business</h2>
          </div>
          <div className="social-advantages">
            <p>Site internet le plus consulté en France et dans le monde.</p>
            <p>
              <strong>94%</strong> des recherches effectuées sur le Web.
            </p>
          </div>
        </div>
        {/* </div> */}
        <div className="social-service m-1 p-2">
          <div className="social-bandname inline-flex">
       
              <i className="fb"></i>
      
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
            
            <i className="insta"></i>
           
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
  </Container>
)

export default Expertises
