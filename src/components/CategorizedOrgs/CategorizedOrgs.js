import React from 'react'
import CategorizedOrg from '../CategorizedOrg/CategorizedOrg'


function CategorizedOrgs(props) {

    const categoryOrgs = () => {
        console.log(props)
        return props.organizations.map(organization => {
           
            return <CategorizedOrg
                key={organization.id}
                org={organization}
                projects={props.projects}

            />
        })
    }
    

    return (
        <div>
         {categoryOrgs()}
        </div>
    )
}

export default CategorizedOrgs;
