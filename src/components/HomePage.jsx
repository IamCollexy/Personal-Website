import React, { Fragment } from 'react'
import Footer from '../Layout/footer';
import Card from '../UI/Card';
import classes from './HomePage.module.css';

const HomePage = () => {
  
    return (
      <Fragment>
      <Card >
        <div className={classes.welcome}>
        <p>Hello visitor my name is</p>
          <h1>COLLINS IKPEME</h1>
          <p>I will love to work with you.</p>
          </div>
      </Card>
<Footer/>
</Fragment>
    )
}

export default HomePage