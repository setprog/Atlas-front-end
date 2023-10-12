
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import st from './stt.png'
export default function Main(props){

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
        <SwiperSlide>
          <img  src={props.aa} alt="rr" />
        </SwiperSlide>
        <SwiperSlide>
          <img   src={props.bb} alt="rr" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img   src={props.cc} alt="rr" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={props.dd} alt="rr" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img  src={props.ee} alt="rr" />
        </SwiperSlide> */}
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
        </SwiperSlide>
      </Swiper>
    </>
    
        </div>
        <div id="nn">
    <h1>Brand : {props.bra}</h1>
    <h2>Model : {props.mod}</h2>
    
    <h3>min booking period : dd/mm/yyyy</h3>
    <h3>max booking period : dd/mm/yyyy</h3>

    <h3>Location : {props.loc}</h3>
    <h3>Price : {props.pri}</h3>
    <div id="form">
    <h2>Please specify Rental Dates</h2> 
    <div id="calender">
   
  <div><h5>Start Date</h5> <input type="date" ></input></div> 
  <div><h5>End Date</h5> <input type="date"></input></div> 
</div>
<button><h3>Rent me</h3></button></div>
        </div>
        </div>
        </div>
    )
}
