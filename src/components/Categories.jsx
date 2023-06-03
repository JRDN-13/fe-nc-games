import { useEffect, useState } from "react";
import { fetchCategories } from "../Api";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCategories().then((categoriesData) => {
      setCategories(categoriesData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  function handleClick() {
    
  }

  return (
    <main className="categories-container">
      {categories.map((category) => (
        <ul className="category-card">
          <p className="category">
            Category: <em>{category.slug}</em>
          </p>
          <p>
            <em>{category.description}</em>
          </p>
          <button onClick={handleClick}>Click for reviews</button>
        </ul>
      ))}
    </main>
  );
}

export default Categories;
