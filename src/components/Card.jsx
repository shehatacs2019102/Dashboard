import React from 'react'
import './card.css'
function Card({name, icon, amount, percentage}) {
  return (
    <div className='card'>
       
       <i className={`${icon} card-icon`}></i>
       <h6>{amount}</h6>
       {
            (percentage > 0) ?  <h7 className="growth" >{percentage}</h7> : <h7 className="decline" >{percentage}</h7>
       }
        
       
         
        
         
    </div>
  )
}

export default Card