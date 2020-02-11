import React from "react";


function UserAbout(){
  var UserAboutStyling = 
  {
    border: "2px solid #C3C5C7",
    height: "320px",
    // marginTop: "-35px"
  }

  var ParagraphStyle =
  {
      padding: "10px 20px",
      color: "slategrey",
      fontFamily: "Arial",
      fontSize: "15px",
      lineHeight: "20px",
      letterSpacing: ".7px"
  }


  return (
    <div style={UserAboutStyling}>
        <p style={ParagraphStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
    </div>
  );
}

export default UserAbout;