import React from "react";
import PropTypes from "prop-types";

function Tweet(props){
    var styling = 
    {
        //   display: "block",
        border: "2px solid #C3C5C7",
        padding: "10px",
        paddingBottom: "30px"
    }

    var ImgStyling =
    {
        width: "45px",
        padding: "10px",
        float: "left"
    }
    var TitleStyle =
    {
        fontWeight: "bold",
        paddingTop: "-50px",
        marginLeft: "10px",
    }
    var DescriptionStyle = 
    {
        marginLeft: "10px"
    }

    return (
        <div style={styling}>
            <img style={ImgStyling} src={props.img}/>
            <span style={TitleStyle}>{props.title}</span>
            <br/>
            <span style={DescriptionStyle}>{props.description}</span>
            
        </div>
  );
}

Tweet.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string
  };

export default Tweet;