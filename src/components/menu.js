import React from "react"
import Menu from "react-burger-menu/lib/menus/stack"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "./logo"

const MenuLogo = styled.div`
  svg {
    height: 200px;
    margin: 0 1rem;
    @media screen and (max-width: 470px) {
      height: 130px;
    }
  }
`

const StyledMenu = styled(Menu)`
  .Navbar__Number a {
    color: #fbfbfb;
    font-size: 1.2rem !important;
    text-decoration: none;
    padding-right: 10px;
  }
`

const StyledLink = styled(Link)`
  :first-child {
    font-size: 1.5rem;
    text-align: center;
  }
  color: #fbfbfb;
  display: flex;
  align-items: center;
  font-weight: 300;
  letter-spacing: 1.5px;
  box-shadow: none;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 400ms ease-in;
  &:hover {
    color: #448ec7;
    transition: color 400ms ease-in;
  }
`

class MenuDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  handleMenuClick(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <StyledMenu
        {...this.props}
        right
        disableAutoFocus
        noOverlay
        width={"100%"}
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleMenuClick(state)}
      >
        <StyledLink
          to="/"
          aria-label="Dark Horse Charters, Back to homepage"
          onClick={() => this.closeMenu()}
        >
          Dark Horse Charters
        </StyledLink>
        <StyledLink to="/about" onClick={() => this.closeMenu()}>
          About
        </StyledLink>
        <StyledLink to="/charters" onClick={() => this.closeMenu()}>
          Charters
        </StyledLink>
        <StyledLink to="/gallery" onClick={() => this.closeMenu()}>
          Gallery
        </StyledLink>
        <StyledLink to="/book-now" onClick={() => this.closeMenu()}>
          Book Now
        </StyledLink>
        <div className="Navbar__Number">
          <a href="tel:1-603-702-1570">(603) 702-1570</a>
        </div>
        <MenuLogo>
          <Logo />
        </MenuLogo>
      </StyledMenu>
    )
  }
}

export default MenuDropdown
