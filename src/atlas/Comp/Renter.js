
import React, { useState,useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {  CircleLoader } from 'react-spinners';
import {
  
  InputGroup,
  FormControl,
  Button,
  
} from "react-bootstrap";
import './renter.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Renter(){

    
    

          const [currentPage, setCurrentPage] = useState(1);
          const [usernameFilter, setUsernameFilter] = useState('');
          const [users, setUsers] = useState([]);
          const [statusFilter, setStatusFilter] = useState('all');
          const [roleFilter, setRoleFilter] = useState('all');
          const [loading, setLoading] = useState(true);
          const [startDate, setStartDate] = useState(null);
          const [endDate, setEndDate] = useState(null);
          const [filteredData, setFilteredData] = useState([]);
          
        
        
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
             
              const roleMatch =
              roleFilter === 'all' || user.position === roleFilter;
        
            return statusMatch && roleMatch;
            // return statusMatch && usernameMatch && roleMatch;
          });
         
        
          const [searchedUsers, setSearchedUsers] = useState([]);
          
          const searchUsers = (searchTerm) => {
            setSearchedUsers(users.filter(user => user.username.toLowerCase().includes(searchTerm.toLowerCase())));
            console.log(searchTerm,"====" , searchedUsers);
          }
        
          
          const pageSize = 6;
        
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

          const dateUsers = async () => {
            try {
              const response = await fetch("https://fakestoreapi.com/carts");
              const data = await response.json();
              setUsers(data);
              filterData(startDate, endDate, data);
            } catch (error) {
              console.error('Error loading users:', error);
            }
          };
        
          const handleStartDateChange = (date) => {
            setStartDate(date);
            filterData(date, endDate, users);
          };
        
          const handleEndDateChange = (date) => {
            setEndDate(date);
            filterData(startDate, date, users);
          };
        
          const filterData = (startDate, endDate, data) => {
            if (startDate && endDate) {
              const filtered = data.filter((user) => {
                const itemDate = new Date(user.date);
                return itemDate >= startDate && itemDate <= endDate;
              });
              setFilteredData(filtered);
            } else {
              setFilteredData(data);
            }
          };
        
          const loadUsers =async() => {
            const result ='https://fakestoreapi.com/carts';
            await axios.get(result)
            .then(response => {
              setUsers(response.data);
              setLoading(false);
            })
            .catch(error => {
              console.error(error);
            });
            
          
          };
         
         
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
        
        
        <div className='renter-table'>
        
            <div className="user-wrraper">
          
               <div className="user-container">
               
                  <div className="user-main">
                  
                      <div className="main-top">
                        <div className='both'>
                         
                          <div className="create-filteruser-name-b">
                          {/* <Link to="/add"><span><button className="create-subAdmin">Create</button> </span></Link> */}
                          <span><div className="filter-username-b">
                    <label className="username-filter-txt-b">Filter by Username:  </label>
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
                        height:'20px',
                      }}
                    />
                  </div></span>
                          </div>
                          
                          <div className="date-picker-container">
        <div className="date-picker-wrapper">
          <p>Start Date:</p>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            dateFormat="dd-MM-yyyy"
            placeholderText="Select start date"
          />
        </div>
        <div className="date-picker-wrapper">
          <p>End Date:</p>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            dateFormat="dd-MM-yyyy"
            placeholderText="Select end date"
          />
        </div>
      </div>
      </div>
                          
                          
                          
                           
                         
                          <div className="main-head">
                           
                             
                            
                          </div>
                          <div className="main-list">
                          <div className="sub-container">
                  <div className="py-4">
                  
              {/* <table className="table"   >
                  <thead>
                    <tr>
                      <th  style={{ backgroundColor: "transparent"}} scope='col'>Name</th>
                      <th style={{ backgroundColor: "transparent"}} scope='col'>Phone</th>
                      <th style={{ backgroundColor: "transparent"}} scope='col'>Email</th>
                      
                    </tr>
                  </thead>
                  <tbody >
                    
                  
                    { usernameFilter === "" ?
                    currentUsers.map(user => (
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
                          <p className='active-status'>{user.email} </p>
                        </td>
                       
                        <td style={{ backgroundColor: "transparent"}}>
                        
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
                         
                        </td>
                        
                      </tr>
                    ))}
                  </tbody>
               
                </table> */}
                {(startDate || endDate) && (
        <div>
          <p>
            Selected Date Range: {startDate && startDate.toLocaleDateString()} -{' '}
            {endDate && endDate.toLocaleDateString()}
          </p>
         
          {filteredData.length > 0 ? (
            <table className="booking-table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.userId}</td>
                    <td>{booking.subject}</td>
                    <td>{booking.date}</td>
                    <td>booked</td>
                    <td>{booking.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No bookings found for the selected date range.</p>
          )}
        </div>
      )}
      {!startDate && !endDate && (
        <div>
          
          {users.length > 0 ? (
            <table className="booking-table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {users.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.userId}</td>
                    <td>{booking.subject}</td>
                    <td>{booking.date}</td>
                    <td>booked</td>
                    <td>{booking.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No bookings available.</p>
          )}
        </div>
      )}
                
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
                   
                   
                 
                    
                  </div>
                </div>
            
            
                                         </div>
            
                      </div>
                     
                   
                      
                     
               
               
               
              
              
            </div>
            </div>
              
              );
          
          
          
        
          
        }
 

