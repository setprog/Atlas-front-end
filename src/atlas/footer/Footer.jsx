import "./Footer.css"
import React from 'react'

import { Link } from "react-router-dom"
import {BsTelephone} from "react-icons/bs"
import {BiLogoGmail} from "react-icons/bi"
import {BsInstagram} from "react-icons/bs"
import {BiCopyright} from "react-icons/bi"
function Footer() {
  return (
    <div className="footer-wrraper">
        <div className="footer-container">
            <div className="footer-top">
               <div className="footer-left">
                <Link  className="link">About us</Link>
                <Link  className="link">Help center</Link>
                <Link  className="link">Terms of service</Link>
                <Link  className="link">Privacy</Link>

               </div>
               <div className="vertical"></div>
               <div className="footer-right">
               <Link  className="link"><span><BsTelephone className="contact-icon"/> <span>+2519563728</span></span></Link>
               <Link  className="link"><span><BiLogoGmail className="contact-icon"/> <span>someone@gmail.com</span></span></Link>
               <Link  className="link"><span><BsInstagram className="contact-icon"/> <span>ufsjdf</span></span></Link>


               </div>
            </div>
            <div className="footer-bottom">
            <span><BiCopyright className="copyright-icon"/>
            <span>2023 |  <span> RentAnything. |All Rights Reserved</span></span>
            
            </span>
               
            </div>
            
        </div>
    </div>
  )
}

export default Footer