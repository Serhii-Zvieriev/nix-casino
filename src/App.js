import React from "react";
import { Routes, Route } from "react-router-dom";

import Page1 from "./pages/Page1";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Page1 />} />
      </Routes>
    </div>
  );
}

export default App;
