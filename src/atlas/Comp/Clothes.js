import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { CircleLoader } from "react-spinners";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default function Clothes() {
  const [currentPage, setCurrentPage] = useState(1);
  const [usernameFilter, setUsernameFilter] = useState("");
  const [users, setUsers] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
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
    const statusMatch = statusFilter === "all" || user.status === statusFilter;
    // const usernameMatch =
    // usernameFilter === '' || user.username.toLowerCase().startsWith(usernameFilter.toLowerCase());
    const roleMatch = roleFilter === "all" || user.position === roleFilter;

    return statusMatch && roleMatch;
    // return statusMatch && usernameMatch && roleMatch;
  });
  // const [users, setUsers] = useState([]);

  const [searchedUsers, setSearchedUsers] = useState([]);

  const searchUsers = (searchTerm) => {
    setSearchedUsers(
      users.filter((user) =>
        user.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    console.log(searchTerm, "====", searchedUsers);
  };

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
  const currentUsers = filteredSubadmins.slice(firstIndex, lastIndex);
  const searchedCurrentUsers = searchedUsers.slice(firstIndex, lastIndex);
  const totalPages =
    usernameFilter === ""
      ? Math.ceil(filteredSubadmins.length / pageSize)
      : Math.ceil(searchedUsers.length / pageSize);
  const firstPage = () => {
    if (currentPage > 1) {
      setCurrentPage(1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const lastPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(totalPages);
    }
  };
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  let navigate = useNavigate;
  const { id } = useParams();
  // const [showAllUsers,setShowAllUsers]=useState(false)
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = "https://fakestoreapi.com/products";
    await axios
      .get(result)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });

    // setUsers(result.data);
  };

  if (loading) {
    return (
      <div className="loading">
        Loading...
        <span>
          <CircleLoader color="blue" size={100} />
        </span>
      </div>
    );
  }
  const deleteUser = async (id) => {
    fetch(`https://fakestoreapi.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    // await axios.delete(`https://fakestoreapi.com/users/${id}`);
    loadUsers();
  };

  return (
    <div className="user-wrraper">
      <div className="user-container">
        <div className="user-main">
          <div className="main-top">
            <div className="create-filteruser-name">
              <span>
                <div className="filter-username">
                  <label className="username-filter-txt">
                    Filter by Username:{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="   Search User-name"
                    value={usernameFilter}
                    onChange={handleUsernameFilterChange}
                    style={{
                      outline: "none",
                      padding: "15px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      fontSize: "19px",
                    }}
                  />
                </div>
              </span>
            </div>

            <div className="main-head"></div>
            <div className="main-list">
              <div className="sub-container">
                <div className="py-4">
                  <table className="table">
                    <thead>
                      <tr>
                        <th
                          style={{ backgroundColor: "transparent" }}
                          scope="col"
                        >
                          Name
                        </th>
                        <th
                          style={{ backgroundColor: "transparent" }}
                          scope="col"
                        >
                          Photo
                        </th>
                        <th
                          style={{ backgroundColor: "transparent" }}
                          scope="col"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {usernameFilter === ""
                        ? currentUsers.map((user) => (
                            <tr key={user.id}>
                              <td style={{ backgroundColor: "transparent" }}>
                                {/* <p className='user-info'>{user.phone}</p> */}
                                <p className="user-info">{user.category}</p>
                              </td>
                              <td style={{ backgroundColor: "transparent" }}>
                                <td style={{ backgroundColor: "transparent" }}>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src={user.image}
                                      alt=""
                                      style={{ width: "95px", height: "65px" }}
                                      className="rounded"
                                    />
                                  </div>
                                </td>
                                {/* <p className='active-status'>{user.email} </p> */}
                              </td>
                              {/* <td style={{ backgroundColor: "transparent"}}>Assistant </td> */}
                              <td style={{ backgroundColor: "transparent" }}>
                                <p>Booked</p>
                              </td>
                            </tr>
                          ))
                        : searchedCurrentUsers.map((user) => (
                            <tr key={user.id}>
                              <td style={{ backgroundColor: "transparent" }}>
                                {/* <p className='user-info'>{user.phone}</p> */}
                                <p className="user-info">{user.category}</p>
                              </td>
                              <td style={{ backgroundColor: "transparent" }}>
                                {/* <p className='user-info'>{user.category}</p> */}
                                <div className="d-flex align-items-center">
                                  <img
                                    src="{user.image}"
                                    alt=""
                                    style={{ width: "95px", height: "65px" }}
                                    className="rounded"
                                  />
                                </div>
                              </td>

                              <td style={{ backgroundColor: "transparent" }}>
                                <p>Booked</p>
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
                  {totalPages !== 0 && (
                    <div style={{ float: "right" }}>
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
                    </div>
                  )}
                </div>

                <div class="user-card">
                  {currentUsers.map((user) => {
                    return (
                      <>
                        <div className="land-card-wrapper">
                          <div className="land-card-container">
                            <ul className="list">
                              <li style={{ backgroundColor: "transparent" }}>
                                <div className="d-flex align-items-center">
                                  <img
                                    src="/assets/book.png"
                                    alt=""
                                    style={{ width: "45px", height: "45px" }}
                                    className="rounded-circle"
                                  />
                                  <div className="ms-3">
                                    <p className="fw-bold mb-1">
                                      {" "}
                                      {user.category}
                                    </p>
                                    <p className="text-muted mb-0">
                                      {user.email}
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li style={{ backgroundColor: "transparent" }}>
                                <p className="user-info">{user.phone}</p>
                                <p className="user-info">{user.category}</p>
                              </li>
                              <li style={{ backgroundColor: "transparent" }}>
                                <p className="active-status"> Active </p>
                              </li>
                              <li style={{ backgroundColor: "transparent" }}>
                                {" "}
                                Assistant{" "}
                              </li>
                              <li style={{ backgroundColor: "transparent" }}>
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
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
