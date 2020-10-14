import React, { Component } from 'react';
// import BootstrapNav from '../components/navbar';
// import FadeIn from 'react-fade-in'
import sample from "../images/backgroundNew.mp4";
import sample1 from "../images/backgroundNew.webm";
import '../components/backgroundVideo.css';
import 'animate.css';
import DelayLink from "react-delay-link";



// import Snowfall from "react-snowfall";
import {Spinner} from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      fadeIn: true
    };
  }
  componentDidMount() {
    document.title = "Home - Lucas Abroms";
    this.setState({
      loaded: true,
    });
  }

  handleClick = () => {
    this.setState({
      fadeIn: false,
    }); 
  }
  
  render() {

    var classNameFirst = this.state.fadeIn
      ? "centered animate__animated animate__fadeIn animate__delay-2s"
      : "centered animate__animated animate__fadeOut";
    var classNameSecond = this.state.fadeIn
      ? "centeredNew animate__animated animate__fadeIn animate__delay-3s"
      : "centeredNew animate__animated animate__fadeOut";
    var classNameThird = this.state.fadeIn
      ? "centeredButton animate__animated animate__fadeIn animate__delay-4s"
      : "centeredButton animate__animated animate__fadeOut";
    var backgroundVideoClass = this.state.fadeIn
      ? "backgroundVideo"
      : "backgroundVideo animate__animated animate__fadeOut animate__delay-1s";


    if (this.state.loaded === false) {
      return <Spinner />;
    } else if (this.state.loaded === true) {
      return (
        <>
          {/* <Snowfall
          className="snow"
          // Changes the snowflake color
          color="white"
          // Applied to the canvas element
          // style={{ background: "black" }}
          // Controls the number of snowflakes that are created (default 150)
          snowflakeCount={150}
        /> */}
          <video
            className={backgroundVideoClass}
            preload="yes"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src={sample} type="video/mp4" />
            <source src={sample1} type="video/webm" />
          </video>
          <p className={classNameFirst}>
            Hello, I am <strong>Lucas Abroms</strong>
          </p>
          <p className={classNameSecond}>
            I am a front end software developer
          </p>
          <div className={classNameThird}>
            <DelayLink delay={2000} to="/about" clickAction={this.handleClick}>
              <button className="button">Enter</button>
            </DelayLink>
          </div>

          {/* <BootstrapNav /> */}
        </>
      );
    }
  }
}

export default Home;