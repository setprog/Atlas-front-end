import React from 'react'
import machine from './machinery.png'
import home from './home.png'
import car from './car.png'
import decore from './decore.png'
import camera from './camera.png'
import clothes from './clothes.png'
function Category() {
  return (
    <div className='category'>
    <div className="mmain_2">
 
 <div className="ddb">
 
    <div id="dddb">
    <a href=" ">
        <img id="mab" src={machine} alt="machinery pic" />
        <h5>Machinery</h5>
        </a>
    </div>
   
    <div id="dddb">
    {/* <Link to="/appcat"> */}
    <img id="vhb" src={car} alt="Vehicle pic" />
        <h5>Vehicle</h5>
    {/* </Link> */}
        
    </div>
    <div id="dddb">
    <a href=" ">
        <img src={camera} alt="Electronics pic" />
        <h5>Electronics</h5>
        </a>
    </div>
    <div id="ddddb">
    <a href=" ">
        <img src={clothes} alt="Clothes pic" />
        <h5>Clothes</h5>
        </a>
    </div>
    <div id="ddddb">
    <a href=" ">
        <img id="vhhb" src={decore} alt="Event Equipment" />
        <h5>Event Equipment</h5>
        </a>
    </div>
    <div id="ddddb">
    <a href=" ">
        <img src={home} id="vhhhb" alt="Houses pic" />
        <h5>Houses</h5>
        </a>
    </div>
 </div>
        </div>
        </div>

  )
}

export default Category