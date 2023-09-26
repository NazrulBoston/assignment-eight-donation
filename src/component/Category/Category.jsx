import { Link } from "react-router-dom";


const Category = ({ category }) => {
    const { picture, categoryItem, title, categoryBgColor, cardBgColor, textColor, description, price, id } = category;
    const bgColor = {
        backgroundColor: cardBgColor,
    }
    const categoryText = {
        color: textColor,
    }

    const categoryBg = {
        backgroundColor: categoryBgColor,
    }
   

    return (
        <Link to={`/cards/${id}`}>

            <div className="card card-compact shadow-xl " style={bgColor}>
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body" style={categoryText}>
                    <p className="w-20 text-center rounded" style={categoryBg}>{categoryItem}</p>
                    <h2 className="card-title">{title}</h2>

                </div>
            </div>

        </Link>
    );
};

export default Category;