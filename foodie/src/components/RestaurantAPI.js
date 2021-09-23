import React, { useEffect, useState, useRef } from "react";
import RestaurantPage from "../pages/RestaurantPage";


function RestaurantAPI() {
    const [place, setPlace] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('')
    let mounted = useRef()

    useEffect(() => {
        if (mounted.current) {
            getRestaurant();
            console.log("getRestaurant")
        }
        mounted.current = true;
    }, [query]);

    const getRestaurant = async () => {
        fetch(`https://documenu.p.rapidapi.com/restaurants/zip_code/${query}`, {
            "method": "GET",
            "headers": {
                "x-api-key": "0a4964bb0919772be96300dd3ef6bdde",
                "x-rapidapi-host": "documenu.p.rapidapi.com",
                "x-rapidapi-key": "c282c71dd0msh730ea86915ec62cp19db59jsnc4dec27e691c"
            }
        })
            .then(response => response.json())
            .then(data => {
                setPlace(data.data)
                console.log(data)
                console.log(data.data)
            })
            .catch(err => {
                console.error(err);
            });
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <div>
            <h1 className="rest-title">Restaurants</h1>
            <p className="rest-text">Enter a zipcode to search for nearby restaurants!</p>
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar mr-2" type="text" value={search} onChange={updateSearch} />
                <button className="search-btn btn-dark" type="submit">Search</button>
            </form>
            <div>
                {place.map(item => (
                    <RestaurantPage
                        key={item.restaurant_name}
                        name={item.restaurant_name}
                        address={item.address.formatted}
                        cuisine={item.cuisines}
                        price={item.price_range}
                        hours={item.hours}
                        phone={item.restaurant_phone}
                        website={item.restaurant_website}
                    />
                ))
                }
            </div>
        </div >
    )
}

export default RestaurantAPI;