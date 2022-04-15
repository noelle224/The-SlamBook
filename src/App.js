import './App.css';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom'
import Signup from './components/Sign-up/Signup';
import Generate from './components/Generate/Generate';
import Link from './components/Generate/Link';
import Dashwrapper from './Dashwrapper';
import Seepages from './components/Seepages/Seepages';
import React , {useState} from 'react';

function App() {
 var t=false;
  const getlogin = (logged) => {
      console.log("in app");
      console.log(logged);
      t=logged
      console.log(t)
  }

  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path='/' element = {<Login ongetLogin={getlogin}/>}/>
     <Route path='/dashboardwrap' element = {<Dashwrapper log={t}/>}/>
     <Route path='/dashboard43dghs' element = {<Dashboard/>}/>
     <Route path='/signup' element = {<Signup/>}/>
     <Route path='/form3qaewrstf' element = {<Generate/>}/>
     <Route path='/link' element = {<Link/>}/>
     <Route path='/seepages9756hjdf' element = {<Seepages/>}/>

     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
