import React from 'react'
import {  Button } from '@mui/material';
import { useRef } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Config/Firebase'







const Login = () => {




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
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });

}





  return (
    <div className='form-container' style={{textAlign : 'center'}} >
 
          <input type='text' placeholder='email' ref={emailRef}   /> <br/>
        <input type='text' placeholder='password' ref={passwordRef}/><br/>


      <Button variant="contained" color="primary" onClick={handleLogin} >Login</Button>
    
  


   
    </div>
  )
}

export default Login