import React, { useState } from 'react';
import '../Components/Signup.css'
import Axios from 'axios'
import {Link, useNavigate} from "react-router-dom"

function Signup() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [VehicleNumber, setVehicleNumber] = useState();

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/signup',{
            username,
            email,
            password,
            VehicleNumber
        }).then(response => {
            if(response.data.status){
                navigate('/login')
            }
        }).catch(err => {
            console.log(err)
        })
    }

  return (
    <div className='sign-up-container' onSubmit={handleSubmit}>
        
        <form className='sign-up-form'>
            <h2>Signup</h2>
            <label htmlFor = "username">Username: </label>
            <input type = "text" placeholder = 'Username'
            onChange={(e) => setUsername (e.target.value)} />

            <label htmlFor = "email">Email: </label>
            <input type = "text" autoComplete='off' placeholder = 'Email'
            onChange={(e) => setEmail (e.target.value)}/>

            <label htmlFor = "password">Password: </label>
            <input type = "password"  placeholder = '******'
            onChange={(e) => setPassword (e.target.value)}/>

            <label htmlFor = "VehicleNumber">Vehicle Number: </label>
            <input type = "text" placeholder = 'Vehicle Number'
            onChange={(e) => setVehicleNumber (e.target.value)}/>

            <button type = 'submit'> Sign up</button>
            <p>Have an account?<Link to = "/login" >Login</Link></p>
        </form>
    </div>
  )
}

export default Signup