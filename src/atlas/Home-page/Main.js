
import React from "react";
import phh from "./ph.png"
import search from "./dropdown.png"
import ser from "./search.png"
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
export default function Main(){
   //   let dropdownBtn = document.getElementById("drop-text");
   //   let list = document.getElementById("list");
   //   let input = document.getElementById("search-input");
   //   let listItems = document.querySelectorAll(".dropdown-list-item");
   //   let icon = document.getElementById("icon"); 
   //   let span = document.getElementById("span");
   //  const item = [ 'Machinery' , 'Vehicle', 'Electronics' , 'Clothes' , 'Event Equepment' , 'Houses' ]
      
   //   dropdownBtn.onclick = function() { 
   //    //  if(list.classList.contains("show")){
   //          list.classList.toggle("show");
   //       icon.style.rotate= "0deg";
   //    //   }
   //    //    else {
   //    //       icon.style.rotate= "-180deg";
   //    //   }
   //    //     list.classList.toggle("show")
   //  };
    
   //   window.onclick = function(e){
   //      if(e.target.id !== "drop-text" && 
   //         e.target.id !== "span" &&
   //         e.target.id !== "icon")
   //          {
   //              list.classList.remove("show")
   //              icon.style.rotate= "0deg";
   //      }
   //   }
   
   //   // for(list of listItems){
   //        list.onclick = function(e){
   //          span.innerText = e.target.innerText;

   //          if(e.target.innerText === "Everything"){
   //              input.placeholder = "search Anything...";
   //          }else{
   //            input.placeholder = "Search in " + e.target.innerText + "...";
       
   //          }

   //           }; 
   //         //}


    return(
        <div className="main">
    <h1 id> The sharing economy is the 
               future of rentals.</h1>
               <div className="ssearch-bar" >
       <div className="ddropdown">
        <div id="drop-text" className="ddropdown-text">
        <span id="span">Category<img id="icon" src={search} alt=" search icon" /></span>
        </div>
        <ul id="list" className="dropdown-list">
        <li className="dropdown-list-item">Machinery</li>
        <li className="dropdown-list-item">Vehicle</li>
        <li className="dropdown-list-item">Electronics</li>
        <li className="dropdown-list-item">Clothes</li>
        <li className="dropdown-list-item">Event Equipment</li>
        <li className="dropdown-list-item">Houses</li>
       </ul>
       </div>
        
        <div className="ssearch-box">
     <input type="text" id="ssearch-input" placeholder="search anything..."></input>
     <img src={ser} alt="search"></img>
        </div>
               </div>
           <div id="tt">
           <h1> Get What you need , When you need it, with our rental system.</h1>
            <img id="phh" src={phh} alt="photo" />
           </div> 
        <hr />
      </div> 
      )      
}
