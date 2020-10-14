import React, { Component } from "react";
import BootstrapNav from '../components/navbar';
import '../css/about.css';
import "animate.css";
import {Container, Row, Col} from 'react-bootstrap';
import DelayLink from "react-delay-link";



class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: true
    }
  }

  componentDidMount() {
    document.title = "About - Lucas Abroms";
  }

  handleClick = () => {
    this.setState({
      fadeIn: false,
    }); 
  }

  render() {
    var bodyFade = this.state.fadeIn
      ? "body animate__animated animate__fadeIn"
      : "body animate__animated animate__fadeOut";
    var col1 = this.state.fadeIn
      ? "cellRegion animate__animated animate__fadeInLeft animate__delay-1s"
      : "cellRegion animate__animated animate__fadeOutLeft";
    var col2 = this.state.fadeIn
      ? "cellRegionImage animate__animated animate__fadeInRight animate__delay-1s"
      : "cellRegionImage animate__animated animate__fadeOutRight";
    // var backgroundVideoClass = this.state.fadeIn
    //   ? "backgroundVideo animate__animated animate__fadeIn"
    //   : "backgroundVideo animate__animated animate__fadeOut animate__delay-1s";


    return (
      <>
        <div className={bodyFade}>
          <BootstrapNav />
      


          <Row className='rowAbout'>
            <Col md className={col1}> 
              <p className='subHeading'>about me</p>
              <p className='smallerHeading'>I am a front end web developer based in Los Angeles, CA.</p>
              <p className='infoText'>I love building solutions to complex problems from the ground up.  As a current UCLA student, I have built multiple applications, ranging from a ride hare website, to a book review site. See below for a larger list of my projects!</p>
              <DelayLink delay={2000} to="/resume" clickAction={this.handleClick}>
              <div className='buttonDiv'>
              <button className="buttonResume" >view my resume</button>
              </div>
            </DelayLink>
            </Col>
            <Col md className={col2}>
            <img
              width="300px"
              src={require("../images/portrait.png")}
              alt={require("../images/portrait.png")}
            /></Col>
          </Row>

          <div>
            <p className='projectsText'>Projects I've Worked On</p>
          </div>

         
        </div>
            
       
        
      </>
    );
  }
}

export default About;
