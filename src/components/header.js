import { Link } from "gatsby"
import React from "react"
import styled, { keyframes } from "styled-components"
import NavLink from "./nav-link"
import Logo from "./logo"
import Menu from "./menu"
import MenuButton from "./menu/menu-button"
import MenuDropdown from "./menu/menu-dropdown"
// import "./styles/nav.css"
// import "./styles/inertia.css"

const inertia = keyframes`
	0% {
		transform: translate3d(40px, 0, 0);
	}
	100% {
		transform: translate3d(0, 0, 0);
	}
`

const StyledHeader = styled.header`
  background: #111111;
  color: #fbfbfb;
  width: 100%;
  padding: 0 0.5rem;
  /* margin-bottom: 1rem; */
  /* box-shadow: 0px 3px 8px 0px; */
  position: sticky;
  top: 0;
  z-index: 500;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  .nav {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    right: 0px;
    background: #e74c3c;
    color: #111;
    transform: translate3d(100%, 0, 0);
    transition: 0.4s all cubic-bezier(0.895, 0.03, 0.685, 0.22);
    z-index: 50;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .nav.open {
    transform: translate3d(0, 0, 0);
    transition: 0.4s all cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .nav.open a,
  .Navbar__Number span {
    transform: translate3d(40px, 0, 0);
    animation: ${inertia} 0.6s cubic-bezier(0.68, -0.55, 0.265, 2.55) 0.1s;
    animation-fill-mode: forwards;
  }

  .nav-toggle {
    cursor: pointer;
    position: fixed;
    top: 10px;
    width: 80px;
    text-align: center;
    right: 10px;
    padding: 20px 0;
    text-transform: uppercase;
    font-weight: 800;
    color: #fbfbfb;
    background: #e74c3c;
  }

  .interior {
    text-align: center;
  }
  .interior h2 {
    padding-bottom: 10px;
    text-transform: uppercase;
  }
  /* .interior {
	list-style: none;
	padding: 0;
} */
  .interior a,
  .Navbar__Number {
    color: #fbfbfb;
    text-decoration: none;
    display: block;
    padding: 1.25rem;
    font-size: 2rem;
    transition: 0.3s ease all;
    font-weight: 100;
  }
  .interior a:hover {
    padding-left: 35px;
    border-left: 6px #fbfbfb solid;
  }
`

const StyledLink = styled(Link)`
  color: #fbfbfb;
  display: flex;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-weight: 700;
  box-shadow: none;
  text-decoration: none;
  transition: color 400ms ease-in;
  svg {
    height: 60px;
    margin: 0 0.5rem 0 0;
  }
  &:hover {
    color: #111;
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
class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <StyledLink to="/" aria-label="Dark Horse Charters, Back to homepage">
          <Logo />
          <LogoText>Dark Horse Charters</LogoText>
        </StyledLink>
        <MenuButton
          open={this.state.menuOpen}
          onClick={() => this.handleMenuClick()}
          color="white"
        />
        {/* <div className="nav-toggle" onClick={classToggle}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div> */}

        <nav className="nav">
          <div className="interior">
            {/* <div className="nav-toggle">X</div> */}
            <StyledLink
              to="/"
              aria-label="Dark Horse Charters, Back to homepage"
            >
              Dark Horse Charters
            </StyledLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/charters">Charters</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/book-now">Book Now</NavLink>
            <div className="Navbar__Number">
              <a href="tel:1-603-702-1570">(603) 702-1570</a>
            </div>
          </div>
        </nav>
        {/*
        <MenuDropdown open={this.state.menuOpen}>
          <StyledLink to="/" aria-label="Dark Horse Charters, Back to homepage">
            Dark Horse Charters
          </StyledLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/charters">Charters</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/book-now">Book Now</NavLink>
          <div className="Navbar__Number">
            <a href="tel:1-603-702-1570">(603) 702-1570</a>
          </div>
        </MenuDropdown> */}
      </StyledHeader>
    )
  }
}

export default Header
