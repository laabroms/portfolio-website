import React from 'react';
import '../css/resume.css';

export default class Resume extends React.Component {
    componentDidMount() {
        document.title = "Resume - Lucas Abroms";
    }
    render() {
  
  
    return (
        <div className='containImage animate__animated animate__fadeIn'>

            <img src={require('../images/resume.png')} alt={require('../images/resume.png')} className='image' />
        </div>
      
    );
    }
};

