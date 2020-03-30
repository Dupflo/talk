import React from "react"
import { Link } from "gatsby"
import { Grid } from "@material-ui/core"
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat"
import Image from "../components/image"
import HomeParallax from "../components/homeparallax"
import SEO from "../components/seo"

const IndexPage = () => (
  <Grid
    container
    spacing={0}
    direction="row"
    alignItems="center"
    justify="center"
    style={{ minHeight: "100vh" }}
  >
    <Grid item xs={12} md={7} m={3} style={{ paddingLeft: "6em" }}>
      <SEO title="Home" />
      <div style={{ maxWidth: `180px` }}>
        <Image alt="Talk" filename="logo_talk.png" />
      </div>

      <h1 className="home">
        La solution pour développer vos réseaux sociaux !
      </h1>

      <Link
        to="/contexte"
        className="btn-primary btn-lg m-1"
        activeClassName="active"
      >
        Découvrir<TrendingFlatIcon></TrendingFlatIcon>
      </Link>
    </Grid>
    <Grid item xs={12} md={5} className="bkg" style={{ minHeight: "100vh" }}>
      <HomeParallax/>
    </Grid>
  </Grid>
)

export default IndexPage
