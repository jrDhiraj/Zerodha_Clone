import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // For navigation
import axios from "axios";

function SearchBar() {
    const [searchItem, setSearchItem] = useState("");
    const [allStocks, setAllStocks] = useState([]); // Store all stocks
    const [searchResults, setSearchResults] = useState([]); // Store search results

    useEffect(() => {
        axios.get("http://localhost:3000/allholding")
            .then(response => { 
                console.log("API Response:", response.data); // Debugging
                if (response.data && response.data.holdings) {
                    setAllStocks(response.data.holdings); 
                } else {
                    console.error("Invalid API response structure");
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const handleInputChange = (e) => {
        setSearchItem(e.target.value);
    };

    const handleSearch = () => {
        if (searchItem.trim() === "") {
            setSearchResults([]); // Reset if search is empty
            return;
        }

        const filteredItems = allStocks.filter(stock =>
            stock.name.toLowerCase().includes(searchItem.toLowerCase())
        );

        setSearchResults(filteredItems); // Update search results
    };

    return (
        <div>
            <div className="input-group search">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Search stock name..."
                    value={searchItem}
                    onChange={handleInputChange}
                />
                <button className="rounded-circle" type="button" onClick={handleSearch}>
                    🔍 Search
                </button>
            </div>

            {/* Display Search Results */}
            <ul>
                {searchResults.length > 0 ? (
                    searchResults.map((stock, index) => (
                        <li key={index}>
                            <Link to={`/stock/${stock.id}`}>
                                <strong>{stock.name}</strong> - ₹{stock.price}
                            </Link>
                        </li>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </ul>
        </div>
    );
}

export default SearchBar;
