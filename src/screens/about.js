import React, { Component } from "react";
import BootstrapNav from '../components/navbar';
import '../css/about.css';
import "animate.css";
import { Row, Col, Modal, Button} from 'react-bootstrap';
import DelayLink from "react-delay-link";
import FadeInSection from '../components/fadeInSection';
import {Link} from 'react-router-dom';


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: true,
      discoverShow: false,
      scholasticShow: false,
      brsShow: false,
      mixrShow: false,
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
          </Row>

      <div>
          <FadeInSection>
            <p className='projectsText'>Projects I've Worked On</p>
          </FadeInSection>
     </div>


          <FadeInSection>
          <Row className='rowCard'>
            <Col md className='projectCard' onClick={()=> this.setState({discoverShow: true})}>

            </Col>
            <Col md className='projectCard2' onClick={()=> this.setState({scholasticShow: true})}>

            </Col>
          </Row>
          </FadeInSection>

          <FadeInSection>
          <Row className='rowCard'>
            <Col md className='projectCard3' onClick={()=> this.setState({brsShow: true})}>

            </Col>
            <Col md className='projectCard4' onClick={()=> this.setState({mixrShow: true})}>

            </Col>
          </Row>
          </FadeInSection>


          

         
        </div>
          {/* discoverModal */}
        <Modal show={this.state.discoverShow} onHide={() => this.setState({ discoverShow: false})} animation={true} centered>
          <Modal.Header closeButton>
            <Modal.Title>Discover Together</Modal.Title>
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
            <Modal.Title>Scholastic Book Reviews</Modal.Title>
          </Modal.Header>
          <Modal.Body>I wrote the front end code for a book reviews site for Scholastic. I developed a series of surveys with dynamically-generated questions based on the type of book, genre, and specific tags.  I did client-side dynamic routing for each book, and handled API requests using Axios.  I then passed the data back to the database upon completion of the surveys. 

          <br/><br/> Languages used: HTML, CSS, JavaScript<br /> Frameworks used: React, Axios, Redux, Postgres</Modal.Body>
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
            <Modal.Title>Bruin Ride Share</Modal.Title>
          </Modal.Header>
          <Modal.Body>I wrote the front end code for a book reviews site for Scholastic. I developed a series of surveys with dynamically-generated questions based on the type of book, genre, and specific tags.  I did client-side dynamic routing for each book, and handled API requests using Axios.  I then passed the data back to the database upon completion of the surveys. 

          <br/><br/> Languages used: HTML, CSS, JavaScript<br /> Frameworks used: NodeJS, Express</Modal.Body>
          <Modal.Footer>
           
            <Link to="/brs" >
                <Button mrAuto variant="secondary" onClick={() => this.setState({ brsShow: false})}>
                Visit Site
              </Button>
            </Link>
            
          </Modal.Footer>
      </Modal>

        {/* mixr Modal */}
        <Modal show={this.state.mixrShow} onHide={() => this.setState({ mixrShow: false})} animation={true} centered>
          <Modal.Header closeButton>
            <Modal.Title>Mixr</Modal.Title>
          </Modal.Header>
          <Modal.Body>I wrote the front end code for a book reviews site for Scholastic. I developed a series of surveys with dynamically-generated questions based on the type of book, genre, and specific tags.  I did client-side dynamic routing for each book, and handled API requests using Axios.  I then passed the data back to the database upon completion of the surveys. 

          <br/><br/> Languages used: HTML, CSS, JavaScript
          <br /> Frameworks used: React Native, Firebase
          </Modal.Body>
          
      </Modal>
       
        
      </>
    );
  }
}

export default About;
