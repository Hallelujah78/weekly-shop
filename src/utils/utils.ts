import type { Item } from "../models/Item.model";

export const setLocalStorage = (
  key: "shopping-list",
  data: Item[]
) => { 
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (
  key: "shopping-list",
): Item[] => {
  let val = null;
    val = JSON.parse(localStorage.getItem(key) as string) as Item[];
  return val;
};

export const formatShoppingList = (shoppingList: Item[]) =>{

 const formattedList = shoppingList.map(item => !item.strike && item.name).join("\n");
 console.log(formattedList); 
}