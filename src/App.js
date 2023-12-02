import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/lessonOne/Header";
import Home from "./components/lessonOne/Home";
import Base from "./components/lessonOne/Base";
import Toppings from "./components/lessonOne/Toppings";
import Order from "./components/lessonOne/Order";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/base"
          element={<Base addBase={addBase} pizza={pizza} />}
        />
        <Route
          path="/toppings"
          element={<Toppings addTopping={addTopping} pizza={pizza} />}
        />
        <Route path="/order" element={<Order pizza={pizza} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
