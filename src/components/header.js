import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Logo from "./logo"

const StyledHeader = styled.header`
  background: #111111;
  color: #fefefe;
  height: 80px;
  width: 100%;
  padding: 0 0.5rem;
  position: sticky;
  top: 0;
  z-index: 500;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  .Navbar__Number a {
    color: #fefefe;
    letter-spacing: 0px;
    font-size: 0.9rem;
    text-decoration: none;
    padding-right: 5px;
  }
`

const StyledLink = styled(Link)`
  color: #fefefe;
  display: flex;
  align-items: center;
  font-weight: 300;
  box-shadow: none;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 400ms ease-in;
  svg {
    height: 60px;
    margin: 0 0.5rem 0 0;
  }
  &:hover {
    color: #448ec7;
    transition: color 400ms ease-in;
  }
`

const LogoText = styled.span`
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 400ms ease-in;
  color: #fefefe;
  &:hover {
    transition: color 400ms ease-in;
    color: #448ec7;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 440px) {
    display: none;
  }
`

const RightNav = styled.div`
  display: flex;
  justify-content: end;
  align-items: start;
  padding-top: 5px;
  transition: color 400ms ease-in;
  .bm-menu-wrap {
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 1100;
    width: 100%;
    height: 100%;
  }
  a:hover {
    color: #448ec7;
    transition: color 400ms ease-in;
  }
`
const SocialWrapper = styled.div`
  color: #fefefe;
  ul {
    margin: 0;
  }
  li {
    display: inline-block;
    padding: 0.25rem 0.25rem 0 0.5rem;
  }
  li a {
    color: #fefefe;
    text-decoration: none;
    transition: color 400ms ease-in;
  }
  .instagram:hover {
    color: #d6249f;
  }

  .facebook:hover {
    color: #3b5998;
  }
`

const Header = () => (
  <StyledHeader id="nav-wrap">
    <StyledLink to="/" aria-label="Dark Horse Charters, Back to homepage">
      <Logo />
      <LogoText>Dark Horse Charters</LogoText>
    </StyledLink>
    <RightNav>
      <div className="Navbar__Number">
        <a href="tel:1-603-702-1570">(603) 702-1570</a>
      </div>
      <SocialWrapper>
        <ul className="social centered">
          <li>
            <OutboundLink
              className="instagram"
              title="instagram"
              href="https://instagram.com/fvdarkhorse"
              target="blank"
            >
              <FaInstagram />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink
              className="facebook"
              title="facebook"
              href="https://facebook.com/fvdarkhorse"
              target="blank"
            >
              <FaFacebook />
            </OutboundLink>
          </li>
        </ul>
      </SocialWrapper>
    </RightNav>
  </StyledHeader>
)

export default Header
