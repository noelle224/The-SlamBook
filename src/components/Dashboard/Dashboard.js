import { Button } from '@mui/material'
import React from 'react'
import Header from '../Login/Header'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'

function Dashboard() {


  const Logout = () => {
    auth.signOut();
    console.log('logged out ')
  }

  return (
    <div className='Dashboard'>
    <Header/>
    <div className='Dashboard__image'>
    <img className='Dashboard__image__icon' src='https://i.pinimg.com/736x/b3/99/82/b39982bef6f0ffef9e711e519e88280f.jpg'/>
    <div className='Dashboard__quote'>
    <h3>Memory is a way of holding on to the things you love, the things you are, the things you never want to lose.</h3>
    </div>

    <div className='Dashboard__quote2'>
    <h3>To get a page filled, Click on Generate</h3>

   <Link to= '/form'>
   <Button variant="contained" style={
    {backgroundColor:'rgb(94, 24, 131)', marginLeft : '70px', marginTop: '20px', marginBottom:'10px', height : '10vh', width : '30vh'}
    }> Generate Pages </Button>
   </Link>
    


    <h3>To see what your friends filled, Click See</h3>

    <Link to= '/seepages9756hjdf'>
        <Button variant="contained" style={
            {backgroundColor:'rgb(94, 24, 131)', marginLeft : '70px',marginTop: '20px',height : '10vh', width : '30vh'}
            }> See Pages</Button>
            </Link>
    </div>

   
    </div>
    <Link to = '/'>
    <Button variant="contained" style={
        {backgroundColor:'rgb(94, 24, 131)', marginLeft : '70px',marginTop: '20px',height : '5vh', width : '20vh'}
        }
        onClick= {Logout}
        >Logout</Button>
        </Link>
    </div>
  )
}

export default Dashboard