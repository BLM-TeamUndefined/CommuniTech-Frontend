import React from 'react';
import './OrganizationList.css';
import Organization from '../Organization/Organization';

function OrganizationList() {
        return(
            <div className="OrganizationList">
                {
                this.props.orgs.map(org => {
                    return <Organization key={org.id} org={org}/>;
                })
                }
            </div>
        );
}

export default OrganizationList;