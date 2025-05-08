import styled from "styled-components";
import { useState } from "react";
import type {Item} from './models/Item.model';
import ShopItem from "./components/ShopItem";
import AddItemForm from "./components/AddItemForm";
import { getLocalStorage, setLocalStorage } from "./utils/utils";
import {v4 as uuidv4} from 'uuid';

const App: React.FC = () => {

const [items, setItems] = useState<Item[]>(()=>{
  const localStore = getLocalStorage("shopping-list");
  return localStore ? localStore : [] ;
}
);



// State for show/hide items that have strikethrough
const [isHidden, setIsHidden] = useState(false);
// State to show/hide the add item form
const [isFormHidden, setIsFormHidden] = useState(false);

const handleDelete = (id: string) =>{
  setItems(prevItems => prevItems.filter(item => item.id !== id))
  setLocalStorage("shopping-list", items);
}

const handleToggleStrikeThrough = (id: string) =>{
  setItems(prevItems => prevItems.map(item => item.id === id ? {...item, strike: !item.strike} : item));
  // Update local storage
  setLocalStorage("shopping-list", items);
}

const showAddItemForm = () =>{
  setIsFormHidden(prev => !prev);
}


const handleFormSubmit = (name: string) =>{
  const newItem = {id: uuidv4(), name, strike: false};
    setItems(prevItems => {
      const newItems = [...prevItems, newItem];
      return newItems;
    });
    setLocalStorage("shopping-list", [...items, newItem]);
}

  return (
    <Wrapper>
      <nav>
        <h1>Weekly Shopping</h1>
        <button type="button" onClick={showAddItemForm}>➕</button>
        <button type="button" onClick={()=>{setIsHidden(prev => !prev)}}>{isHidden ? "Show" : "Hide"}</button>
      </nav>
      <section>
    {items.map((item)=>{
      // if items are not hidden OR they are hidden AND the item doesn't have strikethrough
      if(!isHidden || isHidden && !item.strike){
        // Render the item
         return <ShopItem key={item.id} item={item} onDelete={handleDelete} onToggle={handleToggleStrikeThrough}/>
      } 
      // Otherwise do nothing
    })}
    {
    isFormHidden && <AddItemForm onSubmit={handleFormSubmit} onClose={showAddItemForm}/>
}
      </section>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  nav {
    border-bottom: 1px solid gray;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 3rem;
    display: flex;
  button{
    width: 4rem;
    height: 80%;
  }
   h1 {
    margin: 0 auto;
    font-size: calc(1.5rem + 0.390625vw);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   
  }
  }
 
  section {
    display: grid;
    place-content: center;
    max-width: 100%;
  }
`;
