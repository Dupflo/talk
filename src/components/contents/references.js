import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useSpring, animated } from "react-spring"

const References = () => {
  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 15}px,0)`

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 500 },
  }))
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "clients-mobile.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 280) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <h1 className="title visible-mobile">Ils nous font confiance</h1>
      <div className="pb-parallax visible-desktop"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className="problems"
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      </div>
      <div className="visible-mobile">
        <Img fixed={data.file.childImageSharp.fixed} />
      </div>
    </>
  )
}

export default References
