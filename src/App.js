
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Add from './atlas/new/Add';
import Tnav from './atlas/nav/Tnav';
import Footer from './atlas/footer/Footer';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import EditP from './atlas/editP/EditP';
import User from './atlas/user/User';
import UserNav from './atlas/user-nav/UserNav';
import RentPage from './atlas/rentpage/RentPage';
import EditUser from "./atlas/new/EditInfo";
import LandLord from "./atlas/landlord/LandLord";
import Rented from "./atlas/rented/Rented";
import Booked from "./atlas/booked/Booked";
import AddPro from "./atlas/addpro/AddPro";
import ViewUser from "./atlas/new/ViewSubAdmin";
import Appcateg from "./atlas/Category/Appcateg"
import Apphome from "./atlas/Home-page/Apphome"
import Appspecific from "./atlas/SpecificPro/Appspecific";
import RentalForm from './atlas/Rentalform/RentalForm';
import Nav from "./atlas/Comp/Nav";
import Navbar from "./atlas/Comp/Navbar"
import Home from "./atlas/Comp/Home"
import Renter from "./atlas/Comp/Renter"
import Owner  from "./atlas/Comp/Owner"
import About from "./atlas/Comp/About"

function App() {
 
  
  return (
    <div className="App">
      <div className="gradient"></div>
       
       <Router>
       
      
        <Routes>
       
               <Route exact path='/' element={ <>
                <Apphome/></>}  ></Route>

               <Route exact path='/rentpage' element={<>
              <UserNav/> <RentPage/></> }></Route>

              <Route exact path='/spec' element={<>
              <Appspecific/></> }></Route>

              <Route exact path='/form' element={<>
              <RentalForm/></> }></Route>

              <Route exact path='/home' element={<>
               <Apphome/></> }></Route>

              <Route exact path='/appcat' element={<>
              <Appcateg/></> }></Route>
              
              <Route exact path="/addpro" element={<>
              <UserNav/> <AddPro/></> }></Route>

              <Route exact path="/add" element={<>
              <UserNav/> <Add/></> }></Route>

              <Route exact path="/view/:id" element={<>
              <UserNav/> <ViewUser/></> }></Route>

              <Route exact path="/edituser/:id" element={<> <UserNav/> <EditUser /></>} />

              <Route exact path='/user' element={ <>
            <UserNav/>  <User/></>} >  </Route>
            <Route exact path='/navbef' element={ <>
            <UserNav/>  <Nav/></>} >  </Route>
            <Route exact path="/landlord" element={<>
              <UserNav/> <LandLord/></> }></Route>

              <Route exact path="/rent" element={<>
              <UserNav/> <Rented/></> }></Route>

              <Route exact path="/booked" element={<>
              <UserNav/> <Booked/></> }></Route>
              

               <Route path='/dash' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/renter' element={<Renter/>}></Route> 
      <Route path='/Owner' element={<Owner/>}></Route>
    
    
        </Routes>
        <Footer/>
       </Router>
    
     
     

    
     
  
    
   
      
    </div>
  );
}

export default App;
