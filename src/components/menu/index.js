import React from "react"
import Menu from "react-burger-menu/lib/menus/stack"
import { Link } from "gatsby"
import styled from "styled-components"
// import MenuButton from "./menu-button"
import Logo from "../logo"

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
  /* .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  } */
  .bm-cross {
    background: #fbfbfb;
  }
  .bm-burger-bars {
    background: #fbfbfb;
  }
  .bm-menu {
    background: #000;
    padding: 2rem 1rem 0;
    font-size: 1.15rem;
  }
  .bm-item-list {
    color: #fbfbfb;
    padding: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .bm-item {
    display: inline-block;
    text-decoration: none;
    margin-bottom: 10px;
    padding: 0.55rem 0.5rem;
    color: #d1d1d1;
    transition: color 0.2s;
  }
  .bm-item:hover {
    color: #c32a24;
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0);
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
    color: #c32a24;
    transition: color 400ms ease-in;
    /* padding-left: 15px;
    border-left: 5px #fbfbfb solid; */
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
