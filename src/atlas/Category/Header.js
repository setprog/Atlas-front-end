
import React from 'react'
import pro from './profile.png'
import { Link } from 'react-router-dom'
export default function Header(){
    return(
        <div  className="header">
            <h1>ATLAS</h1>
            <div className="menu">
              <h6><Link to ="/home">Home</Link></h6>
              <h6><a href =" ">Add to cart</a></h6>
              <h6><a href =" ">Book now</a></h6>
              <h6><a href =" ">About Us</a></h6>
            </div>
              <div className="ssign" id="i">   
              <a href=" ">  <button id="but" ><p>Profile</p> <img src={pro} alt="profile" id="blshet"/></button></a>   
              </div>     
        </div>

    )
}
