import React, { Component } from "react";
import BootstrapNav from '../components/navbar';

class About extends Component {
  componentDidMount() {
    document.title = "About - Lucas Abroms";
  }
  render() {
    return (
      <>
      <BootstrapNav />
    <div style={{ textAlign: "center" }}>About</div>;
    </>
    )
  }
}

export default About;
