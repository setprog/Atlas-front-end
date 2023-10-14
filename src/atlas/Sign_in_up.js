import * as Components from './Components';
import React, { useState } from 'react';
function Sign_in_up() {
    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Role, setRole] = useState('');
    const [signIn, toggle] = React.useState(true);

    


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const registrationData = {Name, email, password,Role };
    
        try {
          const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(registrationData),
          });
    
          if (response.ok) {
            // Registration was successful
            console.log('Registration successful');
            // You can redirect the user or display a success message
          } else {
            // Handle registration errors
            console.error('Registration failed');
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };


  const [authenticated, setAuthenticated] = useState(false);
  const onClick = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // Authentication was successful
        setAuthenticated(true);
        console.log('Authentication successful');
      } else {
        // Authentication failed
        setAuthenticated(false);
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

     return(
      <div className="App" >
       
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form onSubmit={handleSubmit}>
                     <Components.Title>Create Account<br/><br/></Components.Title>
                     <Components.Input type='text' placeholder='Name'  value={Name}
        onChange={(e) => setName(e.target.value)} required />
                     
                     <Components.Input type='email' placeholder='Email' value={email}
        onChange={(e) => setEmail(e.target.value)} required/>
                     
                     <Components.Input type='password' placeholder='Password' value={password}
        onChange={(e) => setPassword(e.target.value)} required />
                     <Components.Select type='text' placeholder='Role' value={Role}
        onChange={(e) => setPassword(e.target.value)} required>
                     <Components.Option>Owner</Components.Option> 
                     <Components.Option>Renter</Components.Option> 
                     </Components.Select>
                     <Components.Button type="submit">Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
             {authenticated ? (
        <p>You are authenticated. Show authenticated content here.</p>
      ) : (
                  <Components.Form onSubmit={handleSubmit}>
                      <Components.Title>Sign in<br/><br/></Components.Title>
                      <Components.Input type='email' placeholder='Email' value={email}
            onChange={(e) => setEmail(e.target.value)} required/>
                      <Components.Input type='password' placeholder='Password'  value={password}
            onChange={(e) => setPassword(e.target.value)} required/>
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button type="click">Sigin In</Components.Button>
                  </Components.Form>
                  )}
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                 <Components.Title>ATLAS</Components.Title>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                     Why own it when you can rent it?<br/><br/><br/>
                         To keep connected with us please <br/>login with your personal info<br/><br/><br/><br/>
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>ATLAS</Components.Title>
                       <Components.Paragraph>
                       Why own it when you can rent it?<br/><br/><br/>
                           Enter Your personal details and start <br/>journey with us<br/><br/><br/>
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sigin Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>

                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     
         </div>
     )
}

export default Sign_in_up;