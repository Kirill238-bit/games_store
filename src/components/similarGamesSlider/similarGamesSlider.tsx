'use client'
import { SimilarGamesProps } from '@/data/types/SimilarGames'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import style from './similarGamesSlider.module.scss'

const SimilarGamesSlider:React.FC<SimilarGamesProps>=({Games})=>{
    const [position,setPosition]=useState(0);

    const setPrev=()=>{
        if (position > 0) setPosition(position-1);
        if(position===0) setPosition(0);
        console.log(position);
    }
    const setNext=()=>{   
        if (position >= 0) setPosition(position+1);
        if(position===7) setPosition(position+0);
        console.log(position);
    }
    return(
        <div className={style.wrapper}>
          <div className={style.wrapper_title}>Похожие игры</div>
            <div className={style.wrapper_slider}>
                {Games.slice(0,9).map((game)=>(
                    <div key={game.id} className={style.slider_item}
                    style={{ transform: `translateX(-${(position*110)}%)`}}>
                        <Link href={`/gameItem/${game.id}`}>
                        <div className={style.slider_item_image}>
                            <Image
                                src={game.img} 
                                alt={game.name} 
                                width={177} 
                                height={220}/>
                        </div>
                        </Link>
                    <div className={style.slider_item_title}>
                        <Link href={`/gameItem/${game.id}`}><div className={style.slider_item_title_name}>{game.name}</div></Link>
                        <div className={style.slider_item_conteiner}>
                            <div className={style.slider_item_conteiner_price}>{game.price} ₽</div>
                        </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className={style.conteiner_buttons}>
                <div className={style.button} onClick={setPrev}>
                    {'<'}
                </div>
                <div className={style.progressbar}>
                    <div className={style.progressbar_value}
                    style={{ transform: `translateX(${(position* 100)}%)`}}>
                    </div>
                </div>
                <div className={style.button} onClick={setNext}>
                    {'>'}
                </div>
            </div>
        </div>
    )
}

export default SimilarGamesSlider;