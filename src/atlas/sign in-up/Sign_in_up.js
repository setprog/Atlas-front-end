import React from "react";
import * as Components from './Components';
function Sign_in_up() {

    const [signIn, toggle] = React.useState(true);
     return(
      <div className="App">
       
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Create Account<br/><br/></Components.Title>
                     <Components.Input type='text' placeholder='Name' required />
                     
                     <Components.Input type='email' placeholder='Email' required/>
                     
                     <Components.Input type='password' placeholder='Password' required />
                     <Components.Select type='text'required>
                     <Components.Option>Owner</Components.Option> 
                     <Components.Option>Renter</Components.Option> 
                     </Components.Select>
                    
                     <Components.Button>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Sign in<br/><br/></Components.Title>
                      <Components.Input type='email' placeholder='Email' required/>
                      <Components.Input type='password' placeholder='Password' required/>
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button>Sigin In</Components.Button>
                  </Components.Form>
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