import React from "react";
import "./Button.css"

const Button = ({setZone}) => {
  return (
    <div className="Buttons">
      <button onClick={()=>{setZone(1)}}>ALL ZONE</button>
      <button onClick={()=>{setZone(2)}}>ZONE 1</button>
      <button onClick={()=>{setZone(3)}}>ZONE 2</button>
      <button onClick={()=>{setZone(4)}}>ZONE 3</button>
      <button onClick={()=>{setZone(5)}}>ZONE 4</button>
      <button onClick={()=>{setZone(6)}}>ZONE 5</button>
      <button onClick={()=>{setZone(7)}}>ZONE 6</button>
      <button onClick={()=>{setZone(8)}}>ZONE 7</button>
      <button onClick={()=>{setZone(9)}}>ZONE 8</button>
      <button id="accept-button">ACCEPT</button>
    </div>
  );
};

export default Button;
