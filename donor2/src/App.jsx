import { NavLink, Routes, Route } from "react-router";
import "./App.css";
import Form from "./components/Form";
import AllDonors from "./components/AllDonors";

import Home from "./components/Home";
import Header from "./components/Header";
import UpdateForm from "./components/UpdateForm";
import DonorCard from "./components/DonorCard";

function App() {
  return (
    <>
      <Header/>

      <main>
        
      <Routes>
      <Route
        path="/"
        element={<Home/>}
        />

        <Route
        path="/registerDonors"
        element={<Form/>}
        />

      <Route
        path="/donors"
        element={<AllDonors/>}
        />
      <Route
        path="/donors/:id"
        element={<UpdateForm/>}
        />
        <Route
        path="/donor/:id"
        element={<DonorCard/>}
        />


      </Routes>

      </main>
    </>
  );
}

export default App;



