import React from 'react'
import { Navigate , Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';

function Dashwrapper() {
 const t=0;
 if(t===1)
 {
     return(
        <Navigate to='/' />
     )
 }
 else{
  return (
    <Navigate to='/dashboard' />
  )}
}

export default Dashwrapper