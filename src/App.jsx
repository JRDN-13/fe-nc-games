
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import SingleReview from "./components/SingleReview";

function App() {
  return (

      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="reviews/:review_id" element={<SingleReview />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
