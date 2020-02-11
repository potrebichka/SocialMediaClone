import React from "react";
import WallSearchBar from "./WallSearchBar";
import Tweet from "./Tweet";

function ColumnMiddle(){
  var ColMiddleStyling = 
  {
    position: "relative",
    // left: "32%",
    width: "40%",
    display: "inline-block",
    marginLeft: "10px"
  }
  return (
    <div style={ColMiddleStyling}>
      <WallSearchBar />
      <Tweet img="https://comps.canstockphoto.com/user-icon-vector-illustration-clip-art-vector_csp53752766.jpg" title="Lorem ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "/>
      <Tweet img="https://banner2.cleanpng.com/20180516/iow/kisspng-computer-icons-users-group-clip-art-5afbdcbbb29963.3191974715264554837316.jpg" title="Lorem ipsum" description="Lorem ipsum dolor sit amet, <hr/> Lorem ipsum"/>
      <Tweet img="https://library.kissclipart.com/20180831/ewq/kissclipart-fa-fa-users-clipart-user-workflow-921f86e04296eb4f.jpg" title="Lorem ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "/>
      <Tweet img="https://comps.canstockphoto.com/user-icon-vector-illustration-clip-art-vector_csp53752766.jpg" title="Lorem ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "/>
      <Tweet img="https://cdn3.iconfinder.com/data/icons/angular-ui/512/user-512x512px.png" title="Lorem ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "/>

    </div>
  );
}

export default ColumnMiddle;