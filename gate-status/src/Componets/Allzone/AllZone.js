import React from 'react'
import "./AllZone.css"
import warningIcon from "../../Assets/warning.png"

const AllZone = ({door_statuses}) => {
  return (
    <>

<div className='tableBox'>
  {Object.entries(door_statuses).map(([zone, doors], index) => (
    index < 3 && (
      <>
        <table className="tables" key={zone}>
          <tr>
            <td colSpan="2">
              <h2>{zone}</h2>
            </td>
          </tr>

          {Object.entries(doors).map(([door, status]) => (
            <tr key={`${zone}-${door}`}>
              <td>{door}</td>
              <td className="status">{status === 1 ? <p className='open-status'>Open</p> : status === 0 ?  <p className='close-status'>Close</p> :<img src={warningIcon} className="warning-icon" alt="Warning"/>}</td>
            </tr>
          ))}
        </table>
      </>
    )
  ))}
</div>

<div className='tableBox'>
  {Object.entries(door_statuses).map(([zone, doors], index) => (
    index >= 3 && index < 5 && (
      <>
        <table className="tables" key={zone}>
          <tr>
            <td colSpan="2">
              <h2>{zone}</h2>
            </td>
          </tr>

          {Object.entries(doors).map(([door, status]) => (
            <tr key={`${zone}-${door}`}>
              <td>{door}</td>
              <td className="status">{status === 1 ? <p className='open-status'>Open</p>: status === 0 ?  <p className='close-status'>Close</p> : <img src={warningIcon} className="warning-icon" alt="Warning"/>}</td>
            </tr>
          ))}
        </table>
      </>
    )
  ))}
</div>

<div className='tableBox'>
  {Object.entries(door_statuses).map(([zone, doors], index) => (
    index >= 5 && index < 9 && (
      < >
        <table className="tables" key={zone}>
          <tr>
            <td colSpan="2">
              <h2>{zone}</h2>
            </td>
          </tr>

          {Object.entries(doors).map(([door, status]) => (
            <tr key={`${zone}-${door}`}>
              <td>{door}</td>
              <td className="status">{status === 1 ? <p className='open-status'>Open</p> : status === 0 ? <p className='close-status'>Close</p> :<img src={warningIcon} className="warning-icon" alt="Warning"/>}</td>
            </tr>
          ))}
        </table>
      </>
    )
  ))}
</div>

              

          
          

          


          
                     
    </>
  )
}

export default AllZone
