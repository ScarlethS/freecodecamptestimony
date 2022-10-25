import React from "react";
import '../stylesheets/testimony.css';

function Testimony(props){
    return (
        <div className="testimony-container">
            <img 
            className="testimony-image" src={require(`../images/testimonio-${props.image}.png`)}  alt={props.imagealt} />
            <div className="testimony-text-container">
                <p className="testimony-name"><strong>{props.name}</strong> in {props.pais}
                </p>
                <p className="charge-name">{props.position} at <strong>{props.company}</strong></p>
                <p className="text-name">"{props.test}{props.testimony}<strong>{props.phrase}</strong>"</p>
            </div>
        </div>
    );
}

export default Testimony;