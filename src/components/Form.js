import { useState } from "react";

export default function Form({ items, setItems, handleAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e);
    if (!description) {
      return;
    } else {
      const newItems = { description, quantity, packed: false, id: Date.now() };
      console.log(newItems);
      handleAddItems(newItems);
      setDescription("");
      setQuantity(1);
    }
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for you next trip ? 🎒</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="enter item name"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
