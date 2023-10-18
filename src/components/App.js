import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats  from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 12, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure that you want to delete all items from the list ??"
    );
    if (confirmed) setItems([]);
  }
  return (
    <>
      <div className="app">
        <Logo />
        <Form
          items={items}
          setItems={setItems}
          handleAddItems={handleAddItems}
        />
        <PackingList
          items={items}
          onDeleteItems={handleDelete}
          handleToggle={handleToggle}
          handleClear={handleClear}
        />
        <Stats items={items} />
      </div>
    </>
  );
}

export default App;
