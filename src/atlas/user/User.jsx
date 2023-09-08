
import "./User.css"
import React, { useState,useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function User() {
  const [users, setUsers] = useState([]);
let navigate=useNavigate
  const {id} = useParams();  
  const [showAllUsers,setShowAllUsers]=useState(false)
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result ='https://fakestoreapi.com/users?limit=4';
    axios.get(result)
    .then(response => {
      setUsers(response.data);
    })
    .catch(error => {
      console.error(error);
    });
   
    // setUsers(result.data);
  };
  const seeMoreHandled= async()=>{
   
   setShowAllUsers(true)
   const result ='https://fakestoreapi.com/users';
   axios.get(result)
   .then(response => {
     setUsers(response.data);
   })
   .catch(error => {
     console.error(error);
   });
  }

  const cancelHandler=()=>{

   setShowAllUsers(false)
  loadUsers();
  }

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
        {/* <table className="table border shadow">
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
                <th  className="data" scope="row" key={index}>
                  {index + 1}
                </th>
                
                <td className="data">{user.username}</td>
                <td className="data">{user.email}</td>
                <td>
                  <Link
                    className="action-button"
                    to={`/view/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="action-button"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="action-button-delete"
                    onClick={(e) => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
             
            ))}
          </tbody>
          {!showAllUsers && (
        <button onClick={seeMoreHandled}>see more</button>
      )}
      {showAllUsers && (
        <button onClick={cancelHandler}>cancel</button>
      )}
        </table> */}
        <table className="table"   >
      <thead>
        <tr  >
          <th  style={{ backgroundColor: "transparent"}} scope='col'>Name</th>
          <th style={{ backgroundColor: "transparent"}} scope='col'>Title</th>
          <th style={{ backgroundColor: "transparent"}} scope='col'>Status</th>
          <th style={{ backgroundColor: "transparent"}} scope='col'>Position</th>
          <th style={{ backgroundColor: "transparent"}} scope='col'>Actions  </th>
          <th style={{ backgroundColor: "transparent"}} scope="col"> <Link to="/add"><span><button className="create-subAdmin">Create</button></span></Link> </th>
        </tr>
      </thead>
      <tbody >
        {users.map(user => (
          <tr key={user.id}>
            <td style={{ backgroundColor: "transparent"}}>
              <div className='d-flex align-items-center'>
                <img
                  src="/assets/book.png"
                  alt=""
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>{user.username}</p>
                  <p className='text-muted mb-0'>{user.email}</p>
                </div>
              </div>
            </td>
            <td style={{ backgroundColor: "transparent"}}>
              <p className='user-info'>{user.phone}</p>
              <p className='user-info'>{user.username}</p>
            </td>
            <td style={{ backgroundColor: "transparent"}}>
              {/* <span className={`badge ${user.status === 'Active' ? 'bg-success' : 'bg-primary'}`}> */}
              {/* <span className='active-status'>
                Active
              </span> */}
              <p className='active-status'>Active </p>
            </td>
            <td style={{ backgroundColor: "transparent"}}>Assistant </td>
            <td style={{ backgroundColor: "transparent"}}>
            <Link
                    className="action-button"
                    to={`/view/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="action-button"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="action-button-delete"
                    onClick={(e) => deleteUser(user.id)}
                  >
                    Delete
                  </button>
            </td>
          </tr>
        ))}
      </tbody>
      {!showAllUsers && (
        <button className="detail-view-hide"  onClick={seeMoreHandled}>See More</button>
      )}
      {showAllUsers && (
        <button className="detail-view-hide" onClick={cancelHandler}>Hide</button>
      )}
    </table>
      
        
      </div>
    </div>


                             </div>

          </div>
          {!showAllUsers &&  <div className="main-bottom">
             <h3>Report</h3>
           <button>User Registration Report</button>
            <button>User Activity Report</button>
            <button>User FeedBack Report</button>
            
      


      
      
     

          </div>}
          {/* <div className="main-middle">
          <Link to="/add"><span><button>Create</button></span></Link>  
          </div> */}
         
      </div>
   </div>
   
   </div>
  
  </>
  
  )
}

export default User