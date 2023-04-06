import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
        <footer>
    <div class="footer-content">
        <h3>Contact Us</h3>
        <p></p>
        <ul class="socials">
            <li><a href="https://www.instagram.com/the_ea_ham_nitw/"><i class="fa fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/company/ea-ham-club-nitw/"><i class="fa fa-linkedin-square"></i></a></li>
        </ul>
    </div>
    <div class="footer-bottom">
    <div class="footer-menu">
                  <ul class="f-menu">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/events">Event</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/team">Team</Link></li>
                  </ul>
                </div>
        <p>copyright &copy; <a href="#">EA HAM</a>  </p>
                
    </div>
</footer> 
    </>
  )
}

export default Footer