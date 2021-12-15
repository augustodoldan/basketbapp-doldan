import Item from "../Item/Item";
import "./ItemList.css";


function ItemList({ items, stock }) {
  return (
    <div className="container-ItemList">
      {items.length > 0 &&
        items.map((item) => <Item item={item} key={item.id} stock={stock} />)}
    </div>
  );
}

export default ItemList;
