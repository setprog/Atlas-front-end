import React, { useEffect, useState } from 'react'

import axios from 'axios';
import "./LandLord.css"
function LandLord() {
    const [product, setProduct] = useState([]);

 

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('https://fakestoreapi.com/users');
    setProduct(result.data);
  };
  return (
    <div className='land-wrapper'>
    <div className="land-container">
        <div className="txt">
        <h1>Product List</h1>
        </div>
     <div className="land-map">
   
        {
        product.map((product) =>
        {
        
        return(<>
        <div className="land-card-wrapper">
        <div className="land-card-container">
            <div className="land-card-image">
                <h4>gdf</h4>
            </div>
            <div className="land-card-desc">
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

export default LandLord