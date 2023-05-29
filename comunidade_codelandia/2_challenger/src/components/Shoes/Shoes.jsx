import React from "react";
import './style.css';

function Shoes(props) {
    const {image} = props;
    return (
       <div className="container-3">
         <div className="box-4">
              <img src={image} alt="Air jordan" className="img-shoe" />
        </div>
       </div>
    )
}


export default Shoes;
