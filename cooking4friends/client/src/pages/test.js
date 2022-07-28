import React from 'react'
import { useQuery } from '@apollo/client'

import { QUERY_USER } from '../utils/queries'

const Test = () => {

  const { loading, data } = useQuery(QUERY_USER)
  const users = data?.users || []

  return (
    <main>
      <div className="flex-row justify-center">

      </div>

    </main>
  )

}

export default Test