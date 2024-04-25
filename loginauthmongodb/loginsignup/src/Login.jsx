import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState()

    const [password, setPassword] = useState()
    const navigate = useNavigate()


    const handlesubmit = (e) => {

        e.preventDefault()
        axios.post('http://localhost:3000/login', { email, password })
    .then(result => {
        console.log(result.data); 
        navigate('/home');
        // Log the entire result data
        if(result.data === "success") {
            
        }
    })
    .catch(err => console.log(err));

    }
    return (
        <div className=' d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className=' bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                <form onSubmit={handlesubmit}>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="text" placeholder='Enter name'
                            className="form-control rounded-0" autoComplete='off'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input type="password" placeholder='Enter name' className="form-control rounded-0" autoComplete='off'
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type='submit' className=' btn btn-success w-100 rounded-0'>
                        Login</button>
                </form>
                <p> dont have a account </p>
                <Link to="/register" type='submit' className=' btn btn-default border bg-light text-decoration-none w-100 rounded-0'>
                    Regester</Link>


            </div>

        </div>
    )
}

export default Login
