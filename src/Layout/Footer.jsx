import React, { useState, useRef } from 'react'
import classes from '../Layout/Footer.module.css';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaSnapchat} from 'react-icons/fa';
import {FaCommentAlt}   from 'react-icons/fa';

const Footer = (props) => {
  const commentInputRef = useRef()

    const [showContact, setShowContact] = useState(false);
    function showContactHandler () {
        setShowContact(true)
    } 

    // const commentInput = commentInputRef.current.target;

    function submitHandler (event) {
        event.preventDefault();
        setShowContact(false)
        alert("Thank's for commenting.")
        // console.log(commentInput)
    }
  
  return (
   
    <div className={classes.footer}>
        <div className={classes.icons}>
            <div className={classes.pad}>
            <div >
            <FaFacebook color='white'/>
            </div>
            <div >
            <FaInstagram color='white'/>
            </div>
            <div >
            <FaSnapchat color='white'/>
            </div>
            <div >
            <FaTwitter color='white'/>
            </div>
            </div>
            <button onClick={showContactHandler}><FaCommentAlt/> Comment</button>
        </div>
        
  {showContact &&  <form className={classes.form} onSubmit={submitHandler}>
    <label>Leave a Comment</label>
    <textarea ref={commentInputRef}  name="comment" id="comment" placeholder="comment..." required />
    <button className={classes.btn}>Submit</button>
    </form>} 
    </div>
  
  )
}

export default Footer;