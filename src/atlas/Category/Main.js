import React from "react";
import { useState } from "react";
 export default function Main(props){
   const [value ,setValue]=useState('')
      const options =[
         {label: "Choose category"},
         {label: "Vehicle", value: 1},
         {label: "Machinery" , value: 2},
         {label: "Electronics" , value: 3},
         {label: "Clothes" , value: 4},
         {label: "Houses" , value: 5},
         {label: "Event Equipment " , value: 6}
      ] 
    function handleSelect(event){
         setValue(event.target.value)
    }
const [Sort , setSort]=useState('')
const amarach =[
   {label : "sort by"},
   {label : "price" , value :1},
]
const [Filt , setFilter]=useState('')
const Filter =[
   {label : "Filter by"},
   {label : "Brand" , value :1},
]
    
    return(
        <div className="wana">
           {/* <input id="search" type="text" placeholder='choose a catagory'   ></input>  */}
           <h3>Showing {props.quant} results for {props.categ}</h3>
           <div id="cat_search"><h3>Choose Category</h3>
            <select onchange={handleSelect} id="categ_search">
     {options.map(option => (
      <option value={option.value}>{option.label}</option>
     ))}
            </select>
            <p>{value}</p></div> 
           <div className="inp">
            {/* <input type="text" id="cat" placeholder="sort by"></input>
            <input type="text" id="cat" placeholder="filter by"></input> */}
           {/* <h3 id="sort">Sort by</h3> */}
            <select onchange={handleSelect} id="cat" placeholder="sort by">
               {amarach.map(option => (
                  <option value={option.Sort}>{option.label}</option>
               ))}

            </select>
            <select onchange={handleSelect} id="cat" placeholder="Filter by">
               {Filter.map(option => (
                  <option value={option.Filter}>{option.label}</option>
               ))}

            </select>
           </div>
        </div>
        
    )
 }

