import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import '../constants/NavBar.css';
import Img from '../constants/image/Screenshot_20230120_122714.png';

function NavBar() {
  useEffect(()=>{
    window.addEventListener("scroll", () => {
      const indicatorBar = document.querySelector(".scroll-indicator-bar");
  
      const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollValue = (pageScroll / height) * 100;
  
      indicatorBar.style.width = scrollValue + "%";
    });
  
    const menuBtn = document.querySelector(".nav-menu-btn");
    const closeBtn = document.querySelector(".nav-close-btn");
    const navigation = document.querySelector(".navigation");
  
    menuBtn.addEventListener("click", () => {
      navigation.classList.add("active");
    });
  
    closeBtn.addEventListener("click", () => {
      navigation.classList.remove("active");
    });
  },[])
return (
  <>
  <div className='header'>
  <div class="nav-bar">
      <img src={Img} className="logo" alt=""/>
      <div class="navigation">
        <div class="nav-items">
          <i class="uil uil-times nav-close-btn"></i>
          <Nav>
            <Nav.Link>
                <a><i class="uil uil-home"></i> Home</a>
            </Nav.Link>
          </Nav>
        </div>
      </div>
      <i class="uil uil-apps nav-menu-btn"></i>
    </div>
    <div class="scroll-indicator-container">
      <div class="scroll-indicator-bar"></div>
    </div>
    </div>
    </>
);
}
export default NavBar