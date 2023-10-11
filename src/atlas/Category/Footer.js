
import React from "react";
import insta from "./instagram.png";
import call from "./call.png";
import mail from "./gmail.png"

export default function Footer(){
    return(
        <div>
        <div className="footer">
            <div id="gg">
                <a href=" ">About us</a>
                <a href=" ">Help Center</a>
                <a href=" ">Terms of Service</a>
            </div>
            <div className="vertical"></div>
            <div className="contact">
               <h6>Contact US</h6>
               <div id="contact">
               <div id="con"><img id="call" src={call} alt=" " / ><h5>+251946428560</h5></div>
               
               <div id="con"><img src={insta} alt=" "/><h5>dagimwondim</h5></div>
               <div id="con"><img src={mail} alt=" " /><h5>dagimwondim25@gmail.com</h5></div>
               </div>
               
            </div> 
            </div>
            <p className="copyright">@2023 |ATLAS.| All Rights Reserved</p>
        
        </div>
    )
}
