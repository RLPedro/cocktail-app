import React from 'react';
// import Cocktail from './Cocktail';

export default function ListCocktails({ listCocktailsName, fetchCocktail }) {
  const onClick = (searchValue) => {
    // e.preventDefault();
    // history.push('/search')
    fetchCocktail(searchValue);
    // props.searchSaver(searchValue);
    // setSearchValue(searchValue = '');
}

  return (
    <div className='list-cocktails-container'>
      {listCocktailsName.map(cocktail => (
      // <Cocktail key={cocktail} cocktail={cocktail}/>
      <p key={cocktail} className="list-item"
      onClick={() => onClick(cocktail)}>
      {cocktail}</p>
      ))}
    </div>
  );
}