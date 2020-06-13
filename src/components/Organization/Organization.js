import React from 'react';
import './Organization.css';


//add social media links to organization information div
function Organization() {
        return(
            <div className="Organization">
                <div className="image-container">
                    <h2> {this.props.org.name} </h2>
                    <img src={this.props.org.image} alt=''/>
                </div>
                <div className="Organization-information">
                    <p> {this.props.org.mission} </p>
                </div>
            </div>
        );
}

export default Project;
