import React from 'react'
import { useSpring, animated } from 'react-spring'
import { Grid } from "@material-ui/core"


function HomeParallax() {

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 9}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 15}px,${y / 8 - 6}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 5}px,${y / 6 - 0}px,0)`

const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 500 } }))
  
return(
    <Grid container onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} >
      <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
    </Grid>
  )
}

export default HomeParallax