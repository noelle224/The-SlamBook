import React, {useState, useEffect} from 'react'
import './Generate.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { db } from '../../firebase'
import firebase from 'firebase/compat/app';

function Generate() {

  const[one,setOne] = useState('');
  const[two,setTwo] = useState('');
  const[three,setThree] = useState('');
  const[four,setFour] = useState('');
  const[five,setFive] = useState('');
  const[six,setSix] = useState('');
  const[seven,setSeven] = useState('');
  const[eight,setEight] = useState('');
  const[nine,setNine] = useState('');
  const[ten,setTen] = useState('');
  const[eleven,setEleven] = useState('');
  const[twelve,setTwelve] = useState('');
  const[thirteen,setThirteen] = useState('');
  const[fourteen,setFourteen] = useState('');
  const[fifteen,setFifteen] = useState('');

  

   //onchange event for fields

  const changeone = (event) => {
    setOne(event.target.value)
  }

  const changetwo = (event) => {
    setTwo(event.target.value)
  }

  const changethree = (event) => {
    setThree(event.target.value)
  }

  const changefour = (event) => {
    setFour(event.target.value)
  }

  const changefive = (event) => {
    setFive(event.target.value)
  }

  const changesix= (event) => {
    setSix(event.target.value)
  }

  const changeseven = (event) => {
    setSeven(event.target.value)
  }

  const changeeight = (event) => {
    setEight(event.target.value)
  }

  const changenine = (event) => {
    setNine(event.target.value)
  }

  const changeten = (event) => {
    setTen(event.target.value)
  }

  const changeeleven = (event) => {
    setEleven(event.target.value)
  }

  const changetwelve = (event) => {
    setTwelve(event.target.value)
  }

  const changethirteen = (event) => {
    setThirteen(event.target.value)
  }

  const changefourteen = (event) => {
    setFourteen(event.target.value)
  }

  const changefifteen = (event) => {
    setFifteen(event.target.value)
  }


  const submithandler = (event) => {
    
    db.collection('Formdata').add({
     Name:one,
     Relation:two,
     Nicknameforme:three,
     song:four,
     lie:five,
     blame:six,
     past:seven,
     think:eight,
     band:nine,
     weakness:ten,
     first:eleven,
     movie:twelve,
     dead:thirteen,
     peaceful:fourteen,
     message:fifteen,
     timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    setOne('');
    setTwo('');
    setThree('');
    setFour('');
    setFive('');
    setSix('');
    setSeven('');
    setEight('');
    setNine('');
    setTen('');
    setEleven('');
    setTwelve('');
    setThirteen('');
    setFourteen('');
    setFifteen('')

  }
  
  

  return (
    <div className='Form'>

    <form className='Form__form'>


    <div className='label'>
    <label>1.Your name : </label>
    <input type="text" placeholder='Your NickName' value={one} onChange={changeone}/>
    </div>

    <div className='label'>
    <label>2. Relation between you and me ? : </label>
    <input type="text" placeholder='Relation' value={two} onChange={changetwo}/>
    </div>

    <div className='label'>
    <label>3. A nick name for me ? : </label>
    <input type="text" placeholder='Nick name'value={three} onChange={changethree}/>
    </div>

    <div className='label'>
    <label>4. A song you want to dedicate me ? : </label>
    <input type="text" placeholder='Song' value={four} onChange={changefour}/>
    </div>

    <div className='label'>
    <label>5. What lie have you told that hurt someone ?: </label>
    <input type="text" placeholder='lie' value={five} onChange={changefive}/>
    </div>

    <div className='label'>
    <label>6. Have you ever let someone take the blame for something you did ?: </label>
    <input type="text" placeholder=' Your Answer' value={six} onChange={changesix}/>
    </div>

    <div className='label'>
    <label>7. Give your three best past moments that you can’t forget ? : </label>
    <input type="text" placeholder='Your Answer' value={seven} onChange={changeseven}/>
    </div>

    <div className='label'>
    <label>8. What do you think about most? : </label>
    <input type="text" placeholder='Your Answer' value={eight} onChange={changeeight}/>
    </div>

    <div className='label'>
    <label>9. Simple but extremely complex. Favorite band? : </label>
    <input type="text" placeholder='Your Answer' value={nine} onChange={changenine}/>
    </div>

    <div className='label'>
    <label>10. What is your greatest weakness; your greatest strength? : </label>
    <input type="text" placeholder='Your Answer' value={ten}  onChange={changeten}/>
    </div>

    <div className='label'>
    <label>11. What do you think about me when you met me for the very first time.: </label>
    <input type="text" placeholder='Your Answer' value={eleven} onChange={changeeleven}/>
    </div>

    <div className='label'>
    <label>12. Your favorite movie and why?.: </label>
    <input type="text" placeholder='Your Answer' value={twelve} onChange={changetwelve}/>
    </div>

    <div className='label'>
    <label>13. If you could meet one person, dead or alive, who would it be?</label>
    <input type="text" placeholder='Your Answer' value={thirteen} onChange={changethirteen}/>
    </div>

    <div className='label'>
    <label>14. When was the most peaceful day you have had?</label>
    <input type="text" placeholder='Your Answer' value={fourteen} onChange={changefourteen}/>
    </div>

    <div className='label'>
    <label>15. A message for me?</label>
    <input type="text" placeholder='Your Answer' value={fifteen} onChange={changefifteen}/>
    </div>

    <div className='Buttonss'>

        <Button variant="contained" style={
            {backgroundColor:'rgb(94, 24, 131)', marginLeft : '170px', marginTop : '10px', width : '180px'}
            }
            onClick={submithandler}
            >Submit</Button>

        <Link to='/link'>
        <Button variant="contained" style={
            {backgroundColor:'rgb(94, 24, 131)', marginLeft : '170px', marginTop : '10px', width : '250px'}
            }
            onClick={() =>  navigator.clipboard.writeText(window.location.href)}
            >Share page Link with friends</Button>
        </Link>

            </div>

    </form>
    </div>
  )
}

export default Generate