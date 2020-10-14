import React, { Component } from "react";
import BootstrapNav from '../components/navbar';
import '../css/about.css';
import "animate.css";


class About extends Component {
  componentDidMount() {
    document.title = "About - Lucas Abroms";
  }
  render() {
    return (
      <>
        <BootstrapNav />

        {/* <div
          style={{ textAlign: "center" }}
          className="animate__animated animate__fadeIn"
        >
        </div> */}

        <div className="centeredImage animate__animated animate__backInLeft">
          <img
            width="180px"
            src={require("../images/portrait.png")}
            alt={require("../images/portrait.png")}
          />
        </div>
        <p className="name animate__animated animate__backInUp">
          Lucas Abroms
        </p>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </>
    );
  }
}

export default About;
