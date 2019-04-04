import React from "react"
import { Link } from "gatsby"

const linkStyles = {
  color: "white",
  display: "inline-block",
  margin: "0 0.5rem",
  padding: "0.5rem",
  textDecoration: "none",
}

const activeStyles = {
  // borderBottom: "2px solid #fbfbfb",
}

const NavLink = ({ children, ...props }) => (
  <Link
    {...props}
    style={linkStyles}
    activeStyle={activeStyles}
    getProps={({ isPartiallyCurrent }) =>
      isPartiallyCurrent
        ? {
            style: { ...linkStyles, ...activeStyles },
          }
        : null
    }
  >
    {children}
  </Link>
)

export default NavLink
