import React, { useState } from "react";

export const inputPlaceholder = "Enter new item";

const List = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setItems(items.concat([newItem]));
    setNewItem("");
  };

  return (
    <div>
      <h2>Items List</h2>
    </div>
  );
};
