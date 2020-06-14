import React, { useState } from 'react'
import CategorizedOrg from '../CategorizedOrg/CategorizedOrg'


function CategorizedOrgs(props) {

    const [displayOrgs, setDisplayOrgs] = useState(false)

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

    const handleClick = () => {
        props.handleClick()
    }
    

    return (

        
        <div>
         {categoryOrgs()}
        <button onClick={handleClick}>Back to Category</button>
        </div>
    )
}

export default CategorizedOrgs;
