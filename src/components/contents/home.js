import React from "react"
import { Link } from "gatsby"
import Container from "../container"
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat"
import Image from "../image"
import HomeParallax from "../homeparallax"

const Home = () => (
 <section>
    <div id="home" className="grid-3 no-padding">
      <div className="grid-major white px-10">
        <div style={{ maxWidth: `180px` }}>
          <Image alt="Talk" filename="logo_talk.png" />
        </div>

        <h1 className="home">
          La solution pour <br/><strong> développer vos réseaux sociaux !</strong>
        </h1>

        <Link
          to="#context"
          className="btn-primary btn-lg m-1"
          activeClassName="active"
        >
          Découvrir<TrendingFlatIcon></TrendingFlatIcon>
        </Link>
      </div>
      <div className="grid-minor">
        <HomeParallax />
      </div>
    </div>
  </section>
)

export default Home
