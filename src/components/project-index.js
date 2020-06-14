import React from 'react'
import { ListGroup, Dropdown, Form } from 'react-bootstrap';
import ProjectList from './ProjectList/ProjectList'



class ProjectIndex extends React.Component{
    render(){
        return(
            <div>
                <div className="navbar">
                <a href="/"><img className="logo" src={require("./logo.png")}/></a>

                    
                    <div className="nav-box">
                        <a className="nav-option two exp" href="#" >Explore</a>
                        <a className="nav-option two" href="#" >My Projects</a>
                        {/* add name from fetch below */}
                        <a className="nav-option two" href="#" >Kaya</a>
                    </div>
                </div>
               <div className="graphic">
                   <h2 className="graphic-title">Find and connect.</h2><br/>
                   <p className="graphic-text">Use the search and filters to find impact opportunities to be apart of.</p>
                <img className="graphic-img" src={require('./analytic_graphic.png')}/>
               </div>

               <div className="filter-options">
                    <ListGroup horizontal>
                        <ListGroup.Item>
                            <Dropdown>
                                <Dropdown.Toggle variant="muted">Organization</Dropdown.Toggle>
                            </Dropdown> 
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Dropdown>
                                <Dropdown.Toggle variant="muted">Category</Dropdown.Toggle>
                            </Dropdown> 
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Dropdown>
                                <Dropdown.Toggle variant="muted">Skills</Dropdown.Toggle>
                            </Dropdown> 
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Dropdown>
                                <Dropdown.Toggle variant="muted">Time</Dropdown.Toggle>
                            </Dropdown> 
                        </ListGroup.Item>
                    </ListGroup>

                    <div className="searchbar">
                        <Form.Control placeholder="Search all opportunities"></Form.Control>
                    </div>
                    <div className="showing">Showing all Projects</div>

               </div>

                <ProjectList/>

            </div>
        )
    }     
        
    
}

export default ProjectIndex