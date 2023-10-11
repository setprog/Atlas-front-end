
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
function App() {
 
  
  return (
    <div className="App">
      <div className="gradient"></div>
       
       {/* <Router>
       
      
        <Routes>
       
               <Route exact path='/' element={ <>
          <Tnav/> <EditP/></>}  ></Route>
               <Route exact path='/rentpage' element={<>
              <UserNav/> <RentPage/></> }></Route>
              
              <Route exact path="/addpro" element={<>
              <UserNav/> <AddPro/></> }></Route>
              <Route exact path="/add" element={<>
              <UserNav/> <Add/></> }></Route>
              <Route exact path="/view/:id" element={<>
              <UserNav/> <ViewUser/></> }></Route>
              <Route exact path="/edituser/:id" element={<> <UserNav/> <EditUser /></>} />
              <Route exact path='/user' element={ <>
            <UserNav/>  <User/></>} >  </Route>
            <Route exact path="/landlord" element={<>
              <UserNav/> <LandLord/></> }></Route>
              <Route exact path="/rent" element={<>
              <UserNav/> <Rented/></> }></Route>
              <Route exact path="/booked" element={<>
              <UserNav/> <Booked/></> }></Route>
        </Routes>
        <Footer/>
       </Router> */}
      
      <Apphome />
   
      
    </div>
  );
}

export default App;
