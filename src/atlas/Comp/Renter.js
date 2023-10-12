import React,{useState} from "react";

export default function Renter(){

        const [bookings, setBookings] = useState([
            { id: 1, email: 'JohnDoe.@gmail.com', subject: 'Sofa',status:"Done", date: '2023-09-30', amount: "$500" },
            { id: 2, email: 'JohnDoe.@gmail.com', subject: 'Sofa',status:"Done", date: '2023-09-30', amount: "$500" },
            { id: 2, email: 'JohnDoe.@gmail.com', subject: 'Sofa',status:"Done", date: '2023-09-30', amount: "$500" },
            { id: 2, email: 'JohnDoe.@gmail.com', subject: 'Sofa',status:"Done", date: '2023-09-30', amount: "$500" },
          ]);
        //   useEffect(() => {
        //     loadUsers();
        //   }, []);
        
          const loadUsers = async () => {
            const response = await fetch("https://fakestoreapi.com/users");
            const data = await response.json();
            console.log(data);
            setBookings(data);
          };
        
          const toggleStatus = (index) => {
            setBookings((prevBookings) => {
              const updatedBookings = [...prevBookings];
              const currentStatus = updatedBookings[index].status;
              updatedBookings[index].status =
                currentStatus === "Done" ? "In Progress" : "Done";
              return updatedBookings;
            });
          };
          const [currentPage, setCurrentPage] = useState(1);
          const recordPerPage = 4;
          const lastIndex = currentPage * recordPerPage;
          const firstIndex = lastIndex - recordPerPage;
          const records = bookings.slice(firstIndex, lastIndex);
          const npage = Math.ceil(bookings.length / recordPerPage);
          const numbers = [...Array(npage + 1)].slice(1);
        
          function prePage() {
            if (currentPage !== firstIndex) {
              setCurrentPage(currentPage - 1);
            }
          }
          function nextPage() {
            if (currentPage !== lastIndex) {
              setCurrentPage(currentPage + 1);
            }
          }
        
          return (
            <div className="renter-side">
              <table className="booking-table">
                <thead>
                  <tr>
                    {/* <th>ID</th> */}
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Date</th>
                    <th>Status</th> {/* New column for the status */}
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, index) => (
                    <tr key={booking.id}>
                      <td>{booking.email}</td>
                      <td>{booking.subject}</td>
                      <td>{booking.date}</td>
        
                      <td>
                        <span
                          className={`status ${booking.status
                            ?.toLowerCase()
                            .replace(" ", "-")}`}
                          onClick={() => toggleStatus(index)}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td>{booking.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <nav className="nab">
                <ul className="pagination">
                  <li className="page-item">
                    <a href="#" className="page-links" onClick={prePage}>
                      Prev
                    </a>
                  </li>
                  {/* {
                        numbers.map((n,i)=> 
                        <li className={`page-item ${currentPage === n?'active' :'' }`}key={i}>
                            <a onClick={changeCPage}>{n}</a>
         
                        </li>
                        )
                    } */}
                  <li className="page-item">
                    <a href="#" className="page-link" onClick={nextPage}>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
    )
}