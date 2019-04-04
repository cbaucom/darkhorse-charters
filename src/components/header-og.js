import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import NavLink from "./nav-link"
import Logo from "./logo"
import "./styles/nav.css"

function classToggle() {
  const navs = document.querySelectorAll(".Navbar__Items")
  navs.forEach(nav => nav.classList.toggle("Navbar__ToggleShow"))

  const navbar = document.querySelector(".Navbar")
  navbar.classList.toggle("pushed")
}

const StyledLink = styled(Link)`
  color: #fbfbfb;
  display: flex;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-weight: 700;
  margin-right: 1rem;
  box-shadow: none;
  text-decoration: none;
  transition: color 400ms ease-in;
  svg {
    height: 60px;
    margin: 0 0.5rem 0 0;
  }
  &:hover {
    color: #c32a24;
    transition: color 400ms ease-in;
  }
  @media only screen and (max-width: 768px) {
    /* flex-direction: column; */
    /* margin: 0 auto; */
  }
`

const LogoText = styled.span`
  text-transform: uppercase;
  /* font-family: ${props => props.theme.fontFamily.heading}; */
  /* font-size: 1.25rem; */
  /* margin-left: 0.75rem; */
  transition: color 400ms ease-in;
  color: #fbfbfb;
  &:hover {
    /* color: ${props => props.theme.colors.primary.base}; */
    transition: color 400ms ease-in;
    color: #c32a24;
  }
  @media (max-width: 470px) {
    display: none;
  }
`

const Header = ({ siteTitle }) => (
  <div className="Navbar">
    <StyledLink to="/" aria-label="Dark Horse Charters, Back to homepage">
      <Logo />
      <LogoText>{siteTitle}</LogoText>
    </StyledLink>

    <div className="Navbar__Link Navbar__Link-toggle" onClick={classToggle}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </div>

    <nav className="Navbar__Items Navbar__Items--right">
      <NavLink to="/about">About</NavLink>
      <NavLink to="/charters">Charters</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/book-now">Book Now</NavLink>
      <div className="Navbar__Number">
        <span>(603) 702-1570</span>
      </div>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
