import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import NavBarRecruiter from "../components/NavBarRecruiter";
import { URL } from "../../config";


const RecruiterAddJob = () => {

  
 
  const [jobName, setJobName] = useState("");
  const [salary, setSalary] = useState("");
  
  const [vacancy, setVacancy] = useState("");

  const navigate = useNavigate();

  const addNewJob = () => {

    if (jobName.length == 0) {
      toast.warning('please enter name of menu Item')
    }
    else if (vacancy.length == 0) {
      toast.warning('please enter vacancy of menu Item')
    }
    else if (salary.length == 0) {
      toast.warning('please enter Image Address of menu Item')
    }
    
    else {
      
      const body = {
        jobName,
        vacancy,
        salary,
      }

      console.log(body)
      const url = `${URL}/job/AddJob`
      
      axios.post(url, body).then((response) => {

        const result = response.data
        if (result['status'] == 'success') {
          toast.success('Successfully added new Menu Item')
        
          navigate('/home')

        }
        else {
          toast.error(result['error'])
        }

      })

    }

  }
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
       <h1 className="title" style={{textAlign:'center'}}>Add Job</h1>
      <br></br>

      <div className="row"> 
        <div className="col"></div>
        <div className="col" style={{ border:'1px solid #000000'}}>
        
          <div className="form">
            
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                JobName
              </label>
              <input

                onChange={(e) => {
                  setJobName(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                salary
              </label>
              <input
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
                type="number"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Vacancy
              </label>
              <input
                onChange={(e) => {
                  setVacancy(e.target.value);
                }}
                type="number"
                className="form-control"
              />
            </div>




            <div className="mb-3">
              <button onClick={addNewJob} className="btn btn-primary form-control" style={{ marginRight: 10 }}>
                Add New Job 
              </button>
              
            </div>
          </div>
        </div>
        <div className="col"></div>



      </div>
    


    </div>); 






}

export default RecruiterAddJob