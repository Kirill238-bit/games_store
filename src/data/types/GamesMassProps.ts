 export type GamesMassive=
    {
    id:number,
    name:string,
    img:string,
    trailer:string,
    titile?:string,
    description:string,
    genre:string,
    date:string,
    publisher:string,
    developer:string,
    price:number,
    }

 export type GamesMassProps=
    {
    Games:GamesMassive[];
    max:number;
    }