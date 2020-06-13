import React from 'react';
import './Project.css';


function Project() {
        return(
            <div className="Project">
                <h2> {this.props.project.name} </h2>
                <div className="Project-information">
                    <p> {this.props.project.description} </p>
                    <p> {this.props.project.expectations} </p>
                    <p> {this.props.project.timeline} </p>
                    <p> {this.props.project.team_size} </p>
                </div>
            </div>
        );
}

export default Project;
