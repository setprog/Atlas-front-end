

import  { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./RentPage.css"
import "../new/add.css"

function RentPage() {
const [product, setProduct] = useState({});
const [additionalDetails, setAdditionalDetails] = useState({
  startDate: '',
  endDate: '',
  location: ''
});

useEffect(() => {
       fetchProductDetails();
     }, []);
   const {id}= useParams();
     const fetchProductDetails = async () => {
       try {
         const response = await axios.get(`https://fakestoreapi.com/products/${id}`); // Replace with your actual API endpoint
         setProduct(response.data);
       } catch (error) {
         console.error('Error fetching product details', error);
      }
    };
const [popConfirmation, setPopConfirmation] = useState(false);


const handleInputChange = (e) => {
  setAdditionalDetails({
    ...additionalDetails,
    [e.target.name]: e.target.value
  });
};

const handleRentClick = () => {
  setPopConfirmation(true);
};
const navigate= useNavigate()
const handleConfirm = async() => {
  try {
    await axios.post('https://fakestoreapi.com/products',
     {
      product,
      ...additionalDetails
    });

 
  } catch (error) {
    console.error('Error posting rent details', error);
  }

  setProduct({});
  setAdditionalDetails({
    startDate: '',
    endDate: '',
    location: ''
  });
  setPopConfirmation(false);
  navigate("/rentpage")
};

const handleCancel = () => {
  setPopConfirmation(false);
};

return (
  <div className='rentpage-wrapper'>
    <h2>Rent Page</h2>
    <div className="rentPageBox">
    <p>Product: {product.title}</p>
    <p>Price: {product.price}</p>
    <p>Category: {product.category}</p>

    <label>
      Start Date:
      <input type="text" name="startDate" value={additionalDetails.startDate} onChange={handleInputChange} />
    </label>

    <label>
      End Date:
      <input type="text" name="endDate" value={additionalDetails.endDate} onChange={handleInputChange} />
    </label>

    <label>
      Location:
      <input type="text" name="location" value={additionalDetails.location} onChange={handleInputChange} />
    </label>
    </div>
    

    <button className='rentMeButton' onClick={handleRentClick}>Rent Me</button>

    {popConfirmation && (
      <div className="getwrapper">
        <div className="getcontainer">
          <h2>Confirmation Page</h2>
          <p>Product: {product.title}</p>
          <p>Price: {product.price}</p>
          <p>Category: {product.category}</p>

          <p>Start Date: {additionalDetails.startDate}</p>
          <p>End Date: {additionalDetails.endDate}</p>
          <p>Location: {additionalDetails.location}</p>
<div className="confirmBtn">
<button className='confirm' onClick={handleConfirm}>Confirm</button>
          <button className='confirm'onClick={handleCancel}>Cancel</button>
</div>
          
        </div>
      </div>
    )}
  </div>
);
    }

export default RentPage;