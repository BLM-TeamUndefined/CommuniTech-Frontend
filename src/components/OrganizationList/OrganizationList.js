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
          .then(organizationsArray => {
              this.setState({organizations: organizationsArray})
        })
    }

    render(){
        console.log(this.state.organizations);
        return(
            <div className="OrganizationList">
                {
                this.state.organizations.map(org => {
                    return <Organization key={org.id} org={org}/>;
                })
                }
            </div>
        );
    }
        
    
    
}

export default OrganizationList;