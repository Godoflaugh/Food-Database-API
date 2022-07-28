import React from 'react'
import { useQuery } from '@apollo/client'
import UserPage from '../UserPage'

import { QUERY_USERS } from '../../utils/queries.js'

const Home = () => {

  const { data } = useQuery(QUERY_USERS)
  const users = data?.users || []

// TODO This screen is for the main page that will have the accordian style cards from MUI that will scale responsively to the content inside. Each card will dispaly the image of the recipe as well as the recipe name and user name. Once the card is clicked on then It will take it too a new page that will expand the image and show the full instructions for the recipe.

  return (
    <main>
      <div className="flex-row justify-center">
        <UserPage
          users={users}
          title="Hello World" 
          />
      </div>

    </main>
  )

}

export default Home