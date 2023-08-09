function Item({ item, onClick }) {
  const handleClick = () => {
    onClick && onClick(item);
  };

  return (
    <>
      <li>
        <p>{item.name}</p>
      </li>
      <button type="button" onClick={handleClick}>
        Details
      </button>
    </>
  );
}

export default Item;
