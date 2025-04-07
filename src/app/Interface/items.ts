export interface Item {
  id ?: number;
  name: string;
  description:string;
  price:number;
  inStock:number;
  availableColors:string[]
  delivery?:number
}

export interface ItemByQuantity{
  item : Item;
  quantity : number;
}