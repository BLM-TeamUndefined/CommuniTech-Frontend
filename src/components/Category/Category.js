import React from 'react';
import CategorizedOrgs from '../CategorizedOrgs/CategorizedOrgs'
import './Category.css';


class Category extends React.Component {

    state = {
        organizations: undefined,
        projects: undefined,
        renderOrgs: false
    }

    componentDidMount(){
        fetch("http://localhost:3000/organizations")
        .then(resp => resp.json())
        .then(data => {
            console.log(data.organizations)
            // const filteredOrgs = data.organizations.filter(org => org.category === this.props.category.name)
            this.setState({organizations: data.organizations, projects: data.projects } )
            // console.log(organizations[0].category)
            // console.log(props.category)
            
        })
    }

    handleClick = () => {
        // console.log(this.state.organizationsByName);
        this.setState({renderOrgs: true})
        
    }

    handleCategoryRender = () => {
        this.props.handleCategoryRender()
    }
    render(){
        return(
         
            <>
            {
             this.state.renderOrgs ?
                <>
                <CategorizedOrgs 
                organizations = {this.state.organizations}
                projects = {this.state.projects}
                />
                <div className="Category">
                <div className="image-container">
                    <h2> {this.props.category.name} </h2>
                    <img src={this.props.category.image} alt='' onClick={this.handleClick}/>
                   
                </div>
                </div>
                </>
                    
            
                :
                <div className="Category">
                <div className="image-container">
                    <h2> {this.props.category.name} </h2>
                    <img src={this.props.category.image} alt='' onClick={this.handleClick}/>
                   
                </div>
            </div>
           
            }
            </>
           
        )
    }
}

export default Category;
