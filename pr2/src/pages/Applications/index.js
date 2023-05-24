import axios from "axios";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


import { URL } from "../../config";
import NavBarRecruiter from "../components/NavBarRecruiter";
const Applications = () => {


   
    const [allUsers, setAllUsers] = useState([]);
   
    const { userId, firstName, role } = sessionStorage;

    const navigate = useNavigate();

    const logoutUser = () => {

        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('firstName');
        sessionStorage.removeItem('role');
        toast.success("Logged out Successfully")
        navigate("/")

    }


    function getUser(){
       const url= `${URL}/users/getAllUsers`
       
        axios.get(url).then((response) => {
            setAllUsers(response.data.data)
        })
    }


    useEffect(() => {


        if (userId != undefined && role == "recruiter") {
            
            getUser();
            

        }
        else {
            toast.warning("Login First")
            navigate("/login")
        }
    }, []);


   

    return (
        <div>
            <NavBarRecruiter logoutUser={logoutUser} />
           
            <br></br>
            <h1 style={{textAlign:'center'}}>Welcome Recruiter <b>{firstName}</b></h1>
            <br></br>
            
            <table class="table">
                <thead>


                    <tr>


                        <th scope="col">UserId</th>
                        <th scope="col">firstName</th>
                        <th scope="col">lastName</th>
                        
                        <th scope="col">mobile Number</th>
                        <th scope="col">current Role</th>
                        

                    </tr>
                </thead>
                <tbody>

                    {allUsers && allUsers.map((user) => {

                       

                        return (
                            <tr>
                                <th scope="row">{user.userId}</th>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>

                                <td>{user.mobileNo}</td>
                                <td>{user.role}</td>
                               
                            </tr>
                        );


                    }
                        
                    )
                    }

                </tbody>
            </table>



        </div>


    );


}


export default Applications;