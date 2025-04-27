import styled from "styled-components";
import { useState } from "react";
import type {Item} from './models/Item.model';
import ShopItem from "./components/ShopItem";

const App: React.FC = () => {

const [items, setItems] = useState<Item[]>([{name: "Doritos", strike: false}, {name: "Gouda", strike: false},{name: "Doritos", strike: false}, {name: "Gouda", strike: false},{name: "Doritos", strike: false}, {name: "Gouda", strike: false},{name: "Doritos", strike: false}, {name: "Gouda", strike: false},{name: "Doritos", strike: false}, {name: "Gouda", strike: false},{name: "Doritos", strike: false}, {name: "Gouda", strike: false},{name: "Doritos", strike: false}, {name: "Gouda", strike: false},{name: "Doritos", strike: false}, {name: "Gouda", strike: false},{name: "Doritos", strike: false}, {name: "Gouda", strike: false},{name: "Doritos", strike: false}, {name: "Gouda", strike: false},{name: "Doritos", strike: false}, {name: "Gouda", strike: false},{name: "Doritos", strike: false}, {name: "Gouda", strike: false},{name: "Doritos", strike: false}, {name: "Gouda", strike: false},{name: "Doritos", strike: false}, {name: "Gouda", strike: false},{name: "Doritos", strike: false}, {name: "Gouda", strike: false}]);


const addItem = (newName: string) =>{
  setItems(prev => [...prev, {name: newName, strike: false}])
}

  return (
    <Wrapper>
      <nav>
        <h1>Weekly Shopping</h1>
      </nav>
      <section>
    {items.map((item, index)=>{
      return <ShopItem key={index} item={item} index={index}/>
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
