import { Games } from "@/data/games";

export function getGameByID(gameID:number){
    const game=Games.find((game) => game.id === gameID);

    return game;
}