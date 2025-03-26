export interface Item {
  id ?: number;
  name: string;
  description:string;
  price:number;
  inStock:number;
}

export interface ItemByQuantity{
  item : Item;
  quantity : number;
}