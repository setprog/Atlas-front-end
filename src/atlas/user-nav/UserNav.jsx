import "./UserNav.css"
import {IoPersonCircleSharp} from "react-icons/io5"

function UserNav() {

 
  return (
    <div className="user-nav">
          <div className="unav-left">
              <h3>ATLAS</h3>

           </div>


          <div className="unav-right">
              <button>
                 <span><IoPersonCircleSharp className="admin-icon"/></span>
                 <span>Sub Admin</span>
               </button>
               

           </div>

      </div>
  )
}

export default UserNav