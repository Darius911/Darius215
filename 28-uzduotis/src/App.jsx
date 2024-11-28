import Card from "./components/Card";
import "./App.css";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Card />

          <Routes>
            <Route path="/" element={<App />} />
            <Route path="posts/:id" element={<Card />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
