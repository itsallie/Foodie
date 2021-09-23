import React from "react";

function RestaurantPage({ name, address, cuisine, price, hours, phone, website }) {
    return (
        <div className="rest-content">
            <h1 className="rest-name">{name}</h1>
            <p className="rest-details">{address}</p>
            <p className="rest-details">{cuisine}</p>
            <p className="rest-details">{price}</p>
            <p className="rest-details">{hours}</p>
            <p className="rest-details">{phone}</p>
            <p className="rest-details"><a href={website}>{website}</a></p>
        </div>
    )
}

export default RestaurantPage;