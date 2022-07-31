import React from 'react';

const RecipePage = ({ recipes, title }) => {
  console.log(recipes)
  if (!recipes.length) {
    return <h3>No Recipes Yet!</h3>
  }

  return (
    <div>
      <h3>{title}</h3>
      {recipes && recipes.map((recipe) => (
        <div>
          <p>{recipe.ingredients}</p>
          <img src={recipe.img} alt='food'></img>
          <p>{recipe.ingredients}</p>
        </div>
      ))}


    </div>
  )

}

export default RecipePage