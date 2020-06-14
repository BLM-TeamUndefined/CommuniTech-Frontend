import React from 'react';
// import './CategoryList.css';
import Category from '../Category/Category';

function CategoryList(props) {

    const renderCategories = () => {
        props.categories.map(category => {
            return <Category key={category.id} category={category}/>;
        })
    }

    return(
        <div className="CategoryList">
            {
                renderCategories()
            }
        </div>
    );
}


export default CategoryList;
