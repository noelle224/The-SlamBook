import React, {useState, useEffect} from 'react'
import { db } from '../../firebase'
import Pagecontainer from './Pagecontainer';

function Seepages() {

  const initialvalue = [{
   Data : {
      Name : "Vikash",
     Nicknameforme : "chirah",
     Relation:"Father",
     band:"none",
     blame:"yes, on archi",
    dead:"none",
    first:"daughter",
    lie:"none",
    message:"none",
    movie:"none",
    past:"no past",
    peaceful:"birth",
    song:"old",
   think:"family",
   weakness:"daughters"
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