import React from "react"


function Container ({ children, title }) {
  
  return <section id={title}><div className="container">{children}</div></section>
}

export default Container
