import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const signinUser = () => {
    if (email.length == 0) {
      toast.warning('please enter email')
    } else if (password.length == 0) {
      toast.warning('please enter password')
    } else {
      const body = {
        email,
        password,
      }

      // url to make login api call
      const url = `${URL}/users/login`

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        // console.log(result);
        console.log("role");

        if (result['status'] == 'success') {
          toast.success('Welcome  '+ result['data'].firstName , {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            } )

          
          const { userId, firstName, role } = result['data']

         
          sessionStorage['userId'] = userId
          sessionStorage['firstName'] = firstName
          
          sessionStorage['role'] = role
          console.log(role);
          
          if(role=='jobseeker')
          {
          navigate("/jobapply")
          }
          
          if(role=='recruiter')
         {
           navigate("/recruiteraddjob")
         }
      
        } else {
          toast.error('Invalid user name or password')
        }
      })
    }
  }

  return (
    <div className="container">
  <br />
  <br />
  <br />

  <div className="row justify-content-center">
    <div className="col-md-8 col-lg-6">
      <div className="form border border-primary p-4">
        <h1 className="text-center mb-4">Login</h1>
        <div className="mb-3">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Email address"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="text-center mb-3">
          Don't have an account? <a href="/Register">Sign Up</a>
        </div>
        <div className="text-center">
          <button onClick={signinUser} className="btn btn-primary btn-block">
            Sign In
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Login

