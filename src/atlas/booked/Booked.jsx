import "./Booked.css"
import React from 'react'
import  { useEffect, useState } from 'react'
import { CircleLoader } from "react-spinners";
import axios from 'axios';
function Booked() {

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
    
    </div>;}
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