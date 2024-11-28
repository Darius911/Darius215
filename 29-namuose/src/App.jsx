
import './App.css'
import Card from "./components/Card"
import Details from "./components/Details"
import { Routes, Route } from "react-router";

function App() {
  

  return (
   <div className='container'>
    <div className='row'>
      <Card/>

      <Routes>
            <Route
              path="/"
              element={<Card/>}
            />
            <Route
              path="posts/:id"
              element={<Details />}
            />
          </Routes>
    </div>
   </div>
   
   
  )
}

export default App
