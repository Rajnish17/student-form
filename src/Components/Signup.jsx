import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='container'>
            <h2>Signup Details</h2>
            <div className="container-form">
           Name:- <input type="text" placeholder='Enter Your Name' />
            </div>
            <div>
            Email:-<input type="email" placeholder='Enter Your Email' />
            </div>
            <div>
           password:-<input type="password" placeholder='Enter Your password' />
            </div>

            <div>
            <button>Signup</button>
            </div>

            <div className="login-button">
             <Link to={"/login"}  ><button>visit to Login</button></Link> 
            </div>
        </div>
    )
}

export default Signup