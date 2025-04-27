import styled from "styled-components";

// models
import type { ShopItemProps } from "../models/ShopItemProps.model";

const ShopItem: React.FC<ShopItemProps> = ({ item, index}) => {


  return (
    <Wrapper id={index.toString()}
    >
      <div className="name-container">{item.name}</div>
    </Wrapper>
  );
};
export default ShopItem;

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: fit-content;
  width: 80vw;
  border: black solid 1px;
  .name-container {
    margin: .75rem auto;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: fit-content;
    font-weight: bold;
    font-size: calc(0.7rem + 0.390625vw);
  }
  @media (max-width: 600px) {
    height: calc(95vw / 13);
    width: calc(95vw / 13);
    .letter-container {
      line-height: calc(95vw / 13);
    }
  }
`;