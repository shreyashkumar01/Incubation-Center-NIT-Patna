import React, { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
const Login=()=>{
   const navigate= useNavigate();
    const [input,setinput]=useState({
        email : "",
        password: ""
    })
    const handleLogin=(e)=>{
        e.preventDefault();
        console.log("hello")
            const loggeduser=JSON.parse(localStorage.getItem("user"));
       if(input.email===loggeduser.email && input.password === loggeduser.password){
           navigate("/Notice");
         localStorage.setItem("loggedin",true)
       }
       else{
        alert("Wrong credentials");
       }
    }
    return (
       <>
          <div className="background">
              
            </div>
            <form onSubmit={handleLogin}>
                <h3>Login Here</h3>

                <label htmlFor="username">Username</label>
                <input type="text"name="email" value={input.value} onChange={(e)=>setinput({
                    ...input,[e.target.name]: e.target.value,
                })} placeholder="Email or Phone" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={input.value} onChange={(e)=>setinput({
                    ...input,[e.target.name]: e.target.value,
                })} placeholder="Password" id="password" />

                <button type="submit">Log In</button>
                <div className="social">
                    <div className="go">
                        <FaGoogle /> Google
                    </div>
                    <div className="fb">
                        <FaFacebook /> Facebook
                    </div>
                </div>
                Don't have account <a href="/register">Signup here</a>
            </form>
       </>
      
    )
}
export default Login;