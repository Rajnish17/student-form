import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <h2>Login Details</h2>
             <div>
             Email:- <input type="email" placeholder='Enter Your Email' value="" />
            </div>
            <div>
            Password:- <input type="password" placeholder='Enter Your password' />
            </div>
            <div> <button>Login</button></div>
            
            <Link to={"/"}  ><button>visit to Signup</button></Link> 



        </div>
    )
}

export default Login