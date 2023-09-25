import { useEffect, useState } from "react";
import Category from "../Category/Category";


const CategoryList = () => {
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])

    return (
        <div>

            <div className="grid grid-cols-4 gap-4 " >
                {
                 categorys.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>


        </div>

    );
};

export default CategoryList;