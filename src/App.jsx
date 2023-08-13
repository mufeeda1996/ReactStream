import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Favourite from './pages/Favourite'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'

function App() {
  return (
    <div className='App'>
     <Layout>
      <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/favourites' element={<Favourite/>} />
      <Route path='/movie/:id' element={<MovieDetails/>} />
      </Routes>
     </Layout>
    </div>
  )
}

export default App

