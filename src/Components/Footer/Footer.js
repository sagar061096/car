import React from 'react'
import './index.css'

function Footer() {
  return (
    <>
     <footer>
                <div className="container">
                    <div className="sec aboutus">
                        <h2>About Us</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quasi, deleniti quisquam maxime quos exercitationem. Minima voluptates, ex exercitationem amet qui ipsa repudiandae dignissimos neque cum ipsam itaque perferendis repellendus.</p>
                        <ul className="sci">
                            <li><a href="/"><i class="fab fa-facebook"></i></a></li>
                            <li><a href="/"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="/"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="/"><i class="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>


                    
                     <div className="">
                        <div className="sec quickLinks">
                        <h2>Quick Links</h2>
                             <ul>
                             <li><p>About</p></li>
                             <li><p>FAQ</p></li>
                             <li><p>Privacy Policy</p></li>
                             <li><p>Help</p></li>
                             <li><p>Terms & Conditions</p></li>
                             </ul>
                        </div>

                       </div>




                    

                    <div className="sec contact">
                         <h2>Contact Info</h2>
                         <ul class="info">
                             <li>
                                 <span><i class="fas fa-map-marker-alt"></i></span>
                                 <span>647 Linda Street<br/>
                                 Phoenixville, PA 19460, <br/>USA</span>
                             </li>
                             <li>
                                 <span><i class="fas fa-phone-alt"></i></span>
                                 <p><h6>1800 203 5066</h6>
                                    <h6>1800 203 5066</h6></p>
                             </li>
                             <li>
                                 <span><i class="fas fa-envelope"></i></span>
                                  <p><h6>Knowmore@gmail.com</h6></p>
                             </li>
                         </ul>
                    </div>
                </div>
                <div className="copyrightText">
                <p>Copyright (C) 2021 Car Plaza. All Rights Reserved.</p>
            </div>
            </footer>
           
    </>
  )
}

export default Footer