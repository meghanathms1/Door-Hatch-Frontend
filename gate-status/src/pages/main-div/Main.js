import { useState } from "react";
import "./Main.css";
import Button from "../../Componets/buttons/Button";
import Allzone from "../../Componets/Allzone/AllZone";

import Zone1 from "../../Componets/zone1/Zone1.js";
import Zone2 from "../../Componets/zone2/Zone2.js";
import Zone3 from "../../Componets/zone3/Zone3.js";
import Zone4 from "../../Componets/zone4/Zone4.js";
import Zone5 from "../../Componets/zone5/Zone5.js";
import Zone6 from "../../Componets/zone6/Zone6.js";
import Zone7 from "../../Componets/zone7/Zone7.js";
import Zone8 from "../../Componets/zone8/Zone8.js";
import door_statuses from "../../Data/data.js"



const Main = () => {
  const [zone,setZone] = useState(1)
  if (zone === 1) {
    return (
      <>
        <h1 className="heading">MAGAZINE ACCESS ALARM SYSTEM</h1>
        <div className="Main">
          <section className="zones">
            {console.log(door_statuses)}

            <Allzone door_statuses={door_statuses}/>
          </section>
          <Button setZone={setZone}/>
        </div>
      </>
    );
  } else if (zone === 2) {
    return (
      <div className="Main">
        <h1 className="heading">Zone1</h1>
        <section className="zones">
          <Zone1 />
        </section>
        <Button setZone={setZone}/>
      </div>
    );
  } else if (zone === 3) {
    return (
      <div className="Main">
        <h1 className="heading">Zone 2</h1>
        <section className="zones">
          <Zone2/>
        </section>
        <Button setZone={setZone}/>
      </div>
    );
  } else if (zone === 4) {
    return (
      <div className="Main">
        <h1 className="heading">Zone 3</h1>
        <section className="zones">
          <Zone3/>
        </section>
        <Button setZone={setZone}/>
      </div>
    );
  }

  else if (zone === 5) {
    return (
      <div className="Main">
        <h1 className="heading">Zone 4</h1>
        <section className="zones">
          <Zone4/>
        </section>
        <Button setZone={setZone}/>
      </div>
    );
  }

  else if (zone === 6) {
    return (
      <div className="Main">
        <h1 className="heading">Zone 5</h1>
        <section className="zones">
          <Zone5/>
        </section>
        <Button setZone={setZone}/>
      </div>
    );
  }
  

  else if (zone === 7) {
    return (
      <div className="Main">
        <h1 className="heading">Zone 6</h1>
        <section className="zones">
          <Zone6/>
        </section>
        <Button setZone={setZone}/>
      </div>
    );
  }
  else if (zone === 8) {
    return (
      <div className="Main">
        <h1 className="heading">Zone 7</h1>
        <section className="zones">
         <Zone7/>
        </section>
        <Button setZone={setZone}/>
      </div>
    );
  }
  else if (zone === 9) {
    return (
      <div className="Main">
        <h1 className="heading">Zone 8</h1>
        <section className="zones">
         <Zone8/>
        </section>
        <Button setZone={setZone}/>
      </div>
    );
  }
};

export default Main;
