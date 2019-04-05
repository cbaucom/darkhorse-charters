import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import { OutboundLink } from "gatsby-plugin-google-analytics"
const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 0.5rem 1rem;
  font-size: 1.3em;
  color: #fbfbfb;
  background: #111111;
  p {
    font-size: 0.7em;
    margin-bottom: 0.2rem;
    color: #fbfbfb;
  }

  ul.social,
  ul.footer-nav {
    margin-bottom: 0.2rem;
    font-size: 1.25rem;
    margin-left: 0;
  }

  .social li,
  .footer-nav li {
    display: inline-block;
    padding: 0.1rem 0.5rem 0 0.5rem;
  }

  .footer-nav li a,
  .social li a {
    color: #fbfbfb;
    text-decoration: none;
    line-height: 1.85;
    padding: 5px 2px;
    transition: color 400ms ease-in;
  }
  .footer-nav a:hover {
    color: #448ec7;
    /* border-bottom: 1px solid; */
    transition: color 400ms ease-in;
  }

  .email:hover {
    color: #448ec7;
  }

  .instagram:hover {
    color: #d6249f;
  }

  .facebook:hover {
    color: #3b5998;
  }

  @media (max-width: 767px) {
    footer {
      padding: 0px;
      font-size: 1.2em;
    }
    footer p {
      margin: 0;
    }
    ul.social {
      margin-bottom: 0;
    }
    .footer-nav a {
      font-size: 1em;
    }
  }
`

const FooterMiddle = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  h5 {
    margin: 0.5rem auto 0.5rem;
  }
  @media (min-width: 768px) {
    h5 {
      font-size: 1.25rem;
    }
  }
`
const SocialWrapper = styled.div`
  padding: 0.5rem;
`

const Payments = styled.section`
  padding: 0.5rem;
  color: #fbfbfb;
  span {
    font-size: 0.7rem;
    margin: 0 8px 14px 0;
    padding: 6px 8px;
    border: 1px #eee solid;
    border-radius: 1px;
  }
`

export default () => {
  return (
    <FooterWrapper>
      <div className="row">
        <div className="">
          <ul className="footer-nav centered">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/charters"}>Charters</Link>
            </li>
            <li>
              <Link to={"/gallery"}>Gallery</Link>
            </li>
            <li>
              <Link to={"/book-now"}>Book Now</Link>
            </li>
          </ul>
          <FooterMiddle>
            <SocialWrapper>
              <ul className="social centered">
                <h5>Follow us!</h5>
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
            <Payments>
              <h5>Payments Accepted</h5>
              <div className="payment-cards">
                <span>Cash</span>
                <span>Card</span>
              </div>
            </Payments>
          </FooterMiddle>
          <p className="centered">
            &copy; {new Date().getFullYear()} Dark Horse Charters.
          </p>
        </div>
      </div>
    </FooterWrapper>
  )
}
