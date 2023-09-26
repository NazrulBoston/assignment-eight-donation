import { useState } from "react";


const Donation = () => {

    const[ donationCards, setDonationCards] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        const storedCards = JSON.parse(localStorage.getItem('donation-items'))
        setDonationCards(storedCards)
    }, [])
    return (
        <div>
            <h2>This is donation page</h2>
        </div>
    );
};

export default Donation;