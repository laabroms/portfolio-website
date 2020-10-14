import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


export default class BootstrapNav extends React.Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "blue",
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 90) {
        if (this.state.status !== "transparent") {
          this.setState({ status: "transparent" });
        }
      } else {
        if (this.state.status !== "blue") {
          this.setState({ status: "blue" });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
        var colorLogo = this.state.status === 'blue' ? "logoBlack" : "logoWhite";
        var variantColor = this.state.status === 'blue' ? "light" : "dark";

    return (
      <Navbar
        // bg={this.state.status === "blue" ? "blue" : ""}
        variant={variantColor}
        sticky="top"
        expand="md"
        style={{
          backgroundColor: this.state.status === "blue" ? "" : "black",
          color: this.state.status === "blue" ? "black" : "white",
          transition: "0.3s",
        }}
        className="animate__animated animate__fadeInDown"
      >
        <Navbar.Brand
          href="/"
          style={{
            color: this.state.status === "blue" ? "#23265a" : "white",
          }}
        >
          <img
            src={require(`../images/${colorLogo}.png`)}
            alt={require(`../images/${colorLogo}.png`)}
            className='animate__animated animate__rotateInDownLeft'
            style={{ width: 65, transition: "0.3s", }}
          ></img>
          {/* <img
            src={require('../images/orangeLogo.png')}
            alt={require('../images/orangeLogo.png')}
            className='animate__animated animate__rotateInDownLeft'
            style={{ width: 65 }}
          ></img> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* <Nav.Link
              href="/"
              style={{
                paddingLeft: 20,
                color: this.state.status === "blue" ? "#23265a" : "white",
              }}
            >
              Home
            </Nav.Link> */}
            <Nav.Link
              href="/about"
              style={{
                paddingLeft: 20,
                color: this.state.status === "blue" ? "#23265a" : "white",
              }}
            >
              About
            </Nav.Link>
            <NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
              style={{ paddingRight: 50, paddingLeft: 20 }}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

