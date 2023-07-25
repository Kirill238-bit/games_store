'use client'
import style from './slider.module.scss'
import Image from 'next/image'
import { useState } from 'react';
import { SliderProps } from '@/data/types/SliderProps';

const Slider:React.FC<SliderProps>=({sliderGames})=>{

    const [position,setPosition]=useState(0);
    //позия слайдера
    const setPrev=()=>{
        if (position > 0) setPosition(position-1);
        if(position===0) setPosition(0);
        console.log(position);
    }
    const setNext=()=>{   
        if (position >= 0) setPosition(position+1);
        if(position===5) setPosition(position+0);
        console.log(position);
    }
    
    return(
        <div className={style.conteiner}>
            <div className={style.conteiner_slider}>
                    {sliderGames.map((game,index)=>(
                        <div key={index} className={style.slider}
                        style={{ transform: `translateY(-${(position*100)}%)`}}>
                            <div className={style.slider_image}>
                                <Image src={game.img}
                                       alt={game.name}
                                       width={1280}
                                       height={720}/>
                                <div className={style.slider_title}>
                                    <h1>{game.name}</h1>
                                    <h3>Ищите на сайте</h3>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
                    <div className={style.conteiner_buttons}>
                        <div className={style.button}> 
                        <Image src='/images/up_icon.png'alt='prev' width={44} height={44} onClick={setPrev} 
                        className={style.conteiner_buttons_prev}/>
                        </div>
                        <div className={style.progressbar}>
                            <div className={style.progressbar_value}
                            style={{ transform: `translateY(${(position* 100)}%)`}}></div>
                        </div>
                        <div className={style.button}>
                        <Image src='/images/downE_icon.png'alt='next' width={44} height={44} onClick={setNext} 
                        className={style.conteiner_buttons_next}/>
                        </div>
                    </div>
        </div>
        
    )
}

export default Slider;