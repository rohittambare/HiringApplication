import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify"
import { Navigate, useNavigate } from "react-router"
// import AdminPizzaDetails from "../AdminPizzaDetails";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { URL } from "../../config";
import Applications from "../Applications";



//import TotalSales from "../components/TotalSales";

const JobApply = () => {
  const [jobData, setJobData] = useState([]);
  const [currentJob, setCurrentJob] = useState({ jobId: 0, jobName: "", vacancy: 0, salary:0 })

  const [jobId, setJobId] = useState();
  const [jobName, setJobName] = useState("");
  const [vacancy, setVacancy] = useState("");
  
  const [salary, setSalary] = useState("");
  const [changes, setChanges] = useState([])

  

  //function getUser(){
   // const url= `${URL}/users/{id}`
    
    // axios.get(url).then((response) => {
    //     setAllUsers(response.data.data)
   //  })
// }
  const { userId, firstName, role } = sessionStorage;

  const navigate = useNavigate();


  function getJob() {
    const url= `${URL}/job/gelAllJob`
    axios.get(url).then((response) => {
      setJobData(response.data.data);
      console.log(response.data)
     
    });
  }

  //onApply(jobData);
//  setIsApplied(true);
  useEffect(() => {

    if (userId != undefined && role == "jobseeker") {
     
      getJob();
    }
    else {
      toast.warning("Login First")
      navigate("/login")
    }

  }, []);




  const logoutUser = () => {

    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('firstName');
    sessionStorage.removeItem('role');
    toast.success("Logged out Successfully")
    // navigate("/")
     navigate("/")

  }




  return (
    <div>
     <NavBar logoutUser={logoutUser} />
     

      <div>
        
      <h1 style={{textAlign:'center'}}>Welcome <b>{firstName}</b></h1>
        <br></br>
        
      </div>

      <table class="table table-bordered table-striped table-hover table-responsive">
        <thead className="table-primary">
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">jobId</th>
            <th scope="col">jobName</th>
            <th scope="col">vacancy</th>
            
            <th scope="col">salary</th>
            <th scope="col">apply</th>
          </tr>
        </thead>
        <tbody>
          {jobData.map((job) => {
            return (
              <tr key={job.jobId}>
                {/* <th scope="row">1</th> */}
                <td>{job.jobId}</td>
                <td><b>{job.jobName}</b></td>
                <td><b>{job.vacancy}</b></td>
                
                <td><b>{job.salary}</b></td>
                <td><button type="button"  onClick={getJob}>Apply</button></td>
                     </tr>
            );

          })
          }
        </tbody>
      </table>
    </div>

  );
};

export default JobApply;
















