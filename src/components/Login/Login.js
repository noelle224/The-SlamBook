import React, {useState, useEffect}from 'react'
import Header from './Header';
import './Login.css';
import { Button } from '@mui/material';
import { padding } from '@mui/system';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom'




function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[user, setUser]= useState(null);
  const[logged, islogged] = useState(false); // to do : need to pass this to all the pages using context

  //To see if the user is logged-in, changing the displayName to the first letter of the email.

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser)
      {
          islogged(true);
          props.ongetLogin(logged);
          console.log(authUser);
          setUser(authUser);
          if(authUser.displayName){
          }
          else{
            return authUser.updateProfile({
              displayName: authUser.email[0]
            });
          }
      }
      else{
        setUser(null);
        islogged(false);
      }
    })
  
    return () => {
      unsubscribe();
    }
    },[user])

    //useeffect ends


  //capturecheckemail
  const Capturecheckemail =(e) => {
     setEmail(e.target.value);
  }

  //capturecheckpass
  const Capturecheckpass =(e) => {
    setPassword(e.target.value);
 }

  //Adding auth login function here, so when you login, then only you enter the next page.

  const Logintodash = (event) => {
    //When the user is not logged in, you won't be redirected to that page. 
    if(!logged)
    {
      event.preventDefault();
    }


    auth.signInWithEmailAndPassword(email, password).catch(
      (error) => alert(error.message)
    )

    

  }



  return (
    <div>
    <Header/>
    <div className='Slam__body'>
      <img className='Slam__image' src='https://media.istockphoto.com/illustrations/lavender-flower-watercolor-illustration-illustration-id1085258062?k=20&m=1085258062&s=170667a&w=0&h=xH-wBhHU3MxiYH7EUWKQGFW9jsudzqGSui3tKyN487g='></img>
      <div className='Slam__Card'>
       <h1 className='line'>“Nothing is ever really lost to us as long as we remember it.”</h1>
      </div>

      <div className='Slam__login'>
        <form>
        <h3 className='Email'>Email :</h3>
        <input type="text" id="fname" name="fname" value={email} onChange={Capturecheckemail}/>
        <h3 className='Email'>Password :</h3>
        <input type="text" id="lname" name="lname" value={password} onChange={Capturecheckpass}/>
        
        {/* Applying Conditional Linking*/}
        
        <Link to='/dashboard43dghs'>

        <Button variant="contained" style={
          {backgroundColor:'rgb(94, 24, 131)', marginLeft : '220px'}
          }
          onClick={Logintodash} //Auth Login Function here
          >Login</Button>
          
          </Link>

          <p>OR</p>

        <Link to='/signup'>
        <Button variant="contained" style={
          {backgroundColor:'rgb(94, 24, 131)', marginLeft : '170px', marginTop : '10px', width : '180px'}
          }>Signup</Button>
          </Link>

          
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login