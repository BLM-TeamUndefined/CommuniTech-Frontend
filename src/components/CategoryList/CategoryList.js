import React, {useState} from 'react';
// import './CategoryList.css';
import Category from '../Category/Category';

function CategoryList(props) {

    const [displayCategories, setDisplayCategories] = useState(true)

    const renderCategories = () => {
        

    
        return props.categories.map(category => {
            return <Category key={category.id} category={category} handleCategoryRender={handleCategoryRender}/>;
        })
    }

    const handleCategoryRender = () => {
        setDisplayCategories()
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
