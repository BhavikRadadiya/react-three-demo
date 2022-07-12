import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "../components/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}

export default Router;
