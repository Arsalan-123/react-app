import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate, } from 'react-router-dom'


const Authlayout = ({isSignedIn, children}) => {
  const log = true;
    if (!isSignedIn) {
      return <Navigate to="/" replace />
    }
    return <Outlet/> 
   }






    


export default Authlayout
