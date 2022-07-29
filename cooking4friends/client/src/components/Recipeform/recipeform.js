import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const axios = require('axios')


export default class RecipeForm extends React.Component {
  state = {
    recipeName: '',
    ingredients: '',
    cookingTime: '',
    instructions: '',
    equipment: '',
    img: '',
    selectedFile: null

  }


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  fileChangedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }





  handleSubmit = event => {
    event.preventDefault();


    console.log(this.state.selectedFile)
    const recipe = new FormData()
    recipe.append('img', this.state.selectedFile)
    recipe.append('recipeName', this.state.recipeName)
    recipe.append('ingredients', this.state.ingredients)
    recipe.append('cookingTime', this.state.cookingTime)
    recipe.append('instructions', this.state.instructions)
    recipe.append('equipment', this.state.equipment)


    axios.post(`/upload`, recipe)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Recipe Name:
            <input type="text" id="recipeName" onChange={this.handleChange} />
          </label>
          <label>
            Ingredients:
            <input type="text" id="ingredients" onChange={this.handleChange} />
          </label>
          <label>
            Cooking Time:
            <input type="number" id="cookingTime" onChange={this.handleChange} />
          </label>
          <label>
            Instructions:
            <input type="text" id="instructions" onChange={this.handleChange} />
          </label>
          <label>
            Equipment:
            <input type="text" id="equipment" onChange={this.handleChange} />
          </label>
          <label>
            Image:
            <input type="file" id='file' name="img" onChange={this.fileChangedHandler} />
          </label>
          <button type="submit">Post Recipe</button>
        </form>
      </div>
    )
  }


}
