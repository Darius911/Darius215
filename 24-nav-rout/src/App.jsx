import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import {Routes, Route, } from "react-router";

function App() {
  return (
    <>
     

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
