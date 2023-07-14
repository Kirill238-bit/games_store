import { Games } from "@/data/games";

export function getGameByID(gameID:number){

    const game=Games.find((game) => game.id === gameID);

    if (game!=undefined){
        return game;
    }

    else{
        throw new Error("Ошибка при получении данных");
    }
}