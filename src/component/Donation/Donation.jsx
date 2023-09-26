import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";



const Donation = () => {

    const [donationCards, setDonationCards] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        const storedCards = JSON.parse(localStorage.getItem('donation-items'))
        setDonationCards(storedCards)
    }, [])
    return (
        <div className="flex flex-col  items-center justify-center " >
            <div className="grid grid-cols-1 px-2 lg:grid-cols-2 gap-6 mt-20 ">
                {
                    showAll ? donationCards.map(card => <Cards key={card.id} card={card}></Cards>)
                        : donationCards.slice(0, 4).map(card => <Cards key={card.id} card={card}></Cards>)
                }
            </div>

            <div className="mt-6">
                {donationCards.length > 4 && (
                    <button onClick={() => setShowAll(!showAll)} className={showAll ? 'hidden' : 'btn btn-secondary text-white font-bold'}>Show All</button>
                )}
            </div>


        </div>
    );
};

export default Donation;