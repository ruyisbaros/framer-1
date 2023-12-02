import React from "react";
import { Route, Routes } from "react-router-dom";
import AnimateOne from "./pages/AnimateOne";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AnimateOne />} />
      </Routes>
    </div>
  );
};

export default App;
