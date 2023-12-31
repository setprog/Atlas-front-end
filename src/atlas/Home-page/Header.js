import React,{useState}  from 'react'
import { Link } from 'react-router-dom';
export default function Header(){
  const[popup,setPop]=useState(false);
    const handleClickOpen=()=>{
        setPop(!popup);

    }
    const closePopup=()=>{
         setPop(false);
    }
    return(
        <div  className="header">
            <h1 id="drgt">ATLAS</h1>
            <div className="arau">
              <h6><a href =" ">Home</a></h6>
              <h6><Link to ="/form">Add to cart</Link></h6>
              <h6><a href =" ">Book now</a></h6>
              <h6><a href =" ">About Us</a></h6>
            </div>
              <div className="home_sign">
               <Link to="/signin"> <button id="home_i" onClick={handleClickOpen}>Sign in</button></Link>
               <Link to="/adminsignin"> <button id="ii">Admin</button></Link>
                <div>
        {popup?
            <div className='mainnnn'>
            <div className='popup'>
            <div className='popup-header'>
                
                <h1 onClick={closePopup}>X</h1>
            </div>
                <div className='confirm'>
                    <p>Catagory- Car</p>
                    <p>Brand- BMW</p>
                    <p>Date- 20/12/2023</p>
                    <input type="submit" value='confirm'/>
                </div>
                

            </div>

            </div>:""}
        </div>
              </div>
              
        </div>

    )
}