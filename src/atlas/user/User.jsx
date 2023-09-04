
import "./User.css"
import React, { useState,useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";


function User() {
  const [users, setUsers] = useState([]);

  const {id} = useParams();  

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('https://fakestoreapi.com/users?limit=4');
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    fetch(`https://fakestoreapi.com/users/${id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    // await axios.delete(`https://fakestoreapi.com/users/${id}`);
    loadUsers();
  };

  return (<>



<div className="user-wrraper">
   <div className="user-container">
       
      <div className="user-main">
          <div className="main-top">
              <h3>Sub-Admin Management</h3>
               
              {/* <Link to="/create"><span><button>Create</button></span></Link> */}
              <div className="main-head">
                 {/* <span>User registration</span> */}
                 
                
              </div>
              <div className="main-list">
              <div className="sub-container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr className="header">
              <th scope="col">#</th>
             
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Action</th>
              <th scope="col"> <Link to="/add"><span><button className="create-subAdmin">Create</button></span></Link> </th>


            </tr>
          </thead>
          <tbody >
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                
                <td className="data">{user.username}</td>
                <td className="data">{user.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/view/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={(e) => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


                             </div>

          </div>
          <div className="main-middle">
          {/* <Link to="/add"><span><button>Create</button></span></Link>   */}
          </div>
          <div className="main-bottom">
             <h3>Report</h3>
            <button>User Registration Report</button>
            <button>User Activity Report</button>
            <button>User FeedBack Report</button>
            
      


      
      
     

          </div>
      </div>
   </div>
   
   </div>
  
  </>
  
  )
}

export default User