import "./Rented.css"
import React from 'react'
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Rented() {
    const [product, setProduct] = useState([]);

    const {id} = useParams();  
  
    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get('https://fakestoreapi.com/users');
      setProduct(result.data);
    };
  return (
    
    <div className='Rented-wrapper'>
    <div className="Rented-container">
        <div className="txt">
        <h1> Rented Product List</h1>
        </div>
     <div className="Rented-map">
   
        {
        product.map((product) =>
        {
        
        return(<>
        <div className="Rented-card-wrapper">
        <div className="Rented-card-container">
            <div className="Rented-card-image">
                <h4>gdf</h4>
            </div>
            <div className="Rented-card-desc">
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

export default Rented