import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const[filterBy, setFilter] = useState('All')
  function handleChange(event){
    setFilter(event.target.value)
  }

  const newItems = items.filter((sp)=>{
    if(filterBy==="All"){
      return true;
    }
    else{
      return sp.category ===filterBy;
    }

  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category}  />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;