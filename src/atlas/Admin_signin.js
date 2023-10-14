import React from 'react'
import './admin-signin.css';
import { Link } from 'react-router-dom';


function Admin_signin(){
    
  
    return(
        <div  className="c">
           
<form className='adma'>
<h1 className='s'>Sign in<br/><br/></h1>
<input className='i' type='email' placeholder='Email'  required/>
<input className='i' type='password' placeholder='Password' required/>
<a className='a' href='#'>Forgot your password?</a>
<Link to="/dash"><button className='b' type="click">Sigin In</button></Link>
</form>
            
         
        </div>

    )

}
export default Admin_signin;
