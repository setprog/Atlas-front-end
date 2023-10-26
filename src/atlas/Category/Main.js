import React from "react";
import { Link } from "react-router-dom";
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
   {label : "CHR" , value :1},
   {label : "Rava" , value :1},
   {label : "Tucson" , value :1},
]
const [clc,setClc] = useState(false);
   const [selectedOption, setSelectedOption] = useState('Choose Category');
 const categoryChoosehandler=()=>{
   setClc(!clc);
 }
 const handleOptionClick = (option) => {
  setSelectedOption(option);
  setClc(false);
};   
    return(
        <div className="wana">
           {/* <input id="search" type="text" placeholder='choose a catagory'   ></input>  */}
           <h3>Showing {props.quant} results for {props.categ}</h3>
           <div id="cat_search"><h3>Choose Category</h3>
           <div className="td">
          <button className="ttd" onClick={categoryChoosehandler}>
            {selectedOption}
          </button>
          {clc && (
            <div className="ddt">
              <Link to="/appcat?category=houses" onClick={() => handleOptionClick('Houses')}>
                Houses
              </Link>
              <Link to="/appcat?category=vehicle" onClick={() => handleOptionClick('Vehicle')}>
                Vehicle
              </Link>
              <Link to="/appcat?category=machinery" onClick={() => handleOptionClick('Machinery')}>
                Machinery
              </Link>
              <Link to="/appcat?category=event equipment" onClick={() => handleOptionClick('Event Equipment')}>
                Event Equipment
              </Link>
              <Link to="/appcat?category=clothes" onClick={() => handleOptionClick('Clothes')}>
                Clothes
              </Link>
              <Link to="/appcat?category=electronics" onClick={() => handleOptionClick('Electronics')}>
                Electronics
              </Link>
            </div>
          )}
        </div>
            <p>{value}</p></div> 
           {/* <div className="inp">
            <select onchange={handleSelect} id="cat" placeholder="sort by" >
               {amarach.map(option => (
                  <option value={option.Sort}>{option.label}</option>
               ))}

            </select>
            <select onchange={handleSelect} id="cat" placeholder="Filter by">
               {Filter.map(option => (
                  <option value={option.Filter}>{option.label}</option>
               ))}

            </select>
           </div> */}
        </div>
        
    )
 }

