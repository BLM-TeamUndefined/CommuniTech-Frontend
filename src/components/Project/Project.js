import React from 'react';
import './Project.css';


function Project(props) {

    console.log(props);
    

    return(
        <div className="Project">
            <h2> {props.project.name} </h2>
            <div className="Project-information">
                <p> {props.project.description} </p>
                <p> {props.project.expectations} </p>
                <p> {props.project.timeline} </p>
                <p> {props.project.team_size} </p>
            </div>
        </div>
    );
}

export default Project;
