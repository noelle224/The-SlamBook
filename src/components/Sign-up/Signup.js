import React, { useState , useEffect} from 'react'
import Header from '../Login/Header'
import './Signup.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { auth } from '../../firebase'


function Signup() {
const[email, setEmail]= useState('');
const[password, setPassword]=useState('');
const[user, setUser]= useState(null);
const[logged, islogged]=useState(false);

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser)
      {
          console.log(authUser);
          setUser(authUser);
          islogged(true);
      }
      else{
        setUser(null);
      }
    })
  
    return () => {
      unsubscribe();
    }
    },[user])

const foremail = (event) => {
    setEmail(event.target.value);
}

const forpass = (event) => {
    setPassword(event.target.value);
}

    const signup = (event) => {
        
        if(!logged)
        {
          event.preventDefault();
        }
    
            auth.createUserWithEmailAndPassword(email, password).catch(
              (error) => alert(error.message)
            )
          
    }

  return (
    <div className='Signup'>
    <Header/>

    <div className='Signup__card'>

    <form>
    <h3 className='Email'>Email :</h3>
    <input type="text" id="fname" name="fname" onChange={foremail}/>

    <h3 className='Email'>Password :</h3>
    <input type="text" id="lname" name="lname" onChange={forpass}/>

    <Link to='/dashboard'>
        <Button variant="contained" style={
          {backgroundColor:'rgb(94, 24, 131)', marginLeft : '170px', marginTop : '10px', width : '180px'}
          }
          onClick={signup}
          >Signup</Button>
          </Link>

    </form>
    </div>
    </div>
  )
}

export default Signup