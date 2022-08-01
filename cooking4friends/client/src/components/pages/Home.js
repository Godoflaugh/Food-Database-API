import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useQuery } from '@apollo/client'
import UserPage from '../UserPage'
import RecipePage from '../RecipePage'

import { QUERY_RECIPES } from '../../utils/queries.js'
import { QUERY_USERS } from '../../utils/queries.js'
import background from '../Images/bkrf.jpg'

const Home = () => {

  const { loading: userLoading, data: userData } = useQuery(QUERY_USERS)
  const users = userData?.users || []
  console.log(users)

  // const { loading, data } = useQuery(QUERY_RECIPES)
  // const recipes = data?.recipes || []
  // console.log(recipes)

  // const [pictureData, setData] = useState([])

  //The /express route from the server.js is then referred to here as the get route to access the data base. The recipeData variable the data that will need to be passed to the specifc page that will utilize the data and rendering it.
  const [recipeData, setRecipeData] = useState([])
  useEffect(() => {
    axios
      .get("/recipes")
      .then((res) => {
        console.log(res)
        setRecipeData(res.data)
      })
      .catch((err) => console.log(err, "There is an error"))

  }, [])

  // TODO This screen is for the main page that will have the accordian style cards from MUI that will scale responsively to the content inside. Each card will dispaly the image of the recipe as well as the recipe name and user name. Once the card is clicked on then It will take it too a new page that will expand the image and show the full instructions for the recipe.

  return (
    <main>

      <div className="container" style={{ backgroundImage: `url(${background})`, color: 'Black', fontWeight: 'bold', paddingTop: '310px', paddingBottom: '600px', backgroundSize: 'cover' }}>
        <h1 style={{ textAlign: "center" }}>Welcome to Send Foodz, you're one stop shop for all delicious food recipes and discussion</h1>
        {/* <div className="flex-row justify-center">
          <UserPage
            users={users}
            title="Hello World"
          />
        </div> */}


        <RecipePage
          recipes={recipeData}
          title="Recipe Page"
        />
      </div>

      {/* <div className="App">
        <h1>Image uploading react</h1>
        {pictureData.map((singleData) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(singleData.img.data.data))
          );
          return <img alt="test" src={`data:image/png;base64,${base64String}`} width="300" />
        })}
      </div> */}
    </main >
  )
}

export default Home