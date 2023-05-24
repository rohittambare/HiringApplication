import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify"
import { Navigate, useNavigate } from "react-router"
import NavBarRecruiter from "../components/NavBarRecruiter";
import { Link } from "react-router-dom";
import { URL } from "../../config";

const AddedJob = () => {
  const [jobData, setJobData] = useState([]);
  const [currentJob, setCurrentJob] = useState({ jobId: 0, jobName: "", vacancy: 0, salary:0 })

  const [jobId, setJobId] = useState();
  const [jobName, setJobName] = useState("");
  const [vacancy, setVacancy] = useState("");
  
  const [salary, setSalary] = useState("");
  const [changes, setChanges] = useState([])

  const { userId, firstName, role } = sessionStorage;

  const navigate = useNavigate();


  function getJob() {
    const url= `${URL}/job/gelAllJob`
    axios.get(url).then((response) => {
      setJobData(response.data.data);
      console.log(response.data)
      
    });
  }

  useEffect(() => {

    if (userId != undefined && role == "recruiter") {
      
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
     navigate("/")

  }




  return (
    <div>
     <NavBarRecruiter logoutUser={logoutUser} />
      
      <div>
        
      <h1 style={{textAlign:'center'}}>Welcome Reruiter <b>{firstName}</b></h1>
        <br></br>
        
      </div>

      <table class="table table-bordered table-striped table-hover table-responsive">
        <thead className="table-primary">
          <tr>
         
            <th scope="col">jobId</th>
            <th scope="col">jobName</th>
            <th scope="col">vacancy</th>
            
            <th scope="col">salary</th>
          </tr>
        </thead>
        <tbody>
          {jobData.map((job) => {

            // if(menu.type !== 'xyz')
            //   { 
            return (
              <tr key={job.jobId}>
                {/* <th scope="row">1</th> */}
                <td>{job.jobId}</td>
                <td><b>{job.jobName}</b></td>
                <td><b>{job.vacancy}</b></td>
                
                <td><b>{job.salary}</b></td>          

              </tr>
            );
            // }
          })
          }
        </tbody>
      </table>

  
      <br></br>

      <div className='table-responsive'>
        <table className='table table-bordered'>
          <thead className="table-warning">
            <tr>
              <th>jobId</th>
              <th>jobName</th>
              <th>vacancy</th>
             
              <th>salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>

              <td>
                {currentJob.jobId}

              </td>
              <td>
                <input
                  onChange={(e) => {
                    setJobName(e.target.value);
                  }}
                  type="text"
                  Value={currentJob.jobName}
                />

              </td>
             

             

              <td>
                <input
                  onChange={(e) => {
                    setVacancy(e.target.value);
                  }}
                  type="number"
                  Value={currentJob.vacancy} />
              </td>

              <td>
                <input
                  onChange={(e) => {
                    setSalary(e.target.value);
                  }}
                  type="number"
                  Value={currentJob.salary} />
              </td>


             
            </tr>
          </tbody>
        </table>

      </div>

    </div>


  );
};

export default AddedJob;
























