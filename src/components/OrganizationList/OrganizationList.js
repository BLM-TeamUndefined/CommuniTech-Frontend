import React from 'react';
import './OrganizationList.css';
import Organization from '../Organization/Organization';

class OrganizationList extends React.Component {

    state = {
        organizations: []
    }

     componentDidMount(){

      
        fetch("http://localhost:3000/organizations")
          .then(resp => resp.json())
          .then(data => {
              console.log(data)
              this.setState({organizations: data})
        })
    }

    mapOrgs =()=>{
        return this.state.organizations.map(org => {  
            return <Organization key={org.id} org={org} projects={org.projects}/>;
        })
    }

    render(){
        console.log(this.state.organizations)
        return(
            <div className="OrganizationList">
                {
                    this.mapOrgs()
                }
            </div>
        );
    }
        
    
    
}

export default OrganizationList;