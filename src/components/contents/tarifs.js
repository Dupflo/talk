import React from "react"
import Container from "../container"

const Tarifs = () => (
  <Container >
    <div id="tarifs" className="grid-2">
      <div className="check-list m-3 p-2">
        <h1 className="title">Une offre <br/> all inclusive</h1>
        <div className="check-item py-2">
          <i className="checked"></i>
          <p>
            <strong>Satisfait ou remboursé :</strong> <br /> si notre solution
            ne vous satisfait pas, nous vous remboursons intégralement les 4
            premiers mois.
          </p>
        </div>
        <div className="check-item py-2">
          <i className="checked"></i>
          <p>
            <strong>Offre de parrainage :</strong> <br />
            recommandez-nous auprès de vos confrères ou autre dirigeant
            d'entreprise et bénéficiez d'un mois de communication offert !
          </p>
        </div>
      </div>
      <div className="bundle p-3 mx-5">
        <span className="engagement">Engagement annuel</span>
        <div className="price my-2">
          <div className="price-nb">400</div>
          <div className="period">
            <strong>€</strong> HT
            <br />
            /mois
          </div>
        </div>
        <div className="payment-notes my-1">
          Ou 500<sup>€ HT </sup>/ mois <br />
          pour un engagement sur 4 mois seulement
        </div>
        <div className="price-check-list p-1 ">
          <div className="price-check-item my-2">
            <i className="light-checked"></i>
            <p>
              Création de 100% des contenus par un photographe professionnel 
            </p>
          </div>
          <div className="price-check-item my-2">
            <i className="light-checked"></i>
            <p>
              15 publications au total par mois, soit une tous les 2 jours en
              moyenne
            </p>
          </div>
          <div className="price-check-item my-2">
            <i className="light-checked"></i>
            <p>
              30€ de budget offert pour sponsoriser toutes vos publications
              Facebook
            </p>
          </div>
          <div className="price-check-item my-2">
            <i className="light-checked"></i>
            <p>
              Un bilan d'efficacité envoyé tous les mois avec les résultats
              obtenus 
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
)

export default Tarifs
