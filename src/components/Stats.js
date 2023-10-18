export default function Stats({ items }) {
  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const totalPacentage = Math.round((totalPacked / totalItems) * 100);
  if (!totalItems) {
    return (
      <>
        <footer className="stats">
          <p>Please start packing items for your next travel.. 🎒🌍</p>
        </footer>
      </>
    );
  } else {
    return (
      <>
        <footer className="stats">
          {totalPacentage === 100 ? (
            "You got everything ! Ready to go .. ✈️🌍"
          ) : (
            <em>
              You have {totalItems} items in your list, and you already packed{" "}
              {totalPacked} ({totalPacentage}%)
            </em>
          )}
        </footer>
      </>
    );
  }
}
