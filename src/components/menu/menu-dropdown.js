import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #111;
  color: #fbfbfb;
  top: 0px;
  right: 0px;
  transform: translate3d(100%, 0, 0);
  transition: 0.4s all cubic-bezier(0.895, 0.03, 0.685, 0.22);
  z-index: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default class MenuDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: this.props.open ? this.props.open : false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open })
    }
  }

  render() {
    const styles = {
      container: {
        position: "absolute",
        top: 0,
        left: 0,
        height: this.state.open ? "100%" : 0,
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "black",
        opacity: 0.95,
        color: "#fafafa",
        transition: "height 0.3s ease",
        zIndex: 2,
      },
      menuList: {
        paddingTop: "3rem",
      },
    }
    return (
      <Container>
        {this.state.open ? <div>{this.props.children}</div> : null}
      </Container>
    )
  }
}
