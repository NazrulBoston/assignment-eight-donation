

const Category = ({ category }) => {
    const { picture, categoryItem, title, categoryBgColor, cardBgColor, textColor, description, price } = category;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
              <p>{categoryItem}</p>
                <h2 className="card-title">{title}</h2>
               
                
                
            </div>
        </div>
    );
};

export default Category;