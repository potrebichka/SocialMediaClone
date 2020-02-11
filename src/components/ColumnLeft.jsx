import React from "react";
// import UserAbout from "./UserAbout";
import UserInfo from "./UserInfo";
import UserAbout from "./UserAbout";

function ColumnLeft(){
  var ColLeftStyling = 
  {
    margin: "20px 0px",
    width: "30%",
    display: "inline-block",
    paddingTop: "-70px"
  }
  return (
    <div style={ColLeftStyling}>
      <UserInfo/>
      <UserAbout/>
    </div>
  );
}

export default ColumnLeft;