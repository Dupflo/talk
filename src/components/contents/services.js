import React from "react"
import SEO from "../seo"
import useToggler from "../useToggler"
import Container from "../container"
import ArrowRightIcon from "@material-ui/icons/ArrowRight"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

function Services(props) {
  const [show1, toggle1] = useToggler(false)
  const [show2, toggle2] = useToggler(false)
  const [show3, toggle3] = useToggler(false)
  const [show4, toggle4] = useToggler(false)
  const [show5, toggle5] = useToggler(false)
  return (
    <Container>
      <SEO title="Page two" />
      <h1 className="title">Notre solution clé en main</h1>
      <div className="round round-desktop container-lg">
        <div className="arg arg1" onMouseEnter={toggle1} onMouseLeave={toggle1}>
          <div
            className="info right"
            style={{ display: show1 ? "block" : "none" }}
          >
            <h2>Création de contenus</h2>
            <p>
              Nous prenons en charge la création des photos prises par des
              photographes professionnels et publiées ensuite sur vos réseaux
              sociaux.
            </p>
          </div>
          <i className={show1 ? "photoY" : "photo"}></i>
          <h3
            className="h3 right"
            style={{ display: show1 ? "none" : "block" }}
          >
            Création de contenus
          </h3>
        </div>
        <div className="arg arg2" onMouseEnter={toggle2} onMouseLeave={toggle2}>
          <i className={show2 ? "bilanY" : "bilan"}></i>
          <h3 className="h3 left" style={{ display: show2 ? "none" : "block" }}>
            Bilan d’efficacité
          </h3>
          <div
            className="info left"
            style={{ display: show2 ? "block" : "none" }}
          >
            <h2>Bilan d’efficacité</h2>
            <p>
              Un mail envoyé chaque mois avec les détails de nos actions et des
              résultats obtenus, afin que vous puissiez mesurer votre retour sur
              investissement.
            </p>
          </div>
        </div>
        <div className="arg arg3" onMouseEnter={toggle3} onMouseLeave={toggle3}>
          <i className={show3 ? "bellY" : "bell"}></i>
          <h3
            className="h3 right"
            style={{ display: show3 ? "none" : "block" }}
          >
            Publications
          </h3>
          <div
            className="info right"
            style={{ display: show3 ? "block" : "none" }}
          >
            <h2>Publications</h2>
            <p>
              Nous nous engageons à réaliser 6 publications mensuelles sur
              Facebook et 6 autres sur Instagram et 3 sur Google My Business, ce
              qui correspond a une présence en ligne tous les 2 jours.
            </p>
          </div>
        </div>
        <div className="arg arg4" onMouseEnter={toggle4} onMouseLeave={toggle4}>
          <h3 className="h3 left" style={{ display: show4 ? "none" : "block" }}>
            Google My Business
          </h3>
          <i className={show4 ? "talkY" : "talk"}></i>
          <div
            className="info left"
            style={{ display: show4 ? "block" : "none" }}
          >
            <h2>Google My Business</h2>
            <p>
              Gestion à 100% de votre fiche My Business avec mises à jour de vos
              informations (produits, services, horaires…), 3 publications
              mensuelles, et surtout réponses aux avis de vos clients,
              indispensable pour améliorer votre référencement naturel.
            </p>
          </div>
        </div>
        <div className="arg arg5" onMouseEnter={toggle5} onMouseLeave={toggle5}>
          <h3
            className="h3 center"
            style={{ display: show5 ? "none" : "block" }}
          >
            Sponsorisation
          </h3>
          <i className={show5 ? "sponsorY" : "sponsor"}></i>
          <div
            className="info left"
            style={{ display: show5 ? "block" : "none" }}
          >
            <h2>Sponsorisation</h2>
            <p>
              Nous créons des campagnes sur mesure de mise en avant de toutes
              vos publications avec 30€ de budget offert tous les mois afin de
              booster la visibilité de votre entreprise.
            </p>
          </div>
        </div>
      </div>

      <div className="round-mobile" style={{ width: "100%" }}>
        <div className="card-services p-3 m-2" onClick={toggle1}>
          <i className={show1 ? "photoY" : "photo"}></i>
          <h2>
            Création de contenus{" "}
            {show1 ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </h2>

          <p style={{ display: show1 ? "block" : "none" }}>
            Nous prenons en charge la création des photos prises par des
            photographes professionnels et publiées ensuite sur vos réseaux
            sociaux.
          </p>
        </div>
        <div className="card-services p-3 m-2" onClick={toggle2}>
          <i className={show2 ? "bellY" : "bell"}></i>
          <h2>
            Publications {show2 ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </h2>

          <p style={{ display: show2 ? "block" : "none" }}>
            Nous nous engageons à réaliser 6 publications mensuelles sur
            Facebook et 6 autres sur Instagram et 3 sur Google My Business, ce
            qui correspond a une présence en ligne tous les 2 jours.
          </p>
        </div>
        <div className="card-services p-3 m-2" onClick={toggle3}>
          <i className={show3 ? "sponsorY" : "sponsor"}></i>
          <h2>
            Sponsorisation {show3 ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </h2>

          <p style={{ display: show3 ? "block" : "none" }}>
            Nous créons des campagnes sur mesure de mise en avant de toutes vos
            publications avec 30€ de budget offert tous les mois afin de booster
            la visibilité de votre entreprise.
          </p>
        </div>
        <div className="card-services p-3 m-2" onClick={toggle4}>
          <i className={show4 ? "talkY" : "talk"}></i>
          <h2>
            Google Business {show4 ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </h2>

          <p style={{ display: show4 ? "block" : "none" }}>
            Gestion à 100% de votre fiche My Business avec mises à jour de vos
            informations (produits, services, horaires…), 3 publications
            mensuelles, et surtout réponses aux avis de vos clients,
            indispensable pour améliorer votre référencement naturel.
          </p>
        </div>
        <div className="card-services p-3 m-2" onClick={toggle5}>
          <i className={show5 ? "bilanY" : "bilan"}></i>
          <h2>
            Bilan d'efficacité{" "}
            {show5 ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </h2>

          <p style={{ display: show5 ? "block" : "none" }}>
            Un mail envoyé chaque mois avec les détails de nos actions et des
            résultats obtenus, afin que vous puissiez mesurer votre retour sur
            investissement
          </p>
        </div>
        
       
        
      </div>
    </Container>
  )
}

export default Services
