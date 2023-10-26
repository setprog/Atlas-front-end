import React from "react";
import vh from "./vehicle.jpg"
import ho from "./home.jpg"
import eve from "./event_equ.jpg"
import cl from "./clothe.jpg"
import machine from "./ma.jpg"
import ele from "./cam.jpg"
import { Link } from "react-router-dom";

export default function Main2(){
    return(
        <div className="mmain_2">
            <p>Welcome to our online rental system,where we are dedicated to helping you live to the 
fullest without the burden of ownership.We understand that sometimes you need items 
for a specific event or project,but you don’t want to purchase them outright.That’s where
 we come in.</p>
 <p3>Explore Categories</p3>
 <div className="dd">
 
    <div id="ddd">
    <Link to="/appcat?category=machinery">
    <img id="vh" src={machine} alt="Machines pic" />
        <h5>Machine</h5>
    </Link>
    </div>
   
    <div id="ddd">
    <Link to="/appcat?category=vehicle">
    <img id="vh" src={vh} alt="Vehicle pic" />
        <h5>Vehicle</h5>
    </Link>
        
    </div>
    <div id="ddd">
    <Link to="/appcat?category=electronics">
    <img id="vh" src={ele} alt="Electronics pic" />
        <h5>Electronics</h5>
    </Link>
    </div>
    <div id="dddd">
    <Link to="/appcat?category=clothes">
    <img id="vh" src={cl} alt="clothes pic" />
        <h5>Clothe</h5>
    </Link>
    </div>
    <div id="dddd">
    <Link to="/appcat?category=event equipment">
    <img id="vh" src={eve} alt="event equipment pic" />
        <h5>Event Equipment</h5>
    </Link>
    </div>
    <div id="dddd">
    <Link to="/appcat?category=houses">
    <img id="vh" src={ho} alt="Houses pic" />
        <h5>House</h5>
    </Link>
    </div>
 </div>
        </div>
    )
}