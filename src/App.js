import './App.css';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom'
import Signup from './components/Sign-up/Signup';
import Generate from './components/Generate/Generate';
import Link from './components/Generate/Link';
import Dashwrapper from './Dashwrapper';
import Seepages from './components/Seepages/Seepages';

function App() {

  const t=0;
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path='/' element = {<Login/>}/>
     <Route path='/dashboardwrap' element = {<Dashwrapper/>}/>
     <Route path='/dashboard43dghs' element = {<Dashboard/>}/>
     <Route path='/signup' element = {<Signup/>}/>
     <Route path='/form' element = {<Generate/>}/>
     <Route path='/link' element = {<Link/>}/>
     <Route path='/seepages9756hjdf' element = {<Seepages/>}/>

     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
