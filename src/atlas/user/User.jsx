
import "./User.css"
import React, { useState,useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {  CircleLoader } from 'react-spinners';

function User() {
  const [currentPage, setCurrentPage] = useState(1);
  const [usernameFilter, setUsernameFilter] = useState('');
  const [users, setUsers] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  
  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };
  const handleRoleFilterChange = (e) => {
    setRoleFilter(e.target.value);
  };
  const handleUsernameFilterChange = (e) => {
    setUsernameFilter(e.target.value);
  };

  const filteredSubadmins = users.filter((user) => {
    const statusMatch =
      statusFilter === 'all' || user.status === statusFilter;
      const usernameMatch =
      usernameFilter === '' || user.username.toLowerCase().startsWith(usernameFilter.toLowerCase());
      const roleMatch =
      roleFilter === 'all' || user.position === roleFilter;
    return statusMatch && usernameMatch && roleMatch;
  });
  // const [users, setUsers] = useState([]);

   
  // Pagination
  const pageSize = 4;
  const totalPages = Math.ceil(filteredSubadmins.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const visibleSubadmins = filteredSubadmins.slice(
    startIndex,
    startIndex + pageSize
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  

  
let navigate=useNavigate
  const {id} = useParams();  
  // const [showAllUsers,setShowAllUsers]=useState(false)
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers =async() => {
    const result ='https://fakestoreapi.com/users';
    await axios.get(result)
    .then(response => {
      setUsers(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
    });
   
    // setUsers(result.data);
  };
  // const seeMoreHandled= async()=>{
   
  //  setShowAllUsers(true)
  //  const result ='https://fakestoreapi.com/users';
  //  axios.get(result)
  //  .then(response => {
  //    setUsers(response.data);
  //  })
  //  .catch(error => {
  //    console.error(error);
  //  });
  // }

  // const cancelHandler=()=>{

  //  setShowAllUsers(false)
  // loadUsers();
  // }
 
  if (loading) {
    return <div className="loading">Loading...<span>
      <CircleLoader color="blue" size={100}/></span>
    
    </div>;
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
<div className="s">
        <section className="sidebar">
        <div className="logo-container">
          <h1 className="txt-header">Filter</h1>
        </div>
        
        <div >
  <label className="txt">Filter by Status:</label>
  <div className="radio_buttons">
    <label>
      <input
        type="radio"
        value="all"
        checked={statusFilter === "all"}
        onChange={handleStatusFilterChange}
      />
      All
    </label>
    <label>
      <input
        type="radio"
        value="active"
        checked={statusFilter === "active"}
        onChange={handleStatusFilterChange}
      />
      Active
    </label>
    <label>
      <input
        type="radio"
        value="inactive"
        checked={statusFilter === "inactive"}
        onChange={handleStatusFilterChange}
      />
      Inactive
    </label>
  </div>
</div>

<div >
  <label className="txt">Filter by Role:</label>
  <div className="radio_buttons">
    <label>
      <input
        type="radio"
        value="all"
        checked={roleFilter === "all"}
        onChange={handleRoleFilterChange}
      />
      All
    </label>
    <label>
      <input
        type="radio"
        value="assistant"
        checked={roleFilter === "assistant"}
        onChange={handleRoleFilterChange}
      />
      Assistant
    </label>
    <label>
      <input
        type="radio"
        value="technique"
        checked={roleFilter === "technique"}
        onChange={handleRoleFilterChange}
      />
     Technicians
    </label>
  </div>
</div>
      </section>

        </div>
   <div className="user-container">
   
      <div className="user-main">
      
          <div className="main-top">
              <h3>Sub-Admin Management </h3>
              <div className="create-filteruser-name">
              <Link to="/add"><span><button className="create-subAdmin">Create</button> </span></Link>
              <span><div className="filter-username">
        <label className="username-filter-txt">Filter by Username:  </label>
        <input 
          type="text"
          placeholder="   Search User-name"
          value={usernameFilter}
          onChange={handleUsernameFilterChange}
          style={{
            outline:"none",
            padding: '15px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '19px',
          }}
        />
      </div></span>
              </div>
              
             
              
              
              
               
              {/* <Link to="/create"><span><button>Create</button></span></Link> */}
              <div className="main-head">
                 {/* <span>User registration</span> */}
                 
                
              </div>
              <div className="main-list">
              <div className="sub-container">
      <div className="py-4">
      
  <table className="table"   >
      <thead>
        <tr>
          <th  style={{ backgroundColor: "transparent"}} scope='col'>Name</th>
          <th style={{ backgroundColor: "transparent"}} scope='col'>Phone</th>
          <th style={{ backgroundColor: "transparent"}} scope='col'>Status</th>
          <th style={{ backgroundColor: "transparent"}} scope='col'>Position</th>
          <th style={{ backgroundColor: "transparent"}} scope='col'>Actions  </th>
          {/* <th style={{ backgroundColor: "transparent"}} scope="col"> <Link to="/add"><span><button className="create-subAdmin">Create</button></span></Link> </th> */}
        </tr>
      </thead>
      <tbody >
        {visibleSubadmins.map(user => (
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
              {/* <p className='active-status'>{user.status} </p> */}
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
                    className="sub-admin-action-button-delete"
                    onClick={(e) => deleteUser(user.id)}
                  >
                    Delete
                  </button>
            </td>
          </tr>
        ))}
      </tbody>
      {/* {!showAllUsers && (
        <button className="detail-view-hide"  onClick={seeMoreHandled}>See More</button>
      )}
      {showAllUsers && (
        <button className="detail-view-hide" onClick={cancelHandler}>Hide</button>
      )} */}
    </table>
  </div>
        
  
  {/* <div class="user-card-container"> */}
  <div class="user-card">
  {visibleSubadmins.map(user=>{
    return(<>
      <div className="land-card-wrapper">
        <div className="land-card-container">
       <ul className="list">
       <li style={{ backgroundColor: "transparent",}}>
              <div className='d-flex align-items-center'>
                <img
                  src="/assets/book.png"
                  alt=""
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'> {user.username}</p>
                  <p className='text-muted mb-0'>{user.email}</p>
                </div>
              </div>
            </li>
            <li style={{ backgroundColor: "transparent"}}>
              <p className='user-info'>{user.phone}</p>
              <p className='user-info'>{user.username}</p>
            </li>
            <li style={{ backgroundColor: "transparent"}}>
            
              <p className='active-status'> Active </p>
            </li>
            <li style={{ backgroundColor: "transparent"}}> Assistant </li>
            <li style={{ backgroundColor: "transparent"}}>
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
            </li>
       </ul>
           
       
               

            </div>
        </div>
    </>)
  }
  
    )}
  
  </div>

</div>
       
        <div className="page-container">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button 
              key={page}
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? 'active-page' : 'pagenumber'}
              disabled={currentPage === page}
            >
              {page}
            </button>
          )
        )}
      </div>
     
        
      </div>
    </div>


                             </div>

          </div>
          {/* {!showAllUsers &&  <div className="main-bottom">
             <h3>Report</h3>
           <button>User Registration Report</button>
            <button>User Activity Report</button>
            <button>User FeedBack Report</button>
        </div>} */}
        <div className="main-bottom">
             <h3>Report</h3>
           <button>User Registration Report</button>
            <button>User Activity Report</button>
            <button>User FeedBack Report</button>
        </div>

          {/* <label>Filter by Status:</label>
        <select value={statusFilter} onChange={handleStatusFilterChange}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select> */}
       
          {/* <div className="main-middle">
          <Link to="/add"><span><button>Create</button></span></Link>  
          </div> */}
         
      </div>
   {/* </div> */}
   
  
  
  </>
  
  )
}

export default User