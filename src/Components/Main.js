import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);

    const searchBook = () => {
        axios.get(`https://frappe.io/api/method/frappe-library?page=2&title=${search}`)
            .then(res => {
                setData(res.data.message); // Extract data from the response
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like <br /> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Enter Your Book Name"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button onClick={searchBook}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
                <Card book={bookData} />
            </div>
        </>
    );
};

export default Main;