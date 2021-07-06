import React from 'react';

export default function Cocktail({ randomCocktail, randomCocktailInstructions, randomCocktailPic, 
  cocktailIngredient1, cocktailIngredient2, cocktailIngredient3, cocktailIngredient4, cocktailIngredient5 }) {
  return (
    <div className='cocktail random-cocktail'
    style={{ backgroundImage: `url(${randomCocktailPic})` }} >
      <p><a href="/" className="home-link">Back</a></p>
            <div className="cocktail__card">
            {/* onClick={() => checkTodo(todo.id)} mostrar instrucoes? */}
            <h2 className="cocktail__title">{randomCocktail}</h2>
            <p className="cocktail__instructions">{randomCocktailInstructions}</p>
            <span>Ingredients:</span>
               <p>{cocktailIngredient1}, {cocktailIngredient2}, {cocktailIngredient3}, {cocktailIngredient4} {cocktailIngredient5}</p>
            </div>
    </div>
  );
}