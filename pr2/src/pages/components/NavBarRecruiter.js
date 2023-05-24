import { Link } from "react-router-dom";
import {Navigate, useNavigate} from "react-router"

const NavBarRecruiter= ({logoutUser})=> {
const {firstName, role} = sessionStorage
const navigate= useNavigate();


const goto= () =>{
if (role== undefined)
  navigate("/Login")

if (role== "admin")
  navigate("/adminaddjob")
  
 

  

  if (role== "jobseeker")
  navigate("/jobapply")
}


return(
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
   
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">

    <a class="nav-item nav-link dropdown-item" onClick={goto}>Welcome {firstName}</a>
      {/* <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a> */}
      <a class="nav-item nav-link" href="#">  <Link to="/home" className="dropdown-item"> Home </Link></a>
      
      <a class="nav-item nav-link" href="#">  <Link to="/recruiteraddjob" className="dropdown-item"> AddJob </Link></a>
      <a class="nav-item nav-link " href="#"><Link to="/applications" className="dropdown-item"> Applications </Link></a>
      
      {firstName!=null ?  <a class="nav-item nav-link" ><button onClick={() => logoutUser()} className="dropdown-item">Logout</button></a> 
      : <a class="nav-item nav-link" href="#"><Link to="/Login" className="dropdown-item">Login</Link></a> }
    </div>
  </div>
  </nav>
</div>
);



}

export default NavBarRecruiter