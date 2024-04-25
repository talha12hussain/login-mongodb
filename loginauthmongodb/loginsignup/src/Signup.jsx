import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signup = () => {

    const navigate= useNavigate()
    const [name,setName] =useState()
    
    const [email,setEmail] =useState()
    
    const [password,setPassword] =useState()


    const handlesubmit= (e)=>{

        e.preventDefault()
        axios.post('http://localhost:3000/register', {name,email,password})
        .then(result=>  {console.log(result)
            navigate('/login')
        
        })
        .catch(error=>console.log(error))

    }
  return (
    <div className=' d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className=' bg-white p-3 rounded w-25'>
            <h2>Register</h2>
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="name">
                        <strong>Nmae</strong>
                    </label>
                    <input type="text" placeholder='Enter name'
                     className="form-control rounded-0" autoComplete='off' 
                     onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="text" placeholder='Enter name' 
                    className="form-control rounded-0" autoComplete='off'
                    onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input type="password" placeholder='Enter name' className="form-control rounded-0" autoComplete='off'
                     onChange={(e)=> setPassword(e.target.value)} />
                </div>
                <button type='submit' className=' btn btn-success w-100 rounded-0'>
                Regester</button>
                </form>
                <p>Already have a account </p>
                <Link to="/login" type='submit' className=' btn btn-default border bg-light text-decoration-none w-100 rounded-0'>
                Login</Link>
        

        </div>
      
    </div>
  )
}

export default Signup
