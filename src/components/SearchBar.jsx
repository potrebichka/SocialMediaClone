import React from "react";

function NavBar(){
    var styling = 
    {
      display: "inline",
      float: "right",
      color: "#C3C5C7"
    }
    var inputStyling =
    {
        border: "2px solid #33AAFF",
        borderRadius: "20px",
        padding: "5px 15px",
        fontSize: "16px"
    }
    var tweetStyling =
    {
        border: "2px solid #3AF",
        borderRadius: "20px",
        padding: "5px 25px",
        marginLeft: "30px",
        color: "slategrey",
        fontSize: "16px" 
    }
    return (
      <div style={styling}>
      <input style={inputStyling} placeholder="Search"/>
      <button style={tweetStyling}>Tweet</button>
    </div>
  );
}

export default NavBar;