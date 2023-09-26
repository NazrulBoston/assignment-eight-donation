import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";



const CardDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    //    console.log(id);
    console.log(cards)

    const card = cards.find(card => card.id === id);
    console.log(card)
    const {picture, title, textColor, description, price } = card;
 
    const backgroundColor = {
        backgroundColor: textColor,
    };

    const handleClick = () => {
        const donatedItems = []
        const getDontedCard = JSON.parse(localStorage.getItem('donation-items'))
        if (!getDontedCard) {
            donatedItems.push(card)
            localStorage.setItem('donation-items', JSON.stringify(donatedItems))
            Swal.fire(
                'Item added',
                '',
                'success'
              )
        } else {
            const isExist = getDontedCard.find(card => card.id === id)
            if (!isExist) {
                donatedItems.push(...getDontedCard, card)
                localStorage.setItem('donation-items', JSON.stringify(donatedItems))
                Swal.fire(
                    'Item added',
                    '',
                    'success'
                  )
            }else{
                Swal.fire(
                    'Duplicate Item',
                    '',
                    'error'
                  )
            }
        }
    }

    return (
        <div>
            <div>
                <div className="max-w-screen-xl mx-auto mt-12 mb-12 p-3">
                    <div>
                        <div className="hero h-[80vh] relative" style={{ backgroundImage: `url(${ picture })`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="hero-overlay bg-opacity-60 absolute  top-[75%] h-[25%] inset-0"></div>


                            <button onClick={handleClick} className="btn absolute top-[85%] md:top-[80%] right-[60%] md:right-[80%] lg:right-[85%] text-white font-bold outline-none border-none" style={backgroundColor}>Donate {price}</button>

                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-black mb-6 mt-20">{title}</h1>
                    <p className="text-justify text-black">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;