//import logo from './logo.svg';
//import './App.css';
import Applications from './pages/Applications'
import Login from './pages/Login'
import Register from './pages/Register'
import RecruiterAddJob from './pages/RecruiterAddJob'
import EditUserProfile from './pages/EditUserProfile'
import AddedJob from './pages/AddedJob'
import JobApply from './pages/JobApply'
//import Footer from './component/Footer'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        {/* <Route path="" element={<Footer/>}/> */}

        
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recruiteraddjob" element={<RecruiterAddJob />} />
          <Route path="/home" element={<AddedJob/>} />
          <Route path="/jobapply" element={<JobApply />} />
          <Route path="/applications" element={<Applications/>}/>
          <Route path="/edituserprofile" element={<EditUserProfile />} />
      </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;