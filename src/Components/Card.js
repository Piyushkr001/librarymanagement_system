import React, { useState } from "react"; // Correct import statement
import Modal from "./Modal";

const Card = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState(null); // Initialize with null, not undefined

    const openModal = (item) => {
        setItem(item);
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
    };

    return (
        <>
            {book.map((item) => {
                const thumbnail = item.image_url; // Update this according to your API response structure
                const amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

                if (thumbnail && amount) {
                    return (
                        <div className="card" key={item.id} onClick={() => openModal(item)}>
                            <img src={thumbnail} alt="" />
                            <div className="bottom">
                                <h3 className="title">{item.volumeInfo.title}</h3>
                                <p className="amount">&#8377;{amount}</p>
                            </div>
                        </div>
                    );
                }
                return null; // Return null if conditions are not met
            })}
            <Modal show={show} item={bookItem} onClose={closeModal} />
        </>
    );
};

export default Card;