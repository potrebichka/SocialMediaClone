import React from "react";
import NavButton from "./NavButton";
import SearchBar from "./SearchBar";

function NavBar(){
  var styling = 
  {
    display: "block",
    margin: "20px 0px"
  }
  return (
    <div style={styling}>
      <NavButton title="Home"/>
      <NavButton title="Notifications"/>
      <NavButton title="Messages"/>
      <SearchBar/>
    </div>
  );
}

export default NavBar;