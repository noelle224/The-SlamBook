import React, {useState, useEffect} from 'react'
import { db } from '../../firebase'
import Pagecontainer from './Pagecontainer';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';

function Seepages() {

  const navigate = useNavigate();
  useEffect(() => {

    firebase.auth().onAuthStateChanged(user => {
      if (user){
        console.log(user)
      }
      else
      {
        return navigate('/')
      }  
   })
  }, );

  console.log(auth.currentUser);


  const initialvalue = [{
   Data : {
    R :" Redirecting to your pages soon", 
    Name : "your friends name",
     Nicknameforme : "Their nickname",
     Relation:"Friend",
     band:"their favourite band",
     blame:"their answer",
    dead:"their answer",
    first:"their answer",
    lie:"their answer",
    message:"their answer",
    movie:"their answer",
    past:"their answer",
    peaceful:"their answer",
    song:"their answer",
   think:"their answer",
   weakness:"their answer"
    }
  }
  ]

    const[pages, setPages] = useState(initialvalue);

    useEffect(() => {
        db.collection('Formdata').onSnapshot(snapshot => {
          setPages(snapshot.docs.map(doc => ({id:doc.id , Data : doc.data() } )))
          //doc.data is returning an object//
        })
        },[])
       

  return (
    <div>
   { pages.map(({id,Data}) => (
      <Pagecontainer name={Data.Name} 
      nick={Data.Nicknameforme}
      relation={Data.Relation}
      song={Data.song}
      lie={Data.lie}
      blame={Data.blame}
      past={Data.past}
      think={Data.think}
      band={Data.band}
      weakness={Data.weakness}
      first={Data.first}
      movie={Data.movie}
      dead={Data.dead}
      peaceful={Data.peaceful}
      message={Data.message}

      />
    ))}
    </div>
  )
}

export default Seepages