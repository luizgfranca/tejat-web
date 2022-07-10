import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CreateAccountPage from "./pages/account/create";

function App() {
  //console.log(process.env.REACT_APP_BACKEND_PATH)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/create" element={<CreateAccountPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
