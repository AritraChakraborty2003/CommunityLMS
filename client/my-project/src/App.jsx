import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../components/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
