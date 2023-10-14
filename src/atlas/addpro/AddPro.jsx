import React, {useState} from 'react';
import './AddPro.css';
import { FaPhone, FaInstagram, FaEnvelope } from 'react-icons/fa';
// import ReactDOM from 'react-dom';
function AddPro(){
  // const[category,setCategory]=useState('');
  // const[product,setProduct]=useState('');
  // const[price,setPrice]=useState('');
  // const[startdate,setStartDate]=useState('');
  // const[enddate,setEndDate]=useState('');
  // const[location,setLocation]=useState('');
  // const[image,setImage]=useState('');
  // const[quantity,setQuantity]=useState('');


  const [addProduct, setAddProduct] = useState({
    
    category: " ",
    // title:" ",
    quantity: "",
    price:" ",
    location:"",
    startdate:"",
    enddate:"",
    product:"",
   
  });
  const[image,setImage]=useState('');
  // const onImageInputChange=(e)=>{
  //   setImage
  // }

  const {  category, quantity,location,startdate,enddate,product,price } = addProduct;
  const onInputChange = (e) => {
    setAddProduct({ ...addProduct, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e)=>{
    e.preventDefault();


    fetch('https://fakestoreapi.com/products',{
      method:"POST",
      body:JSON.stringify(
          {
              title: 'test product',
              price: 13.5,
              description: 'lorem ipsum set',
              image: 'https://i.pravatar.cc',
              category: 'electronic'
          }
      )
  })
      .then(res=>res.json())
      .then(json=>console.log(json))

      // await axios.post('https://fakestoreapi.com/products', addProduct);
    // navigate("/addpro");

    // console.log('Form submitted');
    // console.log('Category:',category);
    // console.log('Product:',product);
    // console.log('Price:',price);
    // console.log('Quantity:',quantity);
    // console.log('StartDate:',startdate);
    // console.log('StartDate:',enddate);
    // console.log('Location:',location);
    // console.log('Image:',image);
  }
 
  return (
    <div className="container">
      <header className="header">
        
      </header>
  
      <div className="addpro-container">
        <div className="detail-info-container">
          <form onSubmit={handleSubmit}>
            <div className="divs">
            <label>Category:
            {/* <input type="text" name="category" value={category} onChange={(e) => onInputChange(e)} required /> */}
              <select value={category} style={{ height: '30px' }} name="category" onChange={(e) => onInputChange(e)} required>
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
            <div className="divs">
            <div className="div"><label>Product:</label></div> 
            <div className="div"><input type="text" style={{ height: '30px' }} value={product} name="product" onChange={(e) => onInputChange(e)} required /></div>
           
            </div>
            <div className="divs">
           <div className="div"><label>Model:</label></div> 
            <div className="div"><input type="number" style={{ height: '30px' }} name="quantity" value={quantity} onChange={(e) => onInputChange(e)} required /></div>
            
            </div>
            <div className="divs">
            <div className="div"><label>Price:</label></div> 
            <div className="div"><input type="number" style={{ height: '30px' }}  name="price" value={price} onChange={(e) => onInputChange(e)} required /></div>
              
            
            </div>
            <div className="divs">

            <div className="div"><label>Start Date:</label></div> 
            <div className="div"><input type="date" style={{ height: '30px' }} name="startdate" value={startdate} onChange={(e) => onInputChange(e)} required /></div>
              
            </div>
            <div className="divs">

            <div className="div"><label>End Date:</label></div> 
            <div className="div"><input type="date" style={{ height: '30px' }} name="enddate" value={enddate} onChange={(e) => onInputChange(e)} required /></div>
              
             
            </div>
            <div className="divs">
            <div className="div"><label>Location:</label></div> 
            <div className="div"><input type="text" style={{ height: '30px' }} name="location" value={location} onChange={(e) => onInputChange(e)} required /></div>
              
            </div>
            <div className="divs">
              <button className="add-pro-submit-btn" type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
  
        <div className="image-upload-container">
          <div className="divs">
            <label>Image:
            <input type="file" placeholder='upload your image here' className='image-input' onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} required style={{ height: '50px' }} />
            </label>
          </div>
          {image && (
            <div className="divs">
              <img src={image} alt="Selected" className="selected-image" />
            </div>
          )}
          <div className="divs">
            <button type="submit">Upload</button>
          </div>
        </div>
      </div>
{/*   
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
      <a href="@gmail.com" className="footer-icon">
        <FaEnvelope />
      </a>
      <p><a href="@gmail.com">email.com</a></p>
    </div>
  </div>
</footer>
        <footer className="footer1">
        <p>&copy; 2023 My Form. All rights reserved.</p>
        </footer> */}
        
    </div>
  );
}
// ReactDOM.render(
//   <RentalForm />,document.getElementById('root')
// );
export default AddPro;