import React from 'react';
import '../css/resume.css';

const Resume = () => {
  
  
    return (
        <div className='containImage animate__animated animate__fadeIn'>

        <img src={require('../images/resume.png')} alt={require('../images/resume.png')} className='image' />
        </div>
      
    );
};

export default Resume;