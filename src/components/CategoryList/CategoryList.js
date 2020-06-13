import React from 'react';
import './CategoryList.css';
import Category from '../Category/Category';

function CategoryList(props) {
        return(
            <div className="CategoryList">
                {
                props.categories.map(category => {
                    return <Category key={category.id} category={category}/>;
                })
                }
            </div>
        );
}

export default CategoryList;