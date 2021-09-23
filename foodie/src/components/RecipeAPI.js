import React, { useEffect, useState } from "react";
import RecipePage from "../pages/RecipePage";

function RecipeAPI() {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('')

    useEffect(() => {
        getRecipe();
    }, [query]);

    const getRecipe = async () => {
        fetch(`https://themealdb.p.rapidapi.com/search.php?s=${query}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "themealdb.p.rapidapi.com",
                "x-rapidapi-key": "c282c71dd0msh730ea86915ec62cp19db59jsnc4dec27e691c"
            }
        })
            .then(response => response.json())
            .then(data => {
                setMeals(data.meals)
                console.log(data)
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
            <h1 className="recipe-title">Recipes</h1>
            <p className="recipe-text">Enter an ingredient you would like to cook with: </p>
            <form onSubmit={getSearch} className='search-form'>
                <input className='search-bar mr-2' type='text' value={search} onChange={updateSearch} placeholder="Ingredient" required />
                <button className='search-btn btn-dark' type='submit' >Search</button>
            </form>
            <div className="recipe-content">
                {meals.map(meals => (
                    <RecipePage
                        key={meals.strMeal}
                        name={meals.strMeal}
                        image={meals.strMealThumb}
                        instructions={meals.strInstructions}
                        area={meals.strArea}
                        category={meals.strCategory}
                        youtube={meals.strYoutube}
                    />

                ))}
            </div>
        </div >
    )
}

export default RecipeAPI;