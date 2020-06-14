import React from 'react';
import './Organization.css';


//add social media links to organization information div
function Organization(props) {
        return(
            <div className="Organization">
                <div className="image-container">
                    <h2> {props.org.name} </h2>
                    <img src={props.org.image} alt=''/>
                </div>
                <div className="Organization-information">
                    <p> {props.org.mission} </p>
                </div>
            </div>
        );
}

export default Organization;
