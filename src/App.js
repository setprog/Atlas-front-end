
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
// import DummyS from './DummyS';
// import Profile from './Pages/Profile/Profile';
import Add from './atlas/new/Add';
// import Reel from './Pages/reels/Reel';
// import Search from './Pages/search/Search';
import Tnav from './atlas/nav/Tnav';
import { Link } from 'react-router-dom';
import Footer from './atlas/footer/Footer';
// import Main from './component/main/Main';
// import Nav from './component/nav/Nav';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import EditP from './atlas/editP/EditP';
import User from './atlas/user/User';

import UserNav from './atlas/user-nav/UserNav';
// import GetInfo from '../../pro/src/instaMoved/getinfo/GetInfo';
import RentPage from './atlas/rentpage/RentPage';


// import Home from './new/Home';
import EditUser from "./atlas/new/EditUser";
import LandLord from "./atlas/landlord/LandLord";
import Rented from "./atlas/rented/Rented";
import Booked from "./atlas/booked/Booked";
import AddPro from "./atlas/addpro/AddPro";
import ViewUser from "./atlas/new/ViewSubAdmin";
function App() {
 
  
  return (
    <div className="App">
      <div className="gradient"></div>
       
       {/* <Router>
      
        <Routes>
          <Route exact path='/' element={<Main/>}> </Route>
          <Route exact path='/profile' element={<Profile/>}> </Route>
          <Route exact path='/search' element={<Search/>}> </Route>
          <Route exact path='/add' element={<Add/>}> </Route>
          <Route exact path='/reel' element={<Reel/>}>

          </Route>
        </Routes>
       </Router> */}
      
        

        
       
       <Router>
       
      
        <Routes>
        {/* <Route exact path='/' element={ <>
          <Tnav/> <EditP/></>}  ></Route>
          <Route exact path='/profile'  element={<> <Tnav/> <Reel/></>}> </Route>
          <Route exact path='/user' element={ <>
            <UserNav/>  <User/></>} >  </Route>
            <Route exact path='/add' element={<>
              <UserNav/> <Add/></> }></Route> */}
          {/* <Route exact path='/add' element={<Add/>}> </Route>
          */}
          {/* <Route exact path='/get' element={<>
              <UserNav/> <GetInfo/></> }></Route>
              <Route exact path='/create' element={<>
              <UserNav/> <Create/></> }></Route>
              <Route exact path="/update/:id" element={<>
              <UserNav/> <Update/></> }></Route>
              <Route exact path="/delete/:id" element={<>
              <UserNav/> <Delete/></> }></Route>
              <Route exact path="/home" element={<>
               <Home/></> }></Route> */}
               <Route exact path='/' element={ <>
          <Tnav/> <EditP/></>}  ></Route>
               <Route exact path='/rentpage' element={<>
              <UserNav/> <RentPage/></> }></Route>
               {/* <Route exact path='/get' element={<>
              <UserNav/> <GetInfo/></> }></Route> */}
              <Route exact path="/addpro" element={<>
              <UserNav/> <AddPro/></> }></Route>
              <Route exact path="/add" element={<>
              <UserNav/> <Add/></> }></Route>
              <Route exact path="/view/:id" element={<>
              <UserNav/> <ViewUser/></> }></Route>
              <Route exact path="/edituser/:id" element={<EditUser />} />
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
       </Router>
      
      
   
      
    </div>
  );
}

export default App;
