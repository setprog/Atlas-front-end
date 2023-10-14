import React, { useEffect, useState } from 'react'
import { CircleLoader } from 'react-spinners';
import axios from 'axios';
import "./LandLord.css"
function LandLord() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('https://fakestoreapi.com/users');
    setProduct(result.data);
    setLoading(false);
  };
  if (loading) {
    return <div className="loading">Loading...<span>
      <CircleLoader color="blue" size={100}/></span>
    
    </div>;
  }
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
                <h4>gg</h4>
            </div>
            <div className="land-card-desc">
                <span style={{fontSize:"18px", color:"orange"}}>$<span>{product.username}</span></span>
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