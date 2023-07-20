import React from 'react'
import { FormControl, TextField, Button } from '@mui/material';
import { useRef } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../Components/Config/Firebase'
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';









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


    <div  className='Signup'>
    <form> 
    <h1>Signup</h1>

    <input placeholder='Email'  className='input' type = "email" ref={emailRef} required />
<br/>
<input placeholder='Password' className='input' type = "password" ref={passwordRef} required />
<br/>
<button  className='btn' type='submit' onClick={handleSignUp} >  Submit</button>
    </form>
   

 </div>
    // <div className='form-container' 
    // style=
    // {{ textAlign: 'center', marginTop: "15%" }}
    // >

    //   <FormControl>
    //     <input type='text' placeholder='Name' />

    //     <input type='text' placeholder='email' ref={emailRef} />
    //     <input type='text' placeholder='password' ref={passwordRef} />


    //     <Button variant="contained" color="primary" onClick={handleSignUp}  >Submit
         
    //     </Button>
    //   </FormControl>




    // </div>

  )
}

export default Signup
