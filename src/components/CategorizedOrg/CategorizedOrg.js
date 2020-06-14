import React, {useEffect, useState} from 'react'
import ProjectList from '../ProjectList/ProjectList'

export default function CategorizedOrg(props) {
    console.log(props)

    const [projects, setProjects] = useState([])
    const [render, setRender] = useState(false)

    useEffect (() => {
        fetch(`http://localhost:3000/organizations/${props.org.id}`)
        .then(resp => resp.json())
        .then(orgObject => {
            console.log(orgObject)
            setProjects(orgObject.projects)
          
        
        })
    }, []);

    // const filterProjects = () => {
    //     const filteredProjects = props.projects.filter(project => {
    //         return project.organization_id == props.org.id
    //     })
    //     filteredProjects ?
    //         setProjects(filteredProjects)
    //         : 
    //         console.log('skip setProjects')


    // }

    const renderProjects = () => {
            setRender(!render)
    }

  

    const {name, description, mission, location} = props.org
    return (
        render
        ?
        <>
        <ProjectList 
                projects={projects}
                renderProjects={renderProjects}
            />
        <button onClick={renderProjects}>Close Projects</button>
        </>
        :
        
        <div>
            <p>{name}</p>
            <p>{mission}</p>
            <button onClick={renderProjects}>View Projects</button>
        </div>
    )
}
