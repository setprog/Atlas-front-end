import React from 'react'
import './admin-signin.css';



function Admin_signin(){
    
  
    return(
        <div  className="c">
           
<form className='admin'>
<h1 className='s'>Sign in<br/><br/></h1>
<input className='i' type='email' placeholder='Email'  required/>
<input className='i' type='password' placeholder='Password' required/>
<a href='#'>Forgot your password?</a>
<button className='b' type="click">Sigin In</button>
</form>
            
         
        </div>

    )

}
export default Admin_signin;
