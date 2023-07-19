
export type CartItem ={
    id: number;
    name: string;
    img:string;
    price: number;
  }
  
  export type CartItemProps={
    Item:CartItem[],
  }