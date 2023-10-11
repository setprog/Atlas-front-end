import React from 'react'
import About from './About'

function Pro() {
  return (
    <div >
           <About
            img={dashboard}
            name="Dashboard"
          />
          <About
            img={subadmin}
            name="Sub Admin"
          />
         
          <About
            img={user}
            name="User"
          />
          <About
            img={owner}
            name="Owner"
          />
          <About
            img={category}
            name="Category"
          />
          <About
            img={specific}
            name="Specification"
          />
        
        
        
    </div>
  )
}

export default Pro