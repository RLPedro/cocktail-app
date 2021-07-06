const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();

const random = 'http://thecocktaildb.com/api/json/v1/1/random.php';
const searchName = 'http://thecocktaildb.com/api/json/v1/1/search.php?s=';
const searchIngredient = 'http://thecocktaildb.com/api/json/v1/1/search.php?i=';
const listCocktails = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

// const lookupCocktail = 'http://thecocktaildb.com/api/json/v1/1/lookup.php?i=';
// const lookupIngredient = 'http://thecocktaildb.com/api/json/v1/1/lookup.php?iid=';


app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/random', async (req, res) => {
  const data = await fetch(`${random}`);
  const dataJSON = await data.json();
  res.json(dataJSON);
});

app.get('/api/cocktails/:name', async (req, res) => {
    const { name } = req.params;
    const data = await fetch(`${searchName}${name}`);
    const dataJSON = await data.json();
    res.json(dataJSON);
});

app.get('/api/ingredients/:ingredient', async (req, res) => {
    const { ingredient } = req.params;
    const data = await fetch(`${searchIngredient}${ingredient}`);
    const dataJSON = await data.json();
    res.json(dataJSON);
});

app.get('/api/cocktail-list/:letter', async (req, res) => {
    const { letter } = req.params;
    const data = await fetch(`${listCocktails}${letter}`);
    const dataJSON = await data.json();
    res.json(dataJSON);
});

// app.get('/api/cocktail/:id', async (req, res) => {
//     const { id } = req.params;
//     const data = await fetch(`${lookupCocktail}${id}`);
//     const dataJSON = await data.json();
//     res.json(dataJSON);
// });

// app.get('/api/ingredient/:id', async (req, res) => {
//     const { id } = req.params;
//     const data = await fetch(`${lookupIngredient}${id}`);
//     const dataJSON = await data.json();
//     res.json(dataJSON);
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);