import React, {useState, useEffect} from 'react';

import './Organization.css';
import ProjectList from '../ProjectList/ProjectList';


//add social media links to organization information div
function Organization(props) {

    const [projects, setProjects] = useState(undefined)
    const [renderOrgs, setRenderOrgs] = useState(false)
 
    // useEffect(() => {
    //     console.log(props.projects)
    //     fetch("http://localhost:3000/projects")
    //     .then(resp => resp.json())
    //     .then(projects => {
    //     // const filteredProjects = projects.filter(project => project.name === props.org.project )
           
              
    //     //    })
    //     //    setProjects(projects)
         
    //     })})




    const handleClick = (projects) => {
        const filteredProjects = projects.filter(project => project.name === props.org.project )
        // setProjects(filteredProjects)
    }
    setRenderOrgs(true)
    
    // console.log(projects)
    // const handleProjectRender
        return(
            <>
            <button onClick={handleClick}>View Projects</button>
            {
             
            <div className="Organization">
                <div className="image-container">
                    <h2> {props.org.name} </h2>
                    <img src={props.org.image} alt=''/>
                </div>
                <div className="Organization-information">
                    <p> {props.org.mission} </p>
                </div>
            </div>
            }
            </>
        );
}

export default Organization;
