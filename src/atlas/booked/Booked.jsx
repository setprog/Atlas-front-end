import "./Booked.css"
import React from 'react'
import  { useEffect, useState } from 'react'

import axios from 'axios';
function Booked() {

    const [product, setProduct] = useState([]);

 

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('https://fakestoreapi.com/users');
    setProduct(result.data);
  };
  return (
    <div className='booked-wrapper'>
    <div className="booked-container">
        <div className="txt">
        <h1> List of Booked Products</h1>
        </div>
     <div className="booked-map">
   
        {
        product.map((product) =>
        {
        
        return(<>
        <div className="booked-card-wrapper">
        <div className="booked-card-container">
            <div className="booked-image">
                <h4>gdf</h4>
            </div>
            <div className="booked-desc">
                <span style={{fontSize:"18px", color:"orange"}}>$<span>{product.email}</span></span>
                <span>{product.username}</span>
               

            </div>
        </div>
    </div>
        
        </>)
          
        } 
     
        )}
      </div>
     </div>
      
    </div>
  )
}

export default Booked