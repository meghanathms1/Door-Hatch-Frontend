import React from 'react'
import "./Main.css"
import Button from "../buttons/Button"
import Allzone from "../Allzone/AllZone"

const Main = ({zone}) => {
    if(zone === 1){

        return (
    
                <div className='Main'>
                   <section className="zones">
                     <Allzone/>
                    </section>
                   <Button/>
                </div>
              ) 
    }
    else  if(zone === 2){

        return (
    
                <div className='Main'>
                   <section className="zones">
                    /// ZONE 1
                    </section>
                   <Button/>
                </div>
              ) 
    }
//   
}

export default Main
