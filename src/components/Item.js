export default function Item(props) {
  return (
    <li>
      <input
        type="checkbox"
        name=""
        value={props.item.packed}
        onChange={() => props.handleToggle(props.item.id)}
      />
      <span style={props.item.packed ? { textDecoration: "line-through" } : {}}>
        {props.item.quantity} {props.item.description}
      </span>
      <button type="submit" onClick={() => props.onDeleteItems(props.item.id)}>
        ❌
      </button>
    </li>
  );
}
