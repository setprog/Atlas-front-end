import React from 'react'
import './admin-signin.css';



function Admin_signin(){
    
  
    return(
        <div  className="container">
           
<form >
<h1>Sign in<br/><br/></h1>
<input type='email' placeholder='Email'  required/>
<input type='password' placeholder='Password' required/>
<a href='#'>Forgot your password?</a>
<button type="click">Sigin In</button>
</form>
            
         
        </div>

    )

}
export default Admin_signin;
