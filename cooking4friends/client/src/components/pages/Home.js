import React from 'react'
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

  const { loading, data } = useQuery(QUERY_RECIPES)
  const recipes = data?.recipes || []
  console.log(recipes)

  // TODO This screen is for the main page that will have the accordian style cards from MUI that will scale responsively to the content inside. Each card will dispaly the image of the recipe as well as the recipe name and user name. Once the card is clicked on then It will take it too a new page that will expand the image and show the full instructions for the recipe.

  return (
    <main>

      <div className="container" style={{ backgroundImage: `url(${background})`, color: 'Black', fontWeight: 'bold', paddingTop: '310px', paddingBottom: '600px', backgroundSize: 'cover' }}>
        <h1 style={{ textAlign: "center" }}>Welcome to Send Foodz, you're one stop shop for all delicious food recipes and discussion</h1>
        <div className="flex-row justify-center">
          <UserPage
            users={users}
            title="Hello World"
          />
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <RecipePage
            recipes={recipes}
            title="Recipe Page"
          />
        )}
      </div>
    </main>
  )

}

export default Home