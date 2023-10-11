import React from 'react'

function Report(pro) {
  return (
    <div className='report'>
    <img id="report-img" src={pro.img} />
    <div class="skill">
       <div class="outer">
           <div class="inner">
           <div id="number">
               {pro.nums}
           </div>    
           </div>
           {/* <CircularProgressbar value={percentage} text={`${percentage}%`} /> */}
       </div> 
     
   </div>
   
  </div>
  )
}

export default Report