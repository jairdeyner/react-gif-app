import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Goku"]);

  const onAddCategory = (newCategory) => {
    if (categories.some((c) => c.toLowerCase() === newCategory.toLowerCase()))
      return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertAppp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((c) => (
        <GifGrid key={c} category={c} />
      ))}
    </>
  );
};
