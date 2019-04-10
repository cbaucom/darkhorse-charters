import React, { Component } from "react"
import styled from "styled-components"

const CalendarWrapper = styled.section`
  padding: 5rem 1rem;
  font-size: 2rem;
`

export default class Calendly extends Component {
  componentDidMount() {
    const head = document.querySelector("head")
    const script = document.createElement("script")
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    )
    head.appendChild(script)
  }

  componentWillUnmount() {
    // need to cleanup widgets code
  }

  render() {
    return (
      <CalendarWrapper>
        <div className="calendly-embed-section">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/crbaucom"
            style={{
              minWidth: 620,
              height: 780,
            }}
          />
        </div>
      </CalendarWrapper>
    )
  }
}
