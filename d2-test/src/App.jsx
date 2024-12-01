
import { Routes, Route } from 'react-router'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Form from './components/Form'
import AllDonors from './components/AllDonors'
import UpdateDonors from './components/UpdateDonors'
import DonorCard from './components/DonorCard'

function App() {


  return (
   <>
   <Header/>
   <main>
    <Routes>
      <Route
      path='/'
      element={<Home/>}
      />
      <Route
      path='registerDonors'
      element={<Form/>}
      />
      <Route
      path='/donors'
      element={<AllDonors/>}
      />
      <Route
      path='/donors/:id'
      element={<UpdateDonors/>}
      />
      <Route
      path='donor/:id'
      element={<DonorCard/>}
      />
    </Routes>
   </main>  
   </> 
  )
}

export default App
