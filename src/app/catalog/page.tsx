'use client'
import CatalogPromo from '@/components/catalogPromo'
import { Games } from '@/data/games'
import {GamesMassive,} from '@/data/types/GamesMassProps'
import style from '@/styles/catalog.module.scss'
import { useEffect, useState } from 'react'

export default function Catalog(){
    const [sortBy,setSortBy]=useState<string>("");
    const [sortedGames,setSortedGames]=useState<GamesMassive[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<string>("");
    const [SelectedPublisher, setSelectedPublisher] = useState<string>("");
    const [SelectedDeveloper, setSelectedDeveloper] = useState<string>("");
    const [resetFilters,setResetFilters]=useState(false);

    //сортировка
    useEffect(()=>{
        let sortedGamesCopy=[...Games];

        if(sortBy==='По популярности'){
            sortedGamesCopy.sort(()=>Math.random()-0.5);
            setResetFilters(false);
        }
        if(sortBy==='Сначала дешевые'){
            sortedGamesCopy.sort((a,b)=>a.price-b.price);
            setResetFilters(false);
        }
        if(sortBy==='Сначала дорогие'){
            sortedGamesCopy.sort((a,b)=>b.price-a.price);
            setResetFilters(false);
        }
        if(sortBy==='По алфавиту'){
            sortedGamesCopy.sort((a,b)=>a.name.localeCompare(b.name));
            setResetFilters(false);
        }
        if (selectedGenre !== "") {
            sortedGamesCopy = sortedGamesCopy.filter(Games => Games.genres.find((genre)=> genre=== selectedGenre));
            setResetFilters(false);
        }
        if (SelectedPublisher !== "") {
            sortedGamesCopy = sortedGamesCopy.filter(Games => Games.publisher === SelectedPublisher);
            setResetFilters(false);
        }
        if (SelectedDeveloper !== "") {
            sortedGamesCopy = sortedGamesCopy.filter(Games => Games.developer === SelectedDeveloper);
            setResetFilters(false);
        }
        if(resetFilters===true){
            setSortBy("");
            setSelectedGenre("");
            setSelectedPublisher("");
            setSelectedDeveloper("")
            sortedGamesCopy=[...Games];
        }
          
        setSortedGames(sortedGamesCopy);
        
    },[sortBy,selectedGenre,SelectedDeveloper,SelectedPublisher,resetFilters]);

    //массив для издателей и разрабов
    const uniqueArr = Games.filter((game, index, self) =>
        index === self.findIndex((g) => (
        g.publisher === game.publisher
        ))
    );

    return(
        <div className={style.wrapper}>
            <div className={style.conteiner}>
                <span className={style.title} >каталог игр <span>{Games.length}</span> </span>
                    <div className={style.filtres}>
                        <div onClick={()=>setSortBy("По популярности")}>По популярности</div>
                        <div onClick={()=>setSortBy("Сначала дешевые")}>Сначала дешевые</div>
                        <div onClick={()=>setSortBy("Сначала дорогие")}>Сначала дорогие</div>
                        <div onClick={()=>setSortBy("По алфавиту")}>По алфавиту</div>

                        <div className={style.genres}>
                            <select onChange={(e)=>{setSelectedGenre(e.target.value)}} defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>ЖАНРЫ</option>
                                <option value='Экшен'>Экшен</option>
                                <option value='Ролевые'>Ролевые</option>
                                <option value='Гонки'>Гонки</option>
                                <option value='Инди'>Инди</option>
                                <option value='Казуальные'>Казуальные</option>
                                <option value='Онлайн'>Онлайн</option>
                                <option value='Приключения'>Приключения</option>
                                <option value='Симуляторы'>Симуляторы</option>
                                <option value='Спорт'>Спорт</option>
                                <option value='Стратегии'>Стратегии</option>
                            </select>
                        </div>
                        <div className={style.publisher}>
                            <select onChange={(e)=>{setSelectedPublisher(e.target.value)}} defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled >ИЗДАТЕЛЬ</option>
                                {uniqueArr.map((game,index) => (
                                <option key={index} value={game.publisher}>
                                    {game.publisher}
                                </option>))}
                            </select>
                        </div>
                        <div className={style.developer}>
                            <select onChange={(e)=>{setSelectedDeveloper(e.target.value)}} defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>РАЗРАБОТЧИК</option>
                                {uniqueArr.map((game,index) => (
                                <option key={index} value={game.developer}>
                                    {game.developer}
                                </option>))}
                            </select>
                        </div>

                        <div className={style.none_button} >
                            <span className={style.none_button_text} onClick={()=>setResetFilters(true)}>очистить</span>
                        </div>
                    </div>
            </div>
            <div>
                <CatalogPromo max={Games.length} Games={sortedGames} header={""} button={"Показать еще"}/>
            </div>
        </div>
    )
}


