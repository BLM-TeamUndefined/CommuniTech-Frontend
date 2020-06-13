import React from 'react';
import './Category.css';


function Category() {
        return(
            <div className="Category">
                <div className="image-container">
                    <h2> {this.props.category.name} </h2>
                    <img src={this.props.category.image} alt=''/>
                </div>
            </div>
        );
}

export default Category;
