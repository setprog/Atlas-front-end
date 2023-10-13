
import React from "react"
import { Link } from 'react-router-dom';
export default function Categ(props){
    return(
       <div className="lll"> 
       <a href=" "><div className="categ">
            <h4 id="pro">{props.profile}</h4>
           <Link to='/spec'> <img src={props.image} alt="pic"/></Link>
            <h3 id="model">{props.model}</h3>
            <h4 id="price">{props.price}</h4>
            <h5>{props.location}</h5>
        </div></a>
        </div>
    )
}
