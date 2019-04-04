import React from "react"

const CardHeader = props => {
  const { image } = props
  var style = {
    backgroundImage: "url(" + image + ")",
    height: "200px",
    padding: "15px",
    width: "100%",
    backgroundSize: "cover",
  }

  return <header style={style} id={image} />
}

export default CardHeader
