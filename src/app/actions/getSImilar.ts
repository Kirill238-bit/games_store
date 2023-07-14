import { Games } from "@/data/games";

export function getSimilarGames(genres:string[]){

    const gamesWithGenre = [];

    for (const genre of genres) {
        const GamesInGenre = Games.filter((game) => game.genres.includes(genre));
        gamesWithGenre.push(...GamesInGenre);
    }

    if(gamesWithGenre!=undefined){
        return gamesWithGenre;
    }
    
    else{
        throw new Error("Ошибка при получении данных");
    }
}