
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
import axios from "axios";
export default function Main(props){
  const [images, setImages] = useState([]);
     const [ result , setresult] = useState([])
     useEffect (()=>{
      fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(data=>setresult(data))
            .then(json=>console.log(json))
     })
     useEffect(() => {
      // Fetch images from the fake API
      const fetchImages = async () => {
        try {
          const response = await axios.get('https://dog.ceo/api/breeds/image/random');
          setImages(response.data);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };
  
      fetchImages();
    }, []);
  
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
     {Array.isArray(images) ? (
        images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.message} alt="dd" />
          </SwiperSlide>
        ))
      ) : (
        <div>Loading images...</div>
      )}
        {/* <SwiperSlide>
          <img  src={props.aa} alt="rr" />
        </SwiperSlide>
        <SwiperSlide>
          <img   src={props.bb} alt="rr" />
        </SwiperSlide>
     
        <SwiperSlide>
          <img src={props.dd} alt="rr" />
        </SwiperSlide>
       
        <SwiperSlide>
          <img   src={props.ff} alt="rr" />
        </SwiperSlide>
        <SwiperSlide>
          <img   src={props.gg} alt="rr" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.hh} alt="rr" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src={props.ii} alt="rr" />
        </SwiperSlide>
        <SwiperSlide>
          <img   src={props.jj} alt="rr" />
        </SwiperSlide>
        <SwiperSlide>
          <img   src={props.kk} alt="rr" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.ll} alt="rr" />
        </SwiperSlide> */}
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
    <div id="form">
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
