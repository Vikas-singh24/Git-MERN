import React from 'react'
import { MdOutlineLanguage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import './Footer.css'
export default function Footer() {
  return (
    <>
    <div className="footer">
        <div className="foot1">
            <div className="zoma">
                <img id='footLogo' src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="" />
            </div>
            <div className="lang">
                
                <button className='country footBox'>   <img src="" alt="" /> <p> India </p> <IoIosArrowDown /></button>
                <button className='language footBox'><MdOutlineLanguage id='global'/> <p>English </p> <IoIosArrowDown /></button>
            </div>
        </div>

        <div className="foot2">
            <div className="about list">
                <h4>ABOUT ZOMATO</h4>
                <ul>
                    <li>Who we Are</li>
                    <li>Blog</li>
                    <li>Work With Us</li>
                    <li>Investor Relations</li>
                    <li>Report Fraud</li>
                    <li>Press Kit</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="zomaverse list">
                <h4>ZOMAVERSE</h4>
                <ul>
                    <li>Zomato</li>
                    <li>Blinkit</li>
                    <li>District</li>
                    <li>Feeding India</li>
                    <li>HyperPure</li>
                    <li>Zomato Live</li>
                    <li>Zomaland</li>
                    <li>Weather Union</li>
                </ul>
            </div>
            <div className="app list">
                <h4>FOR RESTAURANTS</h4>
               
                <ul>
                    <li>Partner With Us</li>
                    <li>Apps For You</li>
                </ul>
            </div>
            <div className="more list">
                <h4>LEARN MORE</h4>
                <ul>
                    <li>Privacy</li>
                    <li>Security</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className="social list">
                <h4>SOCIAL LINKS</h4>
                <div className='platforms'>
                   
                    <p><FaLinkedinIn /></p>
                    <p><FaInstagram /></p>
                    <p><RiTwitterXLine /></p>
                    <p><FaYoutube /></p>
                    <p><TiSocialFacebook /></p>
                   
                </div>
                <div className="storeLink">
                <div className="socialBox">
                  <div className="apple">  <FaApple /> </div>
                  <div className="footText">
                    <p>Download on the</p>
                    <h3>App Store</h3>
                  </div>
                </div>
                <div className="socialBox">
                  <div className="playStore"> <FaGooglePlay /> </div>
                  <div className="footText">
                    <p>GET IT ON</p>
                    <h3>Google Play</h3>
                  </div>
                </div>
                </div>
            </div>

        </div>

        <div className="foot3">
<br />
        <hr />
        <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © Zomato™ Ltd. All rights reserved.</p>
        </div>
        
    </div>
    
    </>
  )
}
