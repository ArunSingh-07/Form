import React, { useState } from 'react';
import '../Components/Login.css'
import Axios from 'axios'
import {Link, useNavigate} from "react-router-dom"

function Login() {
   
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate()

    Axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/signup',{
            email,
            password,
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
            <h2>Login</h2>
            <label htmlFor = "email">Email: </label>
            <input type = "text" autoComplete='off' placeholder = 'Email'
            onChange={(e) => setEmail (e.target.value)}/>

            <label htmlFor = "password">Password: </label>
            <input type = "password"  placeholder = '******'
            onChange={(e) => setPassword (e.target.value)}/>
            <button type = 'submit'>Login</button>
            <p>Don't have account?<Link to = "/Signup" >Sign up</Link></p>
        </form>
    </div>
  )
}

export default Login