import React from "react";

function WallSearchBar(){
    var styling = 
    {
        backgroundColor: "#9FD9F8",
        display:"block",
        paddingBottom: "20px", 
        color: "#9FD9F8",

    }
    var RedSquareStyle =
    {
        backgroundColor: "maroon",
        width: "35px",
        height: "35px",
        // display: "inline-block",
        float:"left",
        margin: "20px 40px"
    }
    var InputStyle =
    {
        display: "inline-block",
        width: "240px",
        height: "35px",
        border: "1.5px solid #2FB5FD",
        marginTop: "20px",
        color: "#9FD9F8",
        padding: "0px 20px"
       }
    return (
        <div style={styling}>
            <div style={RedSquareStyle}></div>
            <input style={InputStyle} placeholder="What's happening?"></input>
        </div>
  );
}

export default WallSearchBar;