import "./App.css";
import Allzones from'./Componets/Allzone/AllZone'
import Button from './Componets/buttons/Button'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Main from './Componets/main-div/Main'
import { useState } from "react";


function App() {
  const [zone,setZone] = useState(1)
  return (
    <div className="App">
      <h1 className="heading">MAGAZINE ACCESS ALARM SYSTEM</h1>
       <Main zone={zone} />
       
    </div>
  );
}

export default App;
