import React, { useState } from "react";
import PopUp from "../components/PopUp";

function RecipePage({ name, image, instructions, area, category, youtube }) {
    const [buttonPop, setButtonPop] = useState(false);

    return (

        <div className="recipe">
            <main>
                <h3>{name}</h3>
                <img className="recipe-pic" src={image} alt="food-pic" />
                <button className="toggle-info btn btn-dark" onClick={() => setButtonPop(true)} style={{ display: "block", marginLeft: "105px", marginTop: "20px" }}>
                    More Info
                </button>
            </main>
            <PopUp trigger={buttonPop} setTrigger={setButtonPop}>
                <h3>{name}</h3>
                <h4>Area: {area} Category: {category}</h4>
                <p>{instructions}</p>
                <p><a href={youtube}>{youtube}</a></p>
            </PopUp>

        </div>

    )
}

export default RecipePage;