import './App.css';
import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Masonry from './components/Masonry'
import Recipeform from './components/Recipeform'
import Home from './components/pages/Home'
import background from './components/Images/bkrf.jpg'


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />}
            />
            <Route path="/recipeform" element={<Recipeform />} />
          </Routes>
        

      </Router>
      {/* <Masonry /> */}
    </ApolloProvider>
  );
}

export default App;
