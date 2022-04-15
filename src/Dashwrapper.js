import React from 'react'
import { Navigate , Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';

function Dashwrapper(props) {
console.log(props.log)
 if(!props.log)
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