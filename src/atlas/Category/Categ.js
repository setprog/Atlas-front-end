
import React from "react"

export default function Categ(props){
    return(
       <div className="ll"> 
       <a href=" "><div className="categ">
            <h4 id="pro">{props.profile}</h4>
            <img src={props.image} alt="pic"/>
            <h3 id="model">{props.model}</h3>
            <h4 id="price">{props.price}</h4>
            <h5>{props.location}</h5>
        </div></a>
        </div>
    )
}
