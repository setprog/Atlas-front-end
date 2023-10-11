import React from "react";
import vh from "./vehicle.jpg"
import ho from "./home.jpg"
import eve from "./event_equ.jpg"
import cl from "./clothe.jpg"
import machine from "./ma.jpg"
import ele from "./cam.jpg"

export default function Main2(){
    return(
        <div className="main_2">
            <p>Welcome to our online rental system,where we are dedicated to helping you live to the 
fullest without the burden of ownership.We understand that sometimes you need items 
for a specific event or project,but you don’t want to purchase them outright.That’s where
 we come in.</p>
 <p3>Explore Categories</p3>
 <div className="dd">
 
    <div id="ddd">
    <a href=" ">
        <img id="ma" src={machine} alt="machinery pic" />
        <h5>Machinery</h5>
        </a>
    </div>
   
    <div id="ddd">
    <a href=" ">
    <img id="vh" src={vh} alt="Vehicle pic" />
        <h5>Vehicle</h5>
    </a>
        
    </div>
    <div id="ddd">
    <a href=" ">
        <img src={ele} alt="Electronics pic" />
        <h5>Electronics</h5>
        </a>
    </div>
    <div id="dddd">
    <a href=" ">
        <img src={cl} alt="Clothes pic" />
        <h5>Clothes</h5>
        </a>
    </div>
    <div id="dddd">
    <a href=" ">
        <img id="vhh" src={eve} alt="Event Equipment" />
        <h5>Event Equipment</h5>
        </a>
    </div>
    <div id="dddd">
    <a href=" ">
        <img src={ho} id="vhhh" alt="Houses pic" />
        <h5>Houses</h5>
        </a>
    </div>
 </div>
        </div>
    )
}