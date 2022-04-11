import React from 'react'
import './Link.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import Header from '../Login/Header'

function Links() {
  return (
    <div>
    <Header/>
    <h1 className='Link_statement'>Link copied to the clipboard, Share the link to your friends</h1>


    <Button variant="contained" style={
        {backgroundColor:'rgb(94, 24, 131)', marginLeft : '600px', marginTop : '30px', width : '250px'}
    }
     onClick = {() => {window.location.assign('http://gmail.com');}}
    >Share to gmail</Button>

    <Button variant="contained" style={
        {backgroundColor:'rgb(94, 24, 131)', marginLeft : '600px', marginTop : '30px', width : '250px'}
    }
     onClick = {() => {window.location.assign('http://facebook.com');}}
    >Share to Facebook</Button>

    <Link to='/dashboard43dghs'>
    <Button variant="contained" style={
        {backgroundColor:'rgb(94, 24, 131)', marginLeft : '600px', marginTop : '30px', width : '250px'}
        }
        >Back to the dashboard</Button>
    </Link>

    </div>

  )
}

export default Links