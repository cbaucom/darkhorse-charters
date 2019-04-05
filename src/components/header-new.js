import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Logo from "./logo"

const StyledHeader = styled.header`
  background: #111111;
  color: #fbfbfb;
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
    color: #fbfbfb;
    letter-spacing: 0px;
    font-size: 0.9rem;
    text-decoration: none;
    padding-right: 5px;
  }
`

const StyledLink = styled(Link)`
  color: #fbfbfb;
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
  /* font-size: 1.25rem; */
  letter-spacing: 1px;
  /* margin-left: 0.75rem; */
  transition: color 400ms ease-in;
  color: #fbfbfb;
  &:hover {
    transition: color 400ms ease-in;
    color: #c32a24;
  }
  @media (max-width: 768px) {
    /* letter-spacing: initial; */
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
    color: #c32a24;
    transition: color 400ms ease-in;
  }
`
const SocialWrapper = styled.div`
  color: #fbfbfb;
  ul {
    margin: 0;
  }
  li {
    display: inline-block;
    padding: 0.25rem 0.25rem 0 0.5rem;
  }
  li a {
    color: #fbfbfb;
    text-decoration: none;
    transition: color 400ms ease-in;
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
