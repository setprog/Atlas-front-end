import React from 'react'
import './admin-signin.css';
import { Link } from 'react-router-dom';


function Admin_signin(){
    
  
    return(
        <div  className="container">
           
<form >
<h1>Sign in<br/><br/></h1>
<input type='email' placeholder='Email'  required/>
<input type='password' placeholder='Password' required/>
<a href='#'>Forgot your password?</a>
<Link to="/dash"><button type="click">Sigin In</button></Link>
</form>
            
         
        </div>

    )

}
export default Admin_signin;
