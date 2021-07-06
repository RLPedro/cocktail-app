import React, { useState } from 'react';
import SearchCocktail from './components/SearchCocktail';
import SearchIngredient from './components/SearchIngredient';
import Container from './components/Container';
import SearchCocktails from './components/SearchCocktails';
// import ErrorBoundary from './components/ErrorBoundary';

export default function App () {
  const [ randomCocktail, setRandomCocktail ] = useState('');
  const [ randomCocktailInstructions, setRandomCocktailInstructions ] = useState('');
  const [ randomCocktailPic, setRandomCocktailPic ] = useState('');
  const [ cocktail, setCocktail ] = useState('');
  const [ instructions, setInstructions ] = useState('');
  const [ cocktailPic, setCocktailPic ] = useState('');
  const [ ingredient, setIngredient ] = useState('');
  const [ ingredientDesc, setIngredientDesc ] = useState('');
  const [ ingredientPic, setIngredientPic ] = useState('');
  const [ listCocktailsName, setListCocktailsName ] = useState([]);

  const [ cocktailIngredient1, setcocktailIngredient1 ] = useState('');
  const [ cocktailIngredient2, setcocktailIngredient2 ] = useState('');
  const [ cocktailIngredient3, setcocktailIngredient3 ] = useState('');
  const [ cocktailIngredient4, setcocktailIngredient4 ] = useState('');
  const [ cocktailIngredient5, setcocktailIngredient5 ] = useState('');

  const fetchRandom = async () => {
    const data = await fetch('/api/random');
    const response = await data.json();
    const randomCocktail = response.drinks[0].strDrink;
    const randomCocktailInstructions = response.drinks[0].strInstructions;
    const randomCocktailPic = response.drinks[0].strDrinkThumb;
    const cocktailIngredient1 = response.drinks[0].strIngredient1;
    const cocktailIngredient2 = response.drinks[0].strIngredient2;
    const cocktailIngredient3 = response.drinks[0].strIngredient3;
    const cocktailIngredient4 = response.drinks[0].strIngredient4;
    const cocktailIngredient5 = response.drinks[0].strIngredient5;
    setRandomCocktail(randomCocktail);
    setRandomCocktailInstructions(randomCocktailInstructions);
    setRandomCocktailPic(randomCocktailPic);
    setcocktailIngredient1(cocktailIngredient1);
    setcocktailIngredient2(cocktailIngredient2);
    setcocktailIngredient3(cocktailIngredient3);
    setcocktailIngredient4(cocktailIngredient4);
    setcocktailIngredient5(cocktailIngredient5);
    setCocktail('');
    setInstructions('');
    setIngredient('');
    setIngredientDesc('');
    setListCocktailsName('');
    // setcocktailIngredient1('');
    // setcocktailIngredient2('');
    // setcocktailIngredient3('');
    // setcocktailIngredient4('');
    // setcocktailIngredient5('');
  };

  const fetchCocktail = async (name) => {
    const data = await fetch(`/api/cocktails/${name}`);
    const response = await data.json();
    const cocktail = response.drinks[0].strDrink;
    const instructions = response.drinks[0].strInstructions;
    const cocktailPic = response.drinks[0].strDrinkThumb;
    const cocktailIngredient1 = response.drinks[0].strIngredient1;
    const cocktailIngredient2 = response.drinks[0].strIngredient2;
    const cocktailIngredient3 = response.drinks[0].strIngredient3;
    const cocktailIngredient4 = response.drinks[0].strIngredient4;
    const cocktailIngredient5 = response.drinks[0].strIngredient5;
    setCocktail(cocktail);
    setInstructions(instructions);
    setCocktailPic(cocktailPic);
    setcocktailIngredient1(cocktailIngredient1);
    setcocktailIngredient2(cocktailIngredient2);
    setcocktailIngredient3(cocktailIngredient3);
    setcocktailIngredient4(cocktailIngredient4);
    setcocktailIngredient5(cocktailIngredient5);
    setRandomCocktail('');
    setRandomCocktailInstructions('');
    setIngredient('');
    setIngredientDesc('');
    setListCocktailsName('');
  };

  const fetchIngredient = async (name) => {
    const data = await fetch(`/api/ingredients/${name}`);
    const response = await data.json();
    const ingredient = response.ingredients[0].strIngredient;
    const ingredientDesc = response.ingredients[0].strDescription;
    const ingredientPic = `http://www.thecocktaildb.com/images/ingredients/${ingredient}.png`
    setIngredient(ingredient);
    setIngredientDesc(ingredientDesc);
    setIngredientPic(ingredientPic);
    setRandomCocktail('');
    setRandomCocktailInstructions('');
    setCocktail('');
    setInstructions('');
    setListCocktailsName('');
  };

  const fetchCocktailsByLetter = async (letter) => {
    const data = await fetch(`/api/cocktail-list/${letter}`);
    const response = await data.json();
    const listCocktailsName = response.drinks.map(cocktail => cocktail.strDrink);
    setListCocktailsName(listCocktailsName);
    setIngredient('');
    setIngredientDesc('');
    setRandomCocktail('');
    setRandomCocktailInstructions('');
    setCocktail('');
    setInstructions('');
  };

  return (
    <div className="App">
      <header>
        <h1 className="app-title">Cocktails App!</h1>
        <h2 className="app-subtitle">-cocktails for everybody-</h2>
        <button className="random-button" onClick={fetchRandom}>Get a random cocktail!</button>
      </header>
      <SearchCocktail fetchCocktail={fetchCocktail}/>
      <SearchIngredient fetchIngredient={fetchIngredient}/>
      <SearchCocktails fetchCocktailsByLetter={fetchCocktailsByLetter}/>
      <Container 
      fetchCocktail={fetchCocktail}
      randomCocktail={randomCocktail}
      randomCocktailInstructions={randomCocktailInstructions}
      randomCocktailPic={randomCocktailPic}
      cocktail={cocktail}
      instructions={instructions}
      ingredient={ingredient}
      cocktailPic={cocktailPic}
      ingredientDesc={ingredientDesc}
      ingredientPic={ingredientPic}
      listCocktailsName={listCocktailsName}
      cocktailIngredient1={cocktailIngredient1}
      cocktailIngredient2={cocktailIngredient2}
      cocktailIngredient3={cocktailIngredient3}
      cocktailIngredient4={cocktailIngredient4}
      cocktailIngredient5={cocktailIngredient5}
      />
    </div>
  );
}

const MyFallbackComponent = ({ error, componentStack, resetErrorBoundary }) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );

}

// export default App:
