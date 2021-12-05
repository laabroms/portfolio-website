import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import backgroundVideo from "../../assets/background.mp4";
import styles from './landing.module.css';
import { useNavigate } from 'react-router-dom';



function LandingPage() {
  let navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);



  const handleClick = () => {
    setFadeOut(true)
    setTimeout(() => {
      navigate('/home')
    }, 2200)
  }

    return (
      <div>
        <video autoPlay muted loop className={styles.backgroundVideo}>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className={fadeOut ? styles.videoOverlayFadeOut : styles.videoOverlay}></div>
        <div className={styles.textContainer}>
          <div className={fadeOut ? styles.nameFadeOut : styles.name}>
            Hello, I am <strong>Lucas Abroms</strong>
          </div>
          <div className={fadeOut ? styles.locationFadeOut : styles.location}>
            I am a software developer based in Los Angeles, CA
          </div>
          <div className={fadeOut ? styles.buttonContainerFadeOut : styles.buttonContainer}>
            <div className={styles.button} onClick={handleClick}>
              Enter
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default LandingPage;
