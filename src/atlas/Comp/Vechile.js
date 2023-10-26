
import React, { useState,useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {  CircleLoader } from 'react-spinners';
import {
  
  InputGroup,
  FormControl,
  Button,
  
} from "react-bootstrap";

export default function Vechile(){

        // const [bookings, setBookings] = useState([
        //     { id: 1, email: 'JohnDoe.@gmail.com', subject: 'Sofa',status:"Done", date: '2023-09-30', amount: "$500" },
        //     { id: 2, email: 'JohnDoe.@gmail.com', subject: 'Sofa',status:"Done", date: '2023-09-30', amount: "$500" },
        //     { id: 2, email: 'JohnDoe.@gmail.com', subject: 'Sofa',status:"Done", date: '2023-09-30', amount: "$500" },
        //     { id: 2, email: 'JohnDoe.@gmail.com', subject: 'Sofa',status:"Done", date: '2023-09-30', amount: "$500" },
        //   ]);
        // //   useEffect(() => {
        // //     loadUsers();
        // //   }, []);
        
        //   const loadUsers = async () => {
        //     const response = await fetch("https://fakestoreapi.com/users");
        //     const data = await response.json();
        //     console.log(data);
        //     setBookings(data);
        //   };
        
        //   const toggleStatus = (index) => {
        //     setBookings((prevBookings) => {
        //       const updatedBookings = [...prevBookings];
        //       const currentStatus = updatedBookings[index].status;
        //       updatedBookings[index].status =
        //         currentStatus === "Done" ? "In Progress" : "Done";
        //       return updatedBookings;
        //     });
        //   };
        //   const [currentPage, setCurrentPage] = useState(1);
        //   const recordPerPage = 4;
        //   const lastIndex = currentPage * recordPerPage;
        //   const firstIndex = lastIndex - recordPerPage;
        //   const records = bookings.slice(firstIndex, lastIndex);
        //   const npage = Math.ceil(bookings.length / recordPerPage);
        //   const numbers = [...Array(npage + 1)].slice(1);
        
        //   function prePage() {
        //     if (currentPage !== firstIndex) {
        //       setCurrentPage(currentPage - 1);
        //     }
        //   }
        //   function nextPage() {
        //     if (currentPage !== lastIndex) {
        //       setCurrentPage(currentPage + 1);
        //     }
        //   }
        
        //   return (
        //     <div className="renter-side">
        //       <table className="booking-table">
        //         <thead>
        //           <tr>
        //             {/* <th>ID</th> */}
        //             <th>Email</th>
        //             <th>Subject</th>
        //             <th>Date</th>
        //             <th>Status</th> {/* New column for the status */}
        //             <th>Amount</th>
        //           </tr>
        //         </thead>
        //         <tbody>
        //           {bookings.map((booking, index) => (
        //             <tr key={booking.id}>
        //               <td>{booking.email}</td>
        //               <td>{booking.subject}</td>
        //               <td>{booking.date}</td>
        
        //               <td>
        //                 <span
        //                   className={`status ${booking.status
        //                     ?.toLowerCase()
        //                     .replace(" ", "-")}`}
        //                   onClick={() => toggleStatus(index)}
        //                 >
        //                   {booking.status}
        //                 </span>
        //               </td>
        //               <td>{booking.amount}</td>
        //             </tr>
        //           ))}
        //         </tbody>
        //       </table>
        //       <nav className="nab">
        //         <ul className="pagination">
        //           <li className="page-item">
        //             <a href="#" className="page-links" onClick={prePage}>
        //               Prev
        //             </a>
        //           </li>
        //           {/* {
        //                 numbers.map((n,i)=> 
        //                 <li className={`page-item ${currentPage === n?'active' :'' }`}key={i}>
        //                     <a onClick={changeCPage}>{n}</a>
         
        //                 </li>
        //                 )
        //             } */}
        //           <li className="page-item">
        //             <a href="#" className="page-link" onClick={nextPage}>
        //               Next
        //             </a>
        //           </li>
        //         </ul>
        //       </nav>
        //     </div>
     
    

     const [currentPage, setCurrentPage] = useState(1);
          const [usernameFilter, setUsernameFilter] = useState('');
          const [users, setUsers] = useState([]);
          const [statusFilter, setStatusFilter] = useState('all');
          const [roleFilter, setRoleFilter] = useState('all');
          const [loading, setLoading] = useState(true);
        
        
         const changePage = (event) => {
          setCurrentPage({
              [event.target.name]: parseInt(event.target.value),
            });
          };
        
        
        
          const handleStatusFilterChange = (e) => {
            setStatusFilter(e.target.value);
          };
          const handleRoleFilterChange = (e) => {
            setRoleFilter(e.target.value);
          };
          const handleUsernameFilterChange = (e) => {
            setUsernameFilter(e.target.value);
            searchUsers(e.target.value);
          };
        
          const filteredSubadmins = users.filter((user) => {
            const statusMatch =
              statusFilter === 'all' || user.status === statusFilter;
              // const usernameMatch =
              // usernameFilter === '' || user.username.toLowerCase().startsWith(usernameFilter.toLowerCase());
              const roleMatch =
              roleFilter === 'all' || user.position === roleFilter;
        
            return statusMatch && roleMatch;
            // return statusMatch && usernameMatch && roleMatch;
          });
          // const [users, setUsers] = useState([]);
        
          const [searchedUsers, setSearchedUsers] = useState([]);
          
          const searchUsers = (searchTerm) => {
            setSearchedUsers(users.filter(user => user.username.toLowerCase().includes(searchTerm.toLowerCase())));
            console.log(searchTerm,"====" , searchedUsers);
          }
        
          // Pagination
          // const pageSize = 4;
          // const totalPages = Math.ceil(filteredSubadmins.length / pageSize);
          // const startIndex = (currentPage - 1) * pageSize;
          // const visibleSubadmins = filteredSubadmins.slice(
          //   startIndex,
          //   startIndex + pageSize
          // );
          
        
          // const handlePageChange = (page) => {
          //   setCurrentPage(page);
          // };
          
          const pageSize = 7;
        
          const lastIndex = currentPage * pageSize;
          const firstIndex = lastIndex - pageSize;
        
          // const userData = this.props.userData;
          // const users = userData.users;
          const currentUsers =  filteredSubadmins.slice(firstIndex, lastIndex);
          const searchedCurrentUsers=searchedUsers.slice(firstIndex, lastIndex);
          const totalPages = (usernameFilter==="" ?Math.ceil(filteredSubadmins.length / pageSize):Math.ceil(searchedUsers.length / pageSize));
          const firstPage = () => {
            if (currentPage > 1) {
              setCurrentPage(
                1,
              );
            }
          };
         const prevPage = () => {
            if (currentPage > 1) {
              setCurrentPage(
                currentPage - 1,
              );
            }
          };
          
          const lastPage = () => {
          
            if (
            currentPage < totalPages
            ) {
              setCurrentPage(
                totalPages
            );
            }
          };
         const nextPage = () => {
            if (
             currentPage <
              totalPages
            ) {
             setCurrentPage(currentPage + 1);
            }
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
         
        
          
        
        
          return (
        
        
        
        
            <div className="user-wrraper">
            {/* <div className="s">
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
            
                    </div> */}
               <div className="user-container">
               
                  <div className="user-main">
                  
                      <div className="main-top">
                         
                          <div className="create-filteruser-name">
                          {/* <Link to="/add"><span><button className="create-subAdmin">Create</button> </span></Link> */}
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
                      <th style={{ backgroundColor: "transparent"}} scope='col'>Photo</th>
                      <th style={{ backgroundColor: "transparent"}} scope='col'>Status</th>
                      {/* <th style={{ backgroundColor: "transparent"}} scope='col'>Position</th> */}
                      {/* <th style={{ backgroundColor: "transparent"}} scope='col'>Detail  </th> */}
                      {/* <th style={{ backgroundColor: "transparent"}} scope="col"> <Link to="/add"><span><button className="create-subAdmin">Create</button></span></Link> </th> */}
                    </tr>
                  </thead>
                  <tbody >
                  
                    { usernameFilter === "" ?
                    currentUsers.map(user => (
                      <tr key={user.id}>
                       
                        <td style={{ backgroundColor: "transparent"}}>
                          {/* <p className='user-info'>{user.phone}</p> */}
                          <p className='user-info'>{user.username}</p>
                        </td>
                        <td style={{ backgroundColor: "transparent"}}>
                        <td style={{ backgroundColor: "transparent"}}>
                          <div className='d-flex align-items-center'>
                            <img
                              src="/assets/book.png"
                              alt=""
                              style={{ width: '45px', height: '45px' }}
                              className='rounded-circle'
                            />
                           
                           
                          </div>
                        </td>
                          {/* <p className='active-status'>{user.email} </p> */}
                        </td>
                        {/* <td style={{ backgroundColor: "transparent"}}>Assistant </td> */}
                        <td style={{ backgroundColor: "transparent"}}>
                            <p>Booked</p>
                        {/* <Link
                                className="action-button"
                                to={`/view/${user.id}`}
                              >
                                View
                              </Link> */}
                              {/* <Link
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
                              </button> */}
                        </td>
                      </tr>
                    )): searchedCurrentUsers.map(user => (
                      <tr key={user.id} >
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
                          <p className='active-status'>{user.email} </p>
                        </td>
                        {/* <td style={{ backgroundColor: "transparent"}}>Assistant </td> */}
                        <td style={{ backgroundColor: "transparent"}}>
                        <Link
                                className="action-button"
                                to={`/view/${user.id}`}
                              >
                                View
                              </Link>
                              {/* <Link
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
                              </button> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
               
                </table>
                <div style={{ float: "left" }}>
                {totalPages === 0 ? (
          <p>No record</p>
        ) : (
          <p>
            Showing Page {currentPage} of {totalPages}
          </p>
        )}
                              
                            </div>
                         {totalPages !==0 && <div style={{ float: "right" }}>
                             
                             <Button
                               type="button"
                               variant="outline-info"
                               disabled={currentPage === 1 ? true : false}
                               onClick={firstPage}
                             >
                               First
                             </Button>
                             <Button
                               type="button"
                               variant="outline-info"
                               disabled={currentPage === 1 ? true : false}
                               onClick={prevPage}
                             >
                                Prev
                             </Button>
                         
                           {/* <div
                             className={"page-num bg-dark"}
                             name="currentPage"
                             value={currentPage}
                             onChange={changePage}
                           /> */}
                       
                             <Button
                               type="button"
                               variant="outline-info"
                               disabled={currentPage === totalPages ? true : false}
                               onClick={nextPage}
                             >
                                Next
                             </Button>
                             <Button
                               type="button"
                               variant="outline-info"
                               disabled={currentPage === totalPages ? true : false}
                               onClick={lastPage}
                             >
                                Last
                             </Button>
                          
                       </div>}   
                         
                          
              </div>
                    
              
              {/* <div class="user-card-container"> */}
              <div class="user-card">
              {currentUsers.map(user=>{
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
                   
                    {/* <div className="page-container">
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
                  </div> */}
                 
                    
                  </div>
                </div>
            
            
                                         </div>
            
                      </div>
                     
                    {/* <div className="main-bottom">
                         <h3>Report</h3>
                       <button>User Registration Report</button>
                        <button>User Activity Report</button>
                        <button>User FeedBack Report</button>
                    </div> */}
            
                      
                     
               
               
               
              
              
            </div>
              
              );
          
          
          
        
          
        }
 

