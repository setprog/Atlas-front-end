import "./EditP.css"
import React from 'react'
import {LiaDropbox} from "react-icons/lia"
import {TfiMenuAlt} from "react-icons/tfi"
import {LiaClipboardListSolid} from "react-icons/lia"
import { Link } from "react-router-dom"

import {IoPersonCircleSharp} from "react-icons/io5"
import {FiLogOut} from "react-icons/fi"


import {BsTelephone} from "react-icons/bs"
import {BiLogoGmail} from "react-icons/bi"
import {BsInstagram} from "react-icons/bs"
import {AiFillStar} from "react-icons/ai"
import Tnav from "../nav/Tnav"

function EditP() {
   
  return (<>
  
    
  <Tnav/>
  
    <div className="edit-wrraper">
    
    
        <div className="edit-container">
        
            <div className="edit-top">
                <span>We are grateful that you have selected our rental system</span>
                <span>as your preffered platform for managing your properties.</span>

            </div>
            <div className="edit-bottom">

            <div className="edit-right">
                   <div className="personal-info">
                      <div className="person-icon">
                          <IoPersonCircleSharp className="profile-icon"/>
                      </div>
                     <div className="personal-details">
                          <div className="edit-title">
                             <h3>Edit Pofile</h3>
                          </div>
                         <div className="info">
                
                             <span>Dagim Wondimu</span>
                             <span>Joined at 8/4/2023 </span>
                              <span ><AiFillStar className="star"/><span>(0 Review)</span></span>
                         </div>
                     </div>
                     

                    </div>
               
                
                   
                    
                   
                    

                
                             <div className="addpro">
                                <div className="txt">
                                    <span>We invite you to upload
                                    <span>your property for list</span></span>
                                </div>
                               <div><Link to="/addpro">
                                  <button   className="addbtn">Add Product</button></Link>
                                </div>

                   
                            </div>

                
                        <div className="proContact">
                              <span className="contact-txt">Contact</span>
                             <div className="contact-link">
                                  <Link  className="lnk"><span><BsTelephone className="contact-icon"/> <span>+2519563728</span></span></Link>
                                  <Link  className="lnk"><span><BiLogoGmail className="contact-icon"/> <span>someone@gmail.com</span></span></Link>
                                  <Link  className="lnk"><span><BsInstagram className="contact-icon"/> <span>ufsjdf</span></span></Link> 
                             </div>
               
                            </div>

               </div>
           





               <div className="edit-left">
                <h4>Profile
                <hr className="pro-hori"></hr>
                    
                </h4>
               <div className="links">
               <Link  to="/landlord" className="left-lnk"><span><LiaDropbox className="in"/> <span>Landlord property</span></span></Link>
                <hr className="small"></hr>
               <Link to="/rent" className="left-lnk"><span><TfiMenuAlt className="in"/> <span>Rented property</span></span></Link><hr className="small"></hr>
               <Link  to="/booked" className="left-lnk"><span><LiaClipboardListSolid className="in"/> <span>My Booking</span></span></Link><hr className="small"></hr>
               {/* <Link  className="left-lnk"><span><BsBuildingCheck className="in"/> <span>Verification</span></span></Link><hr></hr>
               <Link  className="left-lnk"><span><FiSettings className="in"/> <span>Account Setting</span></span></Link><hr></hr> */}
               <Link to="/" className="left-lnk"><span><FiLogOut className="in"/> <span>Logout</span></span></Link>
               </div>
                
                
               </div>


              
              
            </div>
           
        </div>
       
    </div>
    
    
    {/* <User/> */}
  
  </>
    
  )
}

export default EditP