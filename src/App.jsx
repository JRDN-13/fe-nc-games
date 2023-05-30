import { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Reviews from "./components/Reviews";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Nav />
        <Reviews />
      </>
    </BrowserRouter>
  );
}

export default App;
