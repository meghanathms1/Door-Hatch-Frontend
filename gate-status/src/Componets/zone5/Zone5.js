import React from 'react'
import "./Zone5.css"
import warningIcon from "../../Assets/warning1.png"
import door_statuses  from "../../Data/data";
const Zone5 = () => {
  return (
    <div className="Container">
     {Object.entries(door_statuses["ZONE 5"]).map(([door, status]) => (
        <div key={door} className="box">
          <div className={status === 1 ? 'open' : status === 0 ?  'close' :'warning'}>
            <>{status === 1 ? <h1 className='open-status-zone'>Open</h1> : status === 0 ?  <h1 className='close-status-zone'>Close</h1> :<><img src={warningIcon} className="warning-icon-zone" alt="Warning"/><h1>Warning</h1></>}</>
          </div>
          <h5>{door}</h5>
        </div>
      ))}
  </div>
  )
}

export default Zone5
