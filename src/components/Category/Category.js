import React from 'react';
import './Category.css';


function Category(props) {
        return(
            <div className="Category">
                <div className="image-container">
                    <h2> {props.category.name} </h2>
                    <img src={props.category.image} alt=''/>
                </div>
            </div>
        );
}

export default Category;
