import React from 'react'
import classes from './Me.module.css'
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa'; 
import {FaEnvelope} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';


function Me() {
  return (
    <div className={classes.section}>
    <section >
      <article>
        <h2>ME:</h2>
      <p>
        Welcome to my page, I am a web developer with Impressive skills in various languages like HTML, CSS, JAVASCRIPT, TYPESCRIPT & REACT.
        There are many other languages which are worth exploring. Apparently, there are a list of related courses online, Hopefully I will 
        check them out.
        I am looking to work with people who possess strong knowledge of these programming languages. 
      </p>
      </article>
  
      <article>
      <h2>MISSION</h2>
      <div className={classes.quote}>
        <p>
          "I want to create a world with a lot of comfort from which everything that's of necessity is available at taps on your mobile phone
          screen, with a bit of finesse in the act of delivery. Top Notch! 
        </p>
        <p>
          When I am less busy, I love to puff on some good weed, relaxing to quality sounds of music. With my mind free of any rumination." 
        </p>
    
        </div>
        
      </article>

      <article>
        <h2>
    Collexy Programming Center
        </h2>
        <p>
        If building a website that can make life comfortable is your dream, Then allow me to welcome you once again to the CPC, where like-minds
        share ideas.
        </p>
      </article>
      <div>
        <h3>Contact:</h3>
        <p><FaPhone/> Phone: 09033155512</p>
        <p><FaEnvelope /> Email: collinsikpeme@gmail.com</p>
        <p><FaGithub/> Github: https://github.com/IamCollexy </p>
        <p><FaInstagram color='red'/> Instagram: collexydegreatest</p>
        <p><FaFacebook color="blue"/> Facebook: Collexy Degreatest</p>
        <p><FaTwitter color="blue"/> Twitter: @IamCollexy</p>
      </div>
    </section>
    </div>
  )
}

export default Me;