import type { Item } from "./Item.model";

export type ShopItemProps = {
item: Item;
onDelete: (id: string) => void;
onToggle: (id: string) => void;
}