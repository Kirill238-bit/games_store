import { CartItem } from "./CartItems";

 export type GamesMassive=
    {
    id:number,
    name:string,
    img:string,
    trailer:string,
    titile:string,
    description:string,
    genres:string[],
    date:string,
    publisher:string,
    developer:string,
    price:number,
    }

 export type GamesMassProps=
    {
    Games:GamesMassive[];
    max:number;
    header:string;
    button:string;
    }

