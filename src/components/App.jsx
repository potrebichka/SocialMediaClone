import React from "react";
import NavBar from "./NavBar";
import Body from "./Body";

function App(){
  var hrStyling =
  {
    color: "#C3C5C7",
    borderTop: "2px solid #C3C5C7",
    margin: "30px 0px"
  }
  return (
    <div>
      <NavBar/>
      <hr style={hrStyling}/>
      <Body/>
    </div>
  );
}

export default App;