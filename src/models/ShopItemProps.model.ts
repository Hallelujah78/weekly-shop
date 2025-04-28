import type { Item } from "./Item.model";

export type ShopItemProps = {
item: Item;
onDelete: (id: number) => void;
onToggle: (id: number) => void;
}