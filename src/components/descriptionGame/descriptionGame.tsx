'use client'
import { DescriptionProps } from '@/data/types/DescriptionProps';
import style from './descriptionGame.module.scss'
import { useState } from 'react';

const DescriptionGame:React.FC<DescriptionProps>=({title,description})=>{

    return(
        <div className={style.wrapper}>
            <div className={style.navigation}>
                <div>об игре</div>
                <div>системные требования</div>
                <div>активация</div>
            </div>
            <div className={style.content}>
                <div>
                    <div className={style.content_title}>{title}</div>
                    <div className={style.content_info}>{description}</div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default DescriptionGame;
