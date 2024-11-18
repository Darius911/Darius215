import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import CardOne from './components/CardOne'
import CardTwo from './components/CardTwo'
import CardThree from './components/CardThree'
import Info from './components/Info'
import RecentPosts from './components/RecentPosts'
import Footer from './components/Footer'

function App() {
  return (
    <>
      
      <Header/>
      <CardOne/>
      <CardTwo/>
      <CardThree/>
      <Info/>
      <RecentPosts/>
      <Footer/>

      
    </>
  );
}

export default App;