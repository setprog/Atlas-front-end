import React from 'react'
import machine from './machinery.png'
import home from './home.png'
import car from './car.png'
import decore from './decore.png'
import camera from './camera.png'
import clothes from './clothes.png'
import { Link } from 'react-router-dom'
function Category() {
  return (
    <div className='category'>
    <div className="mmain_2">
 
 <div className="ddb">
 
    <div id="dddb">
    
      <Link to="Machinery" > <img id="mab" src={machine} alt="machinery pic" /></Link> 
        <h5>Machinery</h5>
        
    </div>
   
    <div id="dddb">
   <Link to="vechile">
    <img id="vhb" src={car} alt="Vehicle pic" /></Link>
        <h5>Vehicle</h5>
  
        
    </div>
    <div id="dddb">
    <Link to="electronis">
        <img src={camera} alt="Electronics pic" /></Link>
        <h5>Electronics</h5>
        
    </div>
    <div id="ddddb">
   <Link to="clothes">
        <img src={clothes} alt="Clothes pic" /></Link>
        <h5>Clothes</h5>
        
    </div>
    <div id="ddddb">
    <Link to="decore">
        <img id="vhhb" src={decore} alt="Event Equipment" /></Link>
        <h5>Event Equipment</h5>
        
    </div>
    <div id="ddddb">
    <Link to="house">
        <img src={home} id="vhhhb" alt="Houses pic" /></Link>
        <h5>Houses</h5>
        
    </div>
 </div>
        </div>
        </div>

  )
}

export default Category