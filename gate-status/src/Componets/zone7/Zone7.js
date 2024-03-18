import React from 'react'
import "./Zone7.css"
import warningIcon from "../../Assets/warning.png"
import door_statuses  from "../../Data/data";


const Zone7 = () => {
  return (
    <div className="Container">
     {Object.entries(door_statuses["ZONE 7"]).map(([door, status]) => (
        <div key={door} className="box">
          <div className={status === 1 ? 'open' : status === 0 ?  'close' :'warning'}>
            <>{status === 1 ? <h1 className='open-status-zone'>Open</h1> : status === 0 ?  <h1 className='close-status-zone'>Close</h1> :<><img src={warningIcon} className="warning-icon-zone" alt="Warning"/><h1>Warning</h1></>}</>
          </div>
          <h4>{door}</h4>
        </div>
      ))}
  </div>
  
  )
}

export default Zone7