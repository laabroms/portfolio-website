import React, { Component } from 'react';
// import BootstrapNav from '../components/navbar';
// import FadeIn from 'react-fade-in'
import sample from "../images/backgroundNew.mp4";
import sample1 from "../images/backgroundNew.webm";
import '../components/backgroundVideo.css';
import 'animate.css';

// import Snowfall from "react-snowfall";
import {Spinner} from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      loaded: false,
    }
  }
  componentDidMount() {

    document.title = "Home - Lucas Abroms";
    this.setState({
      loaded: true
    })
  }
  render() {
    if (this.state.loaded === false) {
      return(
        <Spinner />
      )
    } else  if ( this.state.loaded === true ){
      
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
        <video className="backgroundVideo" loop muted autoPlay playsInline>
          <source src={sample} type="video/mp4" />
          <source src={sample1} type="video/webm" />
        </video>
        <p className="centered animate__animated animate__fadeIn">
          Hello, I am <strong>Lucas Abroms</strong>
        </p>
        <p className="centeredNew animate__animated animate__fadeIn">
          I am a front end software developer
        </p>

        {/* <BootstrapNav /> */}
      </>
    );
  }
}
  
}

export default Home;