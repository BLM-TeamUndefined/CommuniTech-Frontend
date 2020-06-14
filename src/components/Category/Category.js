import React, {useState, useEffect} from 'react';
import CategorizedOrgs from '../CategorizedOrgs/CategorizedOrgs'
import './Category.css';


function Category(props) {

    const [organizationsByName, setOrganizations] = useState([])

    useEffect(()=> {
        fetch("http://localhost:3000/organizations")
        .then(resp => resp.json())
        .then(organizations => {
            setOrganizations(organizations.filter(org => {
              return org.category === props.category.name
            }))
        })
    })

        return(
            <div className="Category">
                <div className="image-container">
                    <h2> {props.category.name} </h2>
                    <img src={props.category.image} alt=''/>
                        <CategorizedOrgs
                            organizationsByName = {organizationsByName}

                        />
                           
                        
                </div>
            </div>
        );
}

export default Category;
