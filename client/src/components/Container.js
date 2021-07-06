import React from 'react';
import Cocktail from './Cocktail';
import RandomCocktail from './RandomCocktail';
import Ingredient from './Ingredient';
import ListCocktails from './ListCocktails';

export default function Container ( 
    {randomCocktail, randomCocktailInstructions, randomCocktailPic, 
    cocktail, instructions, cocktailPic, fetchCocktail,
    ingredient, ingredientDesc, ingredientPic,
    listCocktailsName,
    cocktailIngredient1, cocktailIngredient2, cocktailIngredient3, cocktailIngredient4, cocktailIngredient5} 
    ) {
    return (
        <div className="container">
            {cocktail && <Cocktail cocktail={cocktail} instructions={instructions} cocktailPic={cocktailPic}
            cocktailIngredient1={cocktailIngredient1} cocktailIngredient2={cocktailIngredient2} 
          cocktailIngredient3={cocktailIngredient3} cocktailIngredient4={cocktailIngredient4} cocktailIngredient5={cocktailIngredient5}/>}
          {randomCocktail && <RandomCocktail randomCocktail={randomCocktail} randomCocktailInstructions={randomCocktailInstructions}
          randomCocktailPic={randomCocktailPic} cocktailIngredient1={cocktailIngredient1} cocktailIngredient2={cocktailIngredient2} 
          cocktailIngredient3={cocktailIngredient3} cocktailIngredient4={cocktailIngredient4} cocktailIngredient5={cocktailIngredient5}/>}
          {ingredient && <Ingredient ingredient={ingredient} ingredientDesc={ingredientDesc} ingredientPic={ingredientPic}/>}
          
          {listCocktailsName.length > 0 ? <ListCocktails fetchCocktail={fetchCocktail} listCocktailsName={listCocktailsName} /> : null }
          
        {/* 
        //   cocktail={cocktail} instructions={instructions} cocktailPic={cocktailPic}
        //   cocktailIngredient1={cocktailIngredient1} cocktailIngredient2={cocktailIngredient2} 
        //   cocktailIngredient3={cocktailIngredient3} cocktailIngredient4={cocktailIngredient4} 
        //   cocktailIngredient5={cocktailIngredient5}  */}
          
        </div>
    )
}
