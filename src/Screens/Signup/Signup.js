import React from 'react'
import { FormControl, TextField, Button } from '@mui/material';
import { useRef } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Config/Firebase'
import { Link, useNavigate } from 'react-router-dom';








const Signup = () => {

  let navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef()

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value
    console.log(email, password)

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/")
        console.log(userCredential)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <div className='form-container' style={{ textAlign: 'center', marginTop: "15%" }}>

      <FormControl>
        <input type='text' placeholder='Name' />

        <input type='text' placeholder='email' ref={emailRef} />
        <input type='text' placeholder='password' ref={passwordRef} />


        <Button variant="contained" color="primary" onClick={handleSignUp}  >Submit
         
        </Button>
      </FormControl>




    </div>

  )
}

export default Signup
