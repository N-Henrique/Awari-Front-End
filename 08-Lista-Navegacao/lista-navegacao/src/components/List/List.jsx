import Item from "../Item"; // Certifique-se de importar corretamente

function List({ items = [], onItemClick }) {
  const map = items.map((item) => {
    return <Item key={item.id} item={item} onClick={onItemClick} />;
  });

  return (
    <div>
      <h2>Users List</h2>
      <ul>{map}</ul>
    </div>
  );
}

export default List;
