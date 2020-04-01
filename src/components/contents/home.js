import React from "react"
import Logo from "../logo"
import HomeParallax from "../homeparallax"

const Home = () => (
 <section>
    <div id="home" className="grid-3 no-padding">
      <div className="grid-major white px-10">
        <div className="homelogo" style={{ maxWidth: `180px` }}>
          <Logo />
        </div>

        <h1 className="home">
          La solution pour <br/><strong> développer vos <br/>réseaux sociaux !</strong>
        </h1>
        <span className="scroll-icon">
      <span className="scroll-icon__dot"></span>
    </span>
      </div>
      <div className="grid-minor">
        <HomeParallax />
      </div>
    </div>
  </section>
)

export default Home
