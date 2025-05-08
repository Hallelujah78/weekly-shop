import styled from "styled-components";

// models
import type { ShopItemProps } from "../models/ShopItemProps.model";

const ShopItem: React.FC<ShopItemProps> = ({ item, onDelete, onToggle}) => {


  return (
    <Wrapper $strike={item.strike} id={item.id ? item.id.toString() : ""} onClick={()=>{onToggle(item.id)}}
    >
      <div className="name-container">{item.name}</div>
      <button onClick={(e)=>{
        e.stopPropagation(); // prevents triggering toggle
        onDelete(item.id)}
        } type="button" className="delete-btn">❌</button>
    </Wrapper>
  );
};
export default ShopItem;

const Wrapper = styled.div<{$strike: boolean}>`
  cursor: pointer;
  position: relative;
  display: flex;
  height: fit-content;
  width: 80vw;
  border: black solid 1px;
  .name-container {
    text-decoration: ${props => (props.$strike ? "line-through" : "none")};
    color: ${props => (props.$strike ? "gray" : "black")};;
    margin: .75rem auto;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: fit-content;
    font-weight: bold;
    font-size: calc(0.7rem + 0.390625vw);
  }
  .delete-btn{
    text-decoration: none !important;
    background-color: transparent;
    border: none;
    font-size: calc(1rem + 0.390625vw);
  } 
`;