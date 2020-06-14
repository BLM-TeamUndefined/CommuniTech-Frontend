import React from 'react';
import './OrganizationList.css';
import Organization from '../Organization/Organization';

class OrganizationList extends React.Component {

    state = {
        organizations: [],
        projects: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/organizations")
          .then(resp => resp.json())
          .then(data => {
              this.setState({organizations: data.organizations, projects: data.projects })
        })
    }

    render(){
        console.log(this.state.organizations);
        return(
            <div className="OrganizationList">
                {
                this.state.organizations.map(org => {  
                    let filteredProjects = this.state.projects.filter(project => project.name === this.props.org.project)
                    return <Organization key={org.id} org={org} projects={filteredProjects}/>;
                })
                }
            </div>
        );
    }
        
    
    
}

export default OrganizationList;