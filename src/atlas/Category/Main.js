import React from "react";
 export default function Main(props){
    return(
        <div className="wana">
           <input id="search" type="text" placeholder='choose a catagory'   ></input> 
           <h3>Showing {props.quant} results for {props.categ}</h3>
           <div className="inp">
            <input type="text" id="cat" placeholder="sort by"></input>
            <input type="text" id="cat" placeholder="filter by"></input>
           </div>
        </div>
        
    )
 }

