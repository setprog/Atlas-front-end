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
 
 <div className="dd">
 
    <div id="ddd">
    <a href=" ">
        <img id="ma" src={machine} alt="machinery pic" />
        <h5>Machinery</h5>
        </a>
    </div>
   
    <div id="ddd">
    {/* <Link to="/appcat"> */}
    <img id="vh" src={car} alt="Vehicle pic" />
        <h5>Vehicle</h5>
    {/* </Link> */}
        
    </div>
    <div id="ddd">
    <a href=" ">
        <img src={camera} alt="Electronics pic" />
        <h5>Electronics</h5>
        </a>
    </div>
    <div id="dddd">
    <a href=" ">
        <img src={clothes} alt="Clothes pic" />
        <h5>Clothes</h5>
        </a>
    </div>
    <div id="dddd">
    <a href=" ">
        <img id="vhh" src={decore} alt="Event Equipment" />
        <h5>Event Equipment</h5>
        </a>
    </div>
    <div id="dddd">
    <a href=" ">
        <img src={home} id="vhhh" alt="Houses pic" />
        <h5>Houses</h5>
        </a>
    </div>
 </div>
        </div>
        </div>

  )
}

export default Category