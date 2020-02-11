import React from "react";
import ColumnLeft from "./ColumnLeft";
import ColumnMiddle from "./ColumnMiddle";

function Body(){
  var bodyStyling = 
  {
    display: "block",
    margin: "20px 0px"
  }
  return (
    <div style={bodyStyling}>
      <ColumnLeft/>
      <ColumnMiddle/>
      {/* <ColumnRight/> */}
    </div>
  );
}

export default Body;