import React from 'react';

export default function Cocktail({ randomCocktail, randomCocktailInstructions, randomCocktailPic, 
  cocktailIngredient1, cocktailIngredient2, cocktailIngredient3, cocktailIngredient4, cocktailIngredient5 }) {
  return (
    <div className='cocktail random-cocktail'
    style={{ backgroundImage: `url(${randomCocktailPic})` }} >
      {/* <p><a href="/" className="home-link">Back</a></p> */}
            <div className="cocktail__card">
            {/* onClick={() => checkTodo(todo.id)} mostrar instrucoes? */}
            <h2 className="cocktail__title">{randomCocktail}</h2>
            <p className="cocktail__instructions">{randomCocktailInstructions}</p>
            <div className="cocktail__ingredients">
            <p>Ingredients:</p>
            <div className="ingredients-list">
               <p>{cocktailIngredient1}</p>
               <p>{cocktailIngredient2}</p>
               <p>{cocktailIngredient3}</p>
               <p>{cocktailIngredient4}</p> 
               <p>{cocktailIngredient5}</p>
            </div>
          </div>
        </div>
    </div>
  );
}