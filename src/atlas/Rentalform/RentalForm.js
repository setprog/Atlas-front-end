import React, { useState } from 'react';
import './RentalForm.css';
import { FaPhone, FaInstagram, FaEnvelope } from 'react-icons/fa';
import ReactDOM from 'react-dom';

export default function RentalForm() {
  const [category, setCategory] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [startdate, setStartDate] = useState('');
  const [enddate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Category:', category);
    console.log('Product:', product);
    console.log('Quantity', quantity);
    console.log('Price:', price);
    console.log('StartDate:', startdate);
    console.log('End date:', enddate);
    console.log('Location:', location);
    console.log('Image:', image);

    // ...rest of the code
  };

  const handleImageUpload = () => {
    // ...rest of the code
  };

  return (
    <div className="container">
      <div className="grid-container">
        <header className="header">
          <h1>ATLAS</h1>
        </header>
        <div className="box box1 smaller-box">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Category:
                <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                  <option value="">Select Category</option>
                  <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Home">Home</option>
                <option value="Books">Books</option>
                <option value="Machinery">Machinery</option>
                <option value="Event Equipment">Event Equipment</option>
                </select>
              </label>
            </div>
            <div className="form-group">
              <label>
                Product:
                <input
                  type="text"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Quantity:
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Price:
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Start Date:
                <input
                  type="date"
                  value={startdate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                End Date:
                <input
                  type="date"
                  value={enddate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Location:
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="form-group">
          <button type="submit">Submit</button>
          </div>
          </form>
          </div>
            <div className="box box2 smaller-box">
              <div className="form-group">
              <label>
                Image:
                <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
              </label>
              <button type="button" onClick={handleImageUpload}>Upload Image</button>
            </div>
        </div>
      </div>
      
      <footer className="footer">
  <div className="footer-content">
    <div className="contact-item">
      <a href="tel:+251912345678" className="footer-icon">
        <FaPhone />
      </a>
      <p>+251912345678</p>
    </div>
    <div className="contact-item">
      <a href="https://www.instagram.com/your_account_name" className="footer-icon">
        <FaInstagram />
      </a>
      <p><a href="https://www.instagram.com/your_account_name">@your_account_name</a></p>
    </div>
    <div className="contact-item">
      <a href="gmail.com" className="footer-icon">
        <FaEnvelope />
      </a>
      <p><a href="gmail.com">email.com</a></p>
    </div>
  </div>
</footer>
        <footer className="footer1">
        <p>&copy; 2023 My Form. All rights reserved.</p>
        </footer>
    </div>

  );
}

ReactDOM.render(<RentalForm />, document.getElementById('root'));