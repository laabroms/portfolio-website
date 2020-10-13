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
      if (scrolled >= 150) {
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
    return (
      <Navbar
        // bg={this.state.status === "blue" ? "blue" : ""}
        sticky="top"
        expand="md"
        style={{
          backgroundColor: this.state.status === "blue" ? "" : "#089cff",
          color: this.state.status === "blue" ? "black" : "white",
          transition: "0.3s",
        }}
      >
        <Navbar.Brand
          href="/"
          style={{
            color: this.state.status === "blue" ? "white" : "white",
          }}
        >
          LUCAS ABROMS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" style={{ paddingLeft: 20 }}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" style={{ paddingLeft: 20 }}>
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

