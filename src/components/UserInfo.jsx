import React from "react";


function UserInfo(){
  var UserInfoStyling = 
  {
    margin: "20px 0px",
    border: "2px solid #C3C5C7",
    height: "210px",
    marginTop: "-35px"
  }

  var BlueDivStyle =
  {
      backgroundColor: "#33AAFF",
      height: "110px"
  }

  var ImageStyle =
  {
      width: "90px",
      marginTop: "-60px",
      border: "2px solid white",
      borderRadius: "50px",
      marginLeft: "16px"
  }

  var NameStyle =
  {
    color: "slategrey",
    fontSize: "18px",
    fontWeight: "bold",
    fontFamily: "Arial",
    marginTop: "-20px",
    display: "inline-block",
    marginLeft: "10px"
  }
  
  var LinkStyle =
  {
      marginTop: "11px"
  }

  var SpanStyle =
  {
      color: "slategrey",
      fontSize: "12px",
      marginLeft: "24px",
      fontFamily: "Arial",
      marginTop: "33px"
  }

  return (
    <div style={UserInfoStyling}>
        <div style={BlueDivStyle}/>   
        <img style={ImageStyle} src="https://bluelti.com/wp-content/uploads/2018/06/group-1824145_640.png"></img>
        <div style={NameStyle}>Kellie A. Corrigan</div>
        <div style={LinkStyle}>
            <span style={SpanStyle}>TWEETS</span>
            <span style={SpanStyle}>FOLLOWIGN</span>
            <span style={SpanStyle}>FOLLOWERS</span>
        </div>
    </div>
  );
}

export default UserInfo;