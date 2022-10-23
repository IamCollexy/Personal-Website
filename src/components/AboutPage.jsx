import React from 'react'
import classes from './AboutPage.module.css';
import profile from '../assets/95507.jpg';

const AboutPage = () => {
  return (
 
      <div className={classes.profile}>
      <img src={profile} alt="Collexy profile pic" />
      <div className={classes.description}>
      <h2>COLLINS IKPEME</h2>
      <p>Author</p>
      </div>
      <footer>
      <p>CollexydeGreatest (2022)</p>
      </footer>
      </div>
    
  
    
  )
}

export default AboutPage