import React from 'react';
import '../App.css'

export default function Footer() {
  return (
    
    
    <div>
        <footer id="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://twitter.com/subithou" target="_blank" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100005029694788" target="_blank"  className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/subith_ou_photography/" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="https://www.behance.net/subithou" target="_blank" className="google-plus"><i className='bx bxl-behance'></i></a>
          <a href="https://www.linkedin.com/in/subith-o-u-9b003716b/" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
        <div className="copyright" style={{float:"center"}}>
          &copy; Copyright 2023 <strong><span>subith o u photography</span></strong>. All Rights Reserved.
        </div>
      </div>
    </footer> 
  
    <a href="/#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    </div>

    
  )
}

