import { Link } from "react-router-dom";


const Cards = ({ card }) => {

    const { picture, title, categoryItem, categoryBgColor, cardBgColor, textColor, price, id } = card;

    const cardStyle = {
        backgroundColor: cardBgColor,
    };
    const color = {
        color: textColor,
    };
    const btnBackgroundColor = {
        backgroundColor: textColor,
    };
    const categoryBackgroundColor = {
        backgroundColor: cardBgColor,
    }



    return (
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style={cardStyle}>
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                    src={picture}
                    alt="image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-6" style={color}>
                <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal antialiased w-24 text-center rounded-md" style={categoryBackgroundColor}>
                    {categoryItem}
                </h6>
                <h4 className="mb-2 block font-sans text-2xl leading-snug tracking-normal text-blue-gray-900 antialiased text-black font-bold">
                    {title}
                </h4>
                <p>${price}</p>

                <a className="inline-block" href="#">
                    <Link to={`/cards/${id}`}>
                        <button
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  transition-all text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-5"
                            type="button" style={btnBackgroundColor}
                        >
                            View Details
                        </button>
                    </Link>
                </a>
            </div>
        </div>
    );
};

export default Cards;