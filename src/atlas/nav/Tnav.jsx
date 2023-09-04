import "./Tnav.css"
import React, { useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"
import {HashLink as Link} from "react-router-hash-link"
function Tnav() {
  // const [activeNav, setActiveNav]=useState("#home")
  const [clicked,setClicked]= useState(false)
  const clickHandler=()=>{
    setClicked(!clicked)
    
  }


  return (

    <nav>
    <div className="nav-container">
        <div className="left-nav">
            
            <h3>ATLAS</h3>
        </div>
        <div className="right">
        <div className={clicked? "uncl" :"right-nav"}>
{/* <Link   onClick={()=>setActiveNav("#home")}smooth to={'#home'} className={activeNav === "#home" ? "active":"anch"}>Home</Link>
<Link   onClick={()=>setActiveNav("#main")} smooth to={'#main'}  className={activeNav === "#main" ? "active":"anch"}>Residencies</Link>
<Link   onClick={()=>setActiveNav("#value")} smooth to={'#value'} className={activeNav === "#value" ? "active":"anch"}>Our Value</Link>
<Link    onClick={()=>setActiveNav("#contact")}smooth to={'#contact'}  className={activeNav === "#contact" ? "active":"anch"}>Contact Us</Link>
<Link   onClick={()=>setActiveNav("#get")} smooth to={'#get'} className={activeNav === "#get" ? "active":"anch"} style={{fontSize:"16px",fontWeight:"lighter"}} >Get Started</Link>
<Link><button className="btn">Contact</button></Link> */}
<Link smooth to="/" className="r-link" >Home</Link>
            <Link smooth to="/profile" className="r-link"  >Add to cart</Link>
            <Link smooth to="/add" className="r-link"  >Book now</Link>
            <Link smooth to="/search" className="r-link"  >About us</Link>

</div>
<div className="menu"
onClick={clickHandler} >

{clicked? <AiOutlineClose />:<AiOutlineMenu />}
</div>





        </div>
        
    </div>
</nav>
  )
}

export default Tnav