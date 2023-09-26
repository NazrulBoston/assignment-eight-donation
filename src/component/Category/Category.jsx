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
    // const handleAddDonation = ()=>{

    //     const addDonationArray = [];

    //     const donationItem = JSON.parse(localStorage.getItem('items'))
    //     if(!donationItem){
    //         addDonationArray.push(category)
    //         localStorage.setItem('items', JSON.stringify(addDonationArray))
    //     }  
    //     else {
    //         const isExist = donationItem.find(category => category.id === id)
    //         if (!isExist) {
    //             items.push(...getPhone, category)
    //             localStorage.setItem('phones', JSON.stringify(items))
    //             return alert('Item added')
    //         }else{
    //             return alert('Duplicate Item')
    //         }
    //     }

    // }

    return (
        <Link to={`/cards/${id}`}>

            <div className="card card-compact shadow-xl " style={bgColor}>
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body" style={categoryText}>
                    <p className="w-16 text-center rounded" style={categoryBg}>{categoryItem}</p>
                    <h2 className="card-title">{title}</h2>

                </div>
            </div>

        </Link>
    );
};

export default Category;