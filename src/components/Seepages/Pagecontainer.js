import React from 'react'
import './PageContainer.css'

function Pagecontainer(props) {
 
  return (
    <div className='Seecontainer'>
    <h1 className='friendname'>1. Name : <h4>{props.name}</h4></h1>
    <h1>2. Relation between you and me ? :<h4>{props.relation}</h4></h1>
    <h1>3. A nick name for me ? :<h4> {props.nick}</h4></h1>
    <h1>4. A song you want to dedicate me ? : <h4>{props.song}</h4></h1>
    <h1>5. What lie have you told that hurt someone ?:<h4> {props.lie}</h4></h1>
    <h1>6. Have you ever let someone take the blame for something you did ?:<h4> {props.blame}</h4></h1>
    <h1>7. Give your three best past moments that you can’t forget ? :<h4> {props.past}</h4></h1>
    <h1>8. What do you think about most? :<h4> {props.think}</h4></h1>
    <h1>9. Simple but extremely complex. Favorite band? :<h4> {props.band}</h4></h1>
    <h1>10. What is your greatest weakness; your greatest strength? :<h4> {props.weakness}</h4></h1>
    <h1>11. What do you think about me when you met me for the very first time.:<h4> {props.first}</h4></h1>
    <h1>12. Your favorite movie and why?.:<h4> {props.movie}</h4></h1>
    <h1>13. If you could meet one person, dead or alive, who would it be? :<h4>{props.dead}</h4></h1>
    <h1>14. When was the most peaceful day you have had? :<h4>{props.peaceful}</h4></h1>
    <h1>15. A message for me? :<h4> {props.message}</h4></h1>
    </div>
  )
}

export default Pagecontainer