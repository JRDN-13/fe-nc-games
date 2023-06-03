import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import SingleReview from "./components/SingleReview";
import Categories from "./components/Categories";
import Users from "./components/Users";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="reviews/:review_id" element={<SingleReview />} />
        <Route path="categories" element={<Categories/>} />
        <Route path="users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
