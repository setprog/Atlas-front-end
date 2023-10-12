import React, {useState}from 'react'
import profile from './profile.png'

function Navbar() {
  
    const[openProfile, setOpenProfile]=useState(false)
    return(
        
            <header>
            <div id="navv">
            <h1 >ATLAS</h1>
            
            <button id="button" onClick={()=>setOpenProfile((prev)=>!prev)}><img id="image" src={profile} /> <div id="admin">Administrator</div></button>
            
            </div >
           { openProfile &&(<div className='flex flex-col dropdown'>
                <ul className='list'>
                <li>Profile</li>
                <li>Setting</li>
                <li>Logout</li>
                </ul>

            </div>)}
           
            </header> 
  )
}

export default Navbar