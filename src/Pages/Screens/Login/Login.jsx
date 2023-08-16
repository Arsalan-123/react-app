import React from 'react'
import {  Button } from '@mui/material';
import { useRef } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../Components/Config/Firebase'
import './Login.css';
import { useNavigate } from 'react-router-dom';







const Login = () => {

  let navigate = useNavigate();



  const emailRef = useRef();
  const passwordRef = useRef()

const handleLogin = () =>{


  const email = emailRef.current.value;
  const password = passwordRef.current.value
  console.log(email, password)



  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential
    console.log(userCredential)
  
    navigate("/")

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage + "..")
  });

}





  return (





    <div className='Login' >
      <form>
      <h1>Login</h1>
        <input type='text'  className='input' placeholder='email' ref={emailRef}   /> <br/>
        <input type='text'  className='input' placeholder='password' ref={passwordRef}/><br/>


      <Button  className='btn' variant="contained" onClick={handleLogin} >Login</Button>
      <h1>Branch edit perfect</h1>

      </form>
 



   
    </div>
  )
}

export default Login