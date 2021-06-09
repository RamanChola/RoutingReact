import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
function Shop() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = async () => {
    const data = await fetch(
      "https://fortniteapi.io/v2/items/upcoming?lang=en",
      {
        headers: { Authorization: "76301e8a-401ae375-0132dd17-a6ab2bfd" },
      }
    );
    const items = await data.json();
    setItems(items.items);
  };
  return (
    <div>
      {items.map((item) => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
