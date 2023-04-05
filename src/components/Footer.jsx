import React from 'react'
import '../constants/Footer.css'
function Footer() {
  return (
    <>
        <footer>
    <div class="footer-content">
        <h3>Contact Us</h3>
        <p></p>
        <ul class="socials">
            <li><a href="mailto:ig-nitw@student.nitw.ac.in"><i class="fa fa-envelope"></i></a></li>
            <li><a href="https://linktr.ee/ig.nitw"><i class="fa fa-link"></i></a></li>
            <li><a href="https://www.instagram.com/ig.nitw/"><i class="fa fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/company/ignitw/"><i class="fa fa-linkedin-square"></i></a></li>
        </ul>
    </div>
    <div class="footer-bottom">
    <div class="footer-menu">
                  <ul class="f-menu">
                    <li><a href="index.html#Home">Home</a></li>
                    <li><a href="aboutUs.html#About">About</a></li>
                    <li><a href="index.html#Event">Event</a></li>
                    <li><a href="aboutUs.html#Teams">Teams</a></li>
                  </ul>
                </div>
        <p>copyright &copy; <a href="https://nitw.ac.in/cii/">EA HAM</a>  </p>
                
    </div>
</footer> 
    </>
  )
}

export default Footer