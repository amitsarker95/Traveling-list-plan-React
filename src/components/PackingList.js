import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  handleToggle,
  handleClear,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortItem;

  if (sortBy === "input") sortItem = items;
  console.log(sortItem);

  if (sortBy === "description")
    sortItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortItem.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input status.</option>
          <option value="description">Sort by description.</option>
          <option value="packed">Sort by packed items.</option>
        </select>
        <button type="submit" onClick={handleClear}>
          Clear list
        </button>
      </div>
    </div>
  );
}
