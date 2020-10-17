import React, { Component } from "react";
import '../css/about.css';
import "animate.css";
import { Col, Modal, Button} from 'react-bootstrap';
import DelayLink from "react-delay-link";
import FadeInSection from '../components/fadeInSection';
import {Link} from 'react-router-dom';
import Footer from '../components/footer';
import { Navbar, Nav } from 'react-bootstrap';


class About extends Component {
  constructor(props) {
    super(props);
    this.listener = null;
   
    this.state = {
      status: "blue",
      fadeIn: true,
      discoverShow: false,
      scholasticShow: false,
      brsShow: false,
      mixrShow: false,
    }
  }

  componentDidMount() {
    document.title = "About - Lucas Abroms";
    
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

  handleClick = () => {
    this.setState({
      fadeIn: false,
    }); 
  }

  render() {
    var colorLogo = this.state.status === 'blue' ? "logoBlack" : "logoWhite";
    var variantColor = this.state.status === 'blue' ? "light" : "dark";
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
        <DelayLink delay={2000} to="/" clickAction={this.handleClick}>
                <img
            src={require(`../images/${colorLogo}.png`)}
            alt={require(`../images/${colorLogo}.png`)}
            className='animate__animated animate__rotateInDownLeft'
            style={{ width: 65, transition: "0.3s", }}
          ></img>
        </DelayLink>
          
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
            <Nav.Link
              href="/about"
              
              style={{
                paddingLeft: 20,
                marginRight: 30,
                fontSize: 20,
                fontWeight: 'bold',
                color: this.state.status === "blue" ? "#23265a" : "white",
              }}
            >
              About
            </Nav.Link>
            
            {/* <NavDropdown
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
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
  
      

       
          <div className='row rowAbout'>
            <Col md className={col1}> 
              <p className='subHeading'>about me</p>
              <p className='smallerHeading'>I am a front end web developer based in Los Angeles, CA.</p>
              <p className='infoText'>I love building solutions to complex problems from the ground up.  As a current UCLA student, I have built multiple applications, ranging from a ride share website, to a book review site. See below for a larger list of my projects!</p>
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
          </div>

      <div>
          <FadeInSection>
            <p className='projectsText'>Projects I've Worked On</p>
          </FadeInSection>
     </div>


          <FadeInSection>
          <div className='row' mxAuto>
            <Col md className='projectCard' onClick={()=> this.setState({discoverShow: true})}>

            </Col>
            <Col md className='projectCard2' onClick={()=> this.setState({scholasticShow: true})}>

            </Col>
          </div>
          </FadeInSection>

          <FadeInSection>
          <div className='row' mxAuto>
            <Col md className='projectCard3' onClick={()=> this.setState({brsShow: true})}>

            </Col>
            <Col md className='projectCard4' onClick={()=> this.setState({mixrShow: true})}>

            </Col>
          </div>
          </FadeInSection>

         
          {/* Footer */}
          <Footer />




          

         
        </div>
          {/* discoverModal */}
        <Modal show={this.state.discoverShow} onHide={() => this.setState({ discoverShow: false})} animation={true} centered>
          <Modal.Header closeButton>
            <Modal.Title><strong>Discover Together</strong></Modal.Title>
          </Modal.Header>
          <Modal.Body>I wrote the front end code for Discover Together, a website that uses a custom algorithm which takes you and your friend's favorite songs and create a playlist catered to both your tastes.  I worked directly with the design team to bring their Figma layouts to life.<br/><br/> Languages used: HTML, CSS, JavaScript </Modal.Body>
          <Modal.Footer>
           
            <Link to="/discover-together" >
                <Button mrAuto variant="secondary" onClick={() => this.setState({ discoverShow: false})}>
                Visit Site
              </Button>
            </Link>
            
          </Modal.Footer>
      </Modal>

        {/* scholastic Modal */}
        <Modal show={this.state.scholasticShow} onHide={() => this.setState({ scholasticShow: false})} animation={true} centered>
          <Modal.Header closeButton>
            <Modal.Title><strong>Scholastic Book Reviews</strong></Modal.Title>
          </Modal.Header>
          <Modal.Body>I wrote the front end code for a book reviews site for Scholastic. I developed a series of surveys with dynamically-generated questions based on the type of book, genre, and specific tags.  I did client-side dynamic routing for each book, and handled API requests using Axios.  I then passed the data back to the database upon completion of the surveys. 

          <br/><br/> Languages used: HTML, CSS, JavaScript<br /> Frameworks used: React, Axios, Redux, Flask, Postgres</Modal.Body>
          <Modal.Footer>
           
            <Link to="/scholastic" >
                <Button mrAuto variant="secondary" onClick={() => this.setState({ scholasticShow: false})}>
                Visit Site
              </Button>
            </Link>
            
          </Modal.Footer>
      </Modal>

        {/* brs Modal */}
        <Modal show={this.state.brsShow} onHide={() => this.setState({ brsShow: false})} animation={true} centered>
          <Modal.Header closeButton>
            <Modal.Title><strong>Bruin Ride Share</strong></Modal.Title>
          </Modal.Header>
          <Modal.Body>During the beginning of my junior year, my friend and I created Bruin Ride Share, a website that allows students to easily find cheap rides throughout California.  After realizing there was no efficient way to find rides to and from Westwood, we made a site that allows users to sort rides by origin, destination, date, and price.  We culminated hundreds of users and helped make an environmental impact by reducing the carbon footprint from driving. 

          <br/><br/> Languages used: HTML, CSS, JavaScript<br /> Frameworks used: NodeJS, Express</Modal.Body>
          <Modal.Footer>
           
            <Link to="/brs" >
                <Button variant="secondary" onClick={() => this.setState({ brsShow: false})}>
                Visit Site
              </Button>
            </Link>
            
          </Modal.Footer>
      </Modal>

        {/* mixr Modal */}
        <Modal show={this.state.mixrShow} onHide={() => this.setState({ mixrShow: false})} animation={true} centered>
          <Modal.Header closeButton>
            <Modal.Title><strong>Mixr</strong></Modal.Title>
          </Modal.Header>
          <Modal.Body>I wrote a social app called Mixr.  I used the framework React Native and Firebase for the backend.  I used Firebase authentication for handling user login, storage for saving images, and database for saving user information.  

          <br/><br/> Languages used: HTML, CSS, JavaScript
          <br /> Frameworks used: React Native, Firebase
          </Modal.Body>
          
      </Modal>
       
        
      </>
    );
  }
}

export default About;
