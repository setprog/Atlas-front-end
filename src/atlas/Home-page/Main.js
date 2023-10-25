
import React from "react";
import { useState } from "react";
import phh from "./ph.png"
import { FaSearch } from "react-icons/fa";
import search from "./dropdown.png"
import ser from "./search.png"
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
export default function Main(){
   const [value ,setValue]=useState('')
   const [input ,setInput]=useState('')
   const [option, setOption] = useState("")
   const [clicked,setClicked]=useState(false)
   const options =[
      {label: "Choose category"},
      {label: "Vehicle", value: 1},
      {label: "Machinery" , value: 2},
      {label: "Electronics" , value: 3},
      {label: "Clothes" , value: 4},
      {label: "Houses" , value: 5},
      {label: "Event Equipment " , value: 6}
   ]
   const [placeholder, setPlaceholder] = useState("Type to search");
 const [nnn , setNnn]=useState("search anything...")
 const anyth =()=>{
  setNnn({setOption})
 }
 function handleSelect(event){
      setOption(event.target.value)
 }
 
 const handleSearch = () => {
   console.log("value", value);
   console.log("option", option);

 }
 const fetchData = (value) => {
   fetch("https://jsonplaceholder.typicode.com/users")
     .then((response) => response.json())
     .then((json) => {
       const results = json.filter((user) => {
         return value && user.name && user.name.toLowerCase().includes(value);
       });
       setResults(results);
     });
 };
 const handleChange = (value) => {
   setInput(value);
   fetchData(value);
   setClicked(!clicked);
 };
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
    
   // //   window.onclick = function(e){
   // //      if(e.target.id !== "drop-text" && 
   // //         e.target.id !== "span" &&
   // //         e.target.id !== "icon")
   // //          {
   // //              list.classList.remove("show")
   // //              icon.style.rotate= "0deg";
   // //      }
   // //   }
   
   //   for(list of listItems){
   //        list.onclick = function(e){
   //          span.innerText = e.target.innerText;

   //          if(e.target.innerText === "Everything"){
   //              input.placeholder = "search Anything...";
   //          }else{
   //            input.placeholder = "Search in " + e.target.innerText + "...";
       
   //          }

   //           }; 
   //         }

   const[results, setResults] = useState([]);
    return(
        <div className="main">
    <h1 id> The sharing economy is the 
               future of rentals.</h1>
               <div >
       <div >
        <div >
        {/* <span id="span">Category<img id="icon" src={search} alt=" search icon" /></span> */}
        <select onChange={(e) => setOption(e.target.value)} value={option} id="span" onClick={anyth}>
     {options.map(option => (
      <option value={option.label}>{option.label}</option>
     ))}
            </select>
         </div>
        {/* <ul id="list" className="dropdown-list">
        <li className="dropdown-list-item">Machinery</li>
        <li className="dropdown-list-item">Vehicle</li>
        <li className="dropdown-list-item">Electronics</li>
        <li className="dropdown-list-item">Clothes</li>
        <li className="dropdown-list-item">Event Equipment</li>
        <li className="dropdown-list-item">Houses</li>
       </ul> */}
       </div> 
        
        <div className="ssearch-box">
     {/* <input type="text" id="ssearch-input" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search anything"></input>
     <img src={ser} alt="search" onClick={handleSearch}/> */}
      <input
        type="text"
        placeholder={placeholder}
        name="input"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div id="klsls"><FaSearch /></div>
      {/* <SearchBar setResults={setResults}/> */}
     { clicked && <SearchResultsList results={results}/>}
   
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
