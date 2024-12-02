
import { Routes, Route } from 'react-router'
import './App.css'
import Header from './components/Header'
import AllBooks from './components/AllBooks'
import RegisterBooks from './components/RegisterBooks'
import BookCard from './components/BookCard'
import UpdateBooks from './components/UpdateBooks'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Header/>

      <main>
        <Routes>
          <Route
          path="/books"
          element={<AllBooks/>}
          />
           <Route
          path="/register"
          element={<RegisterBooks/>}
          />
          <Route
        path="/books/:id"
        element={<UpdateBooks/>}
        />
        <Route
        path="/book/:id"
        element={<BookCard/>}
        />
        </Routes>
       
      </main>

      <Footer/>
    </>
  )
}

export default App
