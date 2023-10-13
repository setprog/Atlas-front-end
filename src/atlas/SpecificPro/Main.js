
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import st from './stt.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Main(props){
 
     const [ result , setresult] = useState([])
     useEffect (()=>{
      fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(data=>setresult(data))
            .then(json=>console.log(json))
     })
     const [ phot , setphot] = useState([])
     useEffect (()=>{
      fetch('https://dog.ceo/api/breeds/image/random')
      // https://dog.ceo/api/breeds/image/random/3

            .then(res=>res.json())
            .then(data=>setphot(data))
            .then(json=>console.log(json))
     })
    return(
      <div id="maii"> 
       {/* <div id="cust_Rev">
        <h1>Customer Reviews</h1><img src={st} alt="star"/><img src={st} alt="star"/>
        <img src={st} alt="star"/><img src={st} alt="star"/></div>  */}
        <div id="main">
       
        
        <div id="mm">
        <>
          
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
  
  {/* {phot.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image.message} alt="cvjhj" />
        </SwiperSlide>
         ))} */}
         <SwiperSlide >
          <img src={phot.message} alt="cvjhj" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={phot.message} alt="cvjhj" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={phot.message} alt="cvjhj" />
        </SwiperSlide>
      </Swiper>
    </>
    
        </div>
        <div id="nn">
    <h1>Brand : {result.category} </h1>
    <h2>Model : {result.category}</h2>
    
    <h3>min booking period : {result.price}</h3>
    <h3>max booking period : {result.price}</h3>

    <h3>Location : {result.category}</h3>
    <h3>Price : {result.price}</h3>
    <div id="ffform">
    <h2>Please specify Rental Dates</h2> 
    <div id="calender">
   
  <div><h5>Start Date</h5> <input type="date" ></input></div> 
  <div><h5>End Date</h5> <input type="date"></input></div> 
</div>
<Link to="/rentpage">
<button><h3>Rent me</h3></button></Link></div>
        </div>
        </div>
        </div>
    )
}
