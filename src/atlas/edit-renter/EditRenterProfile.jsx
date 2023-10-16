import "../editP/EditP.css"
import "./EditRenterProfile.css"
import React, { useEffect, useState } from 'react'
import {LiaDropbox} from "react-icons/lia"
import {TfiMenuAlt} from "react-icons/tfi"
import {BsPersonVideo} from "react-icons/bs"
import {LiaClipboardListSolid} from "react-icons/lia"
import { Link, useParams } from "react-router-dom"
import {IoPersonCircleSharp} from "react-icons/io5"
import {FiLogOut} from "react-icons/fi"
import {BsTelephone} from "react-icons/bs"
import {BiLogoGmail} from "react-icons/bi"
import {BsInstagram} from "react-icons/bs"
import {AiFillStar} from "react-icons/ai"
import Tnav from "../nav/Tnav"
import axios from "axios"
function EditRenterProfile() {
    const [user, setUser] = useState({
        phone: "",
        username: "",
        email: "",
      });
    
      const { id } = useParams();
    
      useEffect(() => {
        loadUser();
      }, []);
    
      const loadUser = async () => {
        const result = await axios.get(`https://fakestoreapi.com/users/${1}`);
        setUser(result.data);
      };
  return (<>
  
    
  <Tnav/>
  
    <div className="Eedit-wrraper">
    
    
        <div className="edit-container">
        
            {/* <div className="edit-top">
                <span>We are grateful that you have selected our rental system</span>
                <span>as your preffered platform for managing your properties.</span>

            </div> */}
            <div className="edit-bottom">

            <div className="edit-right">
            <div className="edit-title">
                             <Link className="edit-link" to={`/editinfo/${1}`}><h3>Edit Profile </h3></Link>
                          </div>
                          <div className="EiconAndName">
                          <div className="person-icon">
                          <BsPersonVideo className="Eprofile-icon"/>
                      </div>
                      <div className="Einfo">
                
                <div className="Eusername"> {user.username}</div>
                <span>Joined at 8/4/2023 </span>
                 <span ><AiFillStar className="star"/><span>(0 Review)</span></span>
            </div>
                          </div>
                   {/* <div className="personal-info">
                   <div className="edit-title">
                             <Link className="edit-link" to={`/editinfo/${1}`}><h3>Edit Profile </h3></Link>
                          </div>
                      <div className="person-icon">
                          <IoPersonCircleSharp className="Eprofile-icon"/>
                      </div>
                     <div className="personal-details">
                          
                          <div className="Einfo">
                
                             <span> {user.username}</span>
                             <span>Joined at 8/4/2023 </span>
                              <span ><AiFillStar className="star"/><span>(0 Review)</span></span>
                         </div>
                     </div>
                    

                    </div> */}
            
{/*                 
                             <div className="addpro">
                                <div className="txt">
                                    <span>We invite you to upload
                                    <span>your property for list</span></span>
                                </div>
                               <div><Link to="/addpro">
                                  <button   className="addproductbtn">Add Product</button></Link>
                                </div>

                   
                            </div> */}
               
                        <div className="EproContact">
                              <span className="contact-txt">Contact</span>
                             <div className="contact-link">
                                  <Link  className="lnk"><span><BsTelephone className="contact-icon"/> <span>{user.phone}</span></span></Link>
                                  <Link  className="lnk"><span><BiLogoGmail className="contact-icon"/> <span>{user.email}</span></span></Link>
                                  <Link  className="lnk"><span><BsInstagram className="contact-icon"/> <span>johnbee</span></span></Link> 
                             </div>
               
                            </div>

               </div>
           

               <div className="profile-edit-left">

                <h4 className="profile-text">Profile
                <hr className="pro-hori"></hr>
                    
                </h4>
               <div className="links">
               {/* <Link  to="/landlord" className="left-lnk"><span><LiaDropbox className="in"/> <span>Landlord property</span></span></Link>
                <hr className="small"></hr> */}
               <Link to="/rent" className="left-lnk"><span><TfiMenuAlt className="in"/> <span>My Rentals</span></span></Link><hr className="small"></hr>
               <Link  to="/booked" className="left-lnk"><span><LiaClipboardListSolid className="in"/> <span>My Booking</span></span></Link><hr className="small"></hr>
               
               <Link to="/signin" className="left-lnk"><span><FiLogOut className="in"/> <span>Logout</span></span></Link>
               </div>
                
                
               </div>  
            </div>
           
        </div>
       
    </div>
    
    
    
  
  </>
    
  )
}

export default EditRenterProfile