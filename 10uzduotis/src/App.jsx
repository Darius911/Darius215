import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostContent from "./componets/PostContent";
import Header from "./componets/Header";

import Box from "./componets/Box";
import PostImage from "./componets/PostImage";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <PostImage />
          <PostContent />
        </div>

        <div className="col-6">
          <PostImage />
          <PostContent />
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <Box />
        </div>
        <div className="col-3">
          <Box />
        </div>
        <div className="col-3">
          <Box />
        </div>
        <div className="col-3">
          <Box />
        </div>
      </div>
    </div>
  );
}
export default App;
