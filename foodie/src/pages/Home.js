import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <>
                <div className="hero">
                    <div>
                        <h1 className="title">Eat In or Eat Out?</h1>
                    </div>
                    <div>
                        <button className="btn btn-dark home-btn"><a href="./recipes">Recipes</a></button>
                        <button className="btn btn-dark home-btn"><a href="./restaurants">Restaurants</a></button>
                    </div>
                </div>

                <div className="about row">
                    <h2 className="about-title">About Foodie</h2>

                    <div className="row">
                        <p className="col-md m-5 about-text">Welcome to Foodie! Foodie helps you decide where to eat or what to eat! Search your neighborhood for restaurants or search for a recipe to cook at home. Enter your zipcode to find a restaurant near you in the Restaurant page! Enter an ingredient that you want to cook with for different recipes to choose from! </p>

                        <blockquote className="col-md">
                            "A recipe has no soul. You, as the cook, must bring soul to the recipe."
                            &mdash;Thomas Keller
                        </blockquote>
                    </div>
                </div>
            </>

        )
    }
}

export default Home;