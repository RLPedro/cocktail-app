import React from 'react';

export default function Cocktail({ ingredient, ingredientDesc, ingredientPic }) {
  return (
    <div className={'ingredient'}
    style={{ backgroundImage: `url(${ingredientPic})` }} >
      {/* <p><a href="/" className="home-link">Back</a></p> */}
            <div className="ingredient__card">
            {/* onClick={() => checkTodo(todo.id)} mostrar descricao? */}
            <h2 className="ingredient__title">{ingredient}</h2>
            <p className="ingredient__instructions">{ingredientDesc}</p>
            </div>
            {/* <img className="ingredient__pic" src={ingredientPic} alt={ingredient}/> */}
    </div>
  );
}