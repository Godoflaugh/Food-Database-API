import './App.css';
import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Masonry from './components/Masonry'
import Home from './components/pages/Home'
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          {/* <Home /> */}
          <p>Hello World</p>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
