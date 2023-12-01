import React from "react";
import { Route, Routes } from "react-router-dom";
import MacDoc from "./pages/MacDoc";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MacDoc />} />
      </Routes>
    </div>
  );
};

export default App;
