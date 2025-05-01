import styled from "styled-components";
import { useState } from "react";
import type {Item} from './models/Item.model';
import ShopItem from "./components/ShopItem";

const App: React.FC = () => {

const [items, setItems] = useState<Item[]>([
  { id: 1, name: "Doritos", strike: false },
  { id: 2, name: "Gouda", strike: false },
  { id: 3, name: "Doritos", strike: false },
  { id: 4, name: "Gouda", strike: false },
  { id: 5, name: "Doritos", strike: false },
  { id: 6, name: "Gouda", strike: false },
  { id: 7, name: "Doritos", strike: false },
  { id: 8, name: "Gouda", strike: false },
  { id: 9, name: "Doritos", strike: false },
  { id: 10, name: "Gouda", strike: false },
  { id: 11, name: "Doritos", strike: false },
  { id: 12, name: "Gouda", strike: false },
  { id: 13, name: "Doritos", strike: false },
  { id: 14, name: "Gouda", strike: false },
  { id: 15, name: "Doritos", strike: false },
  { id: 16, name: "Gouda", strike: false },
  { id: 17, name: "Doritos", strike: false },
  { id: 18, name: "Gouda", strike: false },
  { id: 19, name: "Doritos", strike: false },
  { id: 20, name: "Gouda", strike: false },
  { id: 21, name: "Doritos", strike: false },
  { id: 22, name: "Gouda", strike: false },
  { id: 23, name: "Doritos", strike: false },
  { id: 24, name: "Gouda", strike: false },
  { id: 25, name: "Doritos", strike: false },
  { id: 26, name: "Gouda", strike: false },
  { id: 27, name: "Doritos", strike: false },
  { id: 28, name: "Gouda", strike: false },
  { id: 29, name: "Doritos", strike: false },
  { id: 30, name: "Gouda", strike: false }
]
);

// state for ID
const [id, setID] = useState(30);
// State for show/hide items that have strikethrough
const [isHidden, setIsHidden] = useState(false);
// State to show/hide the add item form
const [isFormHidden, setIsFormHidden] = useState(false);

const handleDelete = (id: number) =>{
  setItems(prevItems => prevItems.filter(item => item.id !== id))
}

const handleToggleStrikeThrough = (id: number) =>{
  setItems(prevItems => prevItems.map(item => item.id === id ? {...item, strike: !item.strike} : item))
}

const showAddItemForm = () =>{

}


const addItem = (newName: string) =>{
  setID(prev => prev + 1);
  setItems(prev => [...prev, {id: id, name: newName, strike: false}]);
}

  return (
    <Wrapper>
      <nav>
        <h1>Weekly Shopping</h1>
        <button type="button">➕</button>
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
    height: 3rem;
    display: flex;
  button{
    width: 4rem;
  }
  }
  h1 {
    margin: auto;

    height: 100%;
    font-size: 3rem;
  }
  section {
    display: grid;
    place-content: center;
    max-width: 100%;
    
  }
`;
