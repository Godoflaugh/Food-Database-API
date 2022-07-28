import React from 'react'
import { useQuery } from '@apollo/client'

import { QUERY_USER } from '../utils/queries'

const Home = () => {

  const { loading, data } = useQuery(QUERY_USER)
  const users = data?.users || []

  return (
    <main>
      <div> Loading...</div>
      <div className="flex-row justify-center">
        <h1> Username {users.username}</h1>
      </div>

    </main>
  )

}

export default Home