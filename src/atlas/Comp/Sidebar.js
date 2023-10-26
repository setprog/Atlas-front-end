import React from 'react'

function Sidebar(prop) {
  return (
    <div className="top-box">
            <div id="top">
             
                <h3>{prop.names}</h3>
                <div className="number"><h2>{prop.num}</h2></div>
            </div>
            <img id="top-image" scr={prop.image} alt=" " />
            <div id='top-footer'>
                <p id="top-footer1">{prop.foot}</p>
                <p>{prop.foot1}</p>
            </div>
        </div>
  )
}

export default Sidebar