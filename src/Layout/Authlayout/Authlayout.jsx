import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate, } from 'react-router-dom'


const Authlayout = ({isLoggedIn, children}) => {

    if (!isLoggedIn) {
      return <Navigate to="login" replace />
    }
    return <Outlet/> 
   }


// const Authlayout =() =>{
//   return(
  
//   <Outlet/>
// )}



    


export default Authlayout
