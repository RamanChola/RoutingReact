import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./App.css";

function Item() {
  const placeId = useParams().id;
  useEffect(() => {
    fetchItem();
  },[]);// eslint-disable-line react-hooks/exhaustive-deps
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortniteapi.io/v2/items/get?id=${placeId}&lang=en`,
      { headers: { Authorization: "76301e8a-401ae375-0132dd17-a6ab2bfd" } }
    );
    const item = await fetchItem.json();
    setItem(item.item);
  };
  const [item, setItem] = useState({
    images: {
      icon: "",
    },
  });

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.icon} alt="" />
    </div>
  );
}

export default Item;
