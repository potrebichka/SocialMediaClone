import React from "react";
import PropTypes from "prop-types";

function NavButton(props){
    var styling = 
    {
      display: "inline",
      color: "slategrey",
      padding: "10px 20px",
      border: "2px solid #C3C5C7",
      fontFamily: "Arial",
      margin: "20px -1px"
    }
    return (
      <div style={styling}>
        {props.title}
    </div>
  );
}

NavButton.propTypes = {
    title: PropTypes.string.isRequired
  };

export default NavButton;