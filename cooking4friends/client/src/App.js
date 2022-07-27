import './App.css';
import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Navbar from './components/Navbar'
import Masonry from './components/Masonry'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Masonry />
    </ApolloProvider>
  );



}

export default App;
