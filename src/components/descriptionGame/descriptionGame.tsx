'use client'
import { DescriptionProps } from '@/data/types/DescriptionProps';
import style from './descriptionGame.module.scss'
import { useEffect, useMemo, useState } from 'react';

const DescriptionGame:React.FC<DescriptionProps>=({title,description})=>{
    const [about,setAbout]=useState(true);
    const [system,setSystem]=useState(false);
    const [activation,setActivation]=useState(false);

    const About=()=>{
        setSystem(false);
        setActivation(false);
        setAbout(true);
    }
    const System=()=>{
        setAbout(false);
        setActivation(false);
        setSystem(true);
    }
    const Activation=()=>{
        setSystem(false);
        setActivation(true);
        setAbout(false);
    }

    console.log(`about:${about}`)
    console.log(`system:${system}`)
    console.log(`activation:${activation}`)
    return(
        <div className={style.wrapper}>
            <div className={style.navigation}>
                <div onClick={()=>About()}>об игре</div>
                <div onClick={()=>System()}>системные требования</div>
                <div onClick={()=>Activation()}>активация</div>
            </div>
            <div className={style.content}>
                <div className={`${style.about} ${about ? style.about_active : ''}`}>
                    <div className={style.content_title}>{title}</div>
                    <div className={style.content_info}>{description}</div>
                </div>

                <div className={`${style.system} ${system ? style.system_active : ''}`}>
                    <div className={style.title}>Минимальные системные требования</div>
                    <div className={style.conteiner}>
                        <div className={style.item}>
                            <div className={style.unchangeable}>OС</div>
                            <div>Windows 10 (64-разрядная)</div>
                        </div>
                        <div className={style.item}>
                            <div className={style.unchangeable}>Процессор</div>
                            <div>Intel Core i3-4160 или эквивалентный от AMD</div>
                        </div>
                        <div className={style.item}>
                            <div className={style.unchangeable}>Оперативная память</div>
                            <div>8 ГБ ОЗУ</div>
                        </div>
                        <div className={style.item}>
                            <div className={style.unchangeable}>Видеокарта</div>
                            <div>NVIDIA GTX 950 или AMD Radeon RX 470</div>
                        </div>
                        <div className={style.item}>
                            <div className={style.unchangeable}>DirectX</div>
                            <div>Версии 12</div>
                        </div>
                        <div className={style.item}>
                            <div className={style.unchangeable}>Место на диске</div>
                            <div>75 ГБ</div>
                        </div>
                        <div className={style.item}>
                            <div className={style.unchangeable}>Дополнительно</div>
                            <div>Требуются 64-разрядная операционная система</div>
                        </div>
                    </div>
                    <div className={style.title}>Рекомендуемые системные требования</div>
                    <div className={style.conteiner2}>
                        <div className={style.item}>
                            <div className={style.unchangeable}>OС</div>
                            <div>Windows 10 (64-разрядная)</div>
                        </div>
                        <div className={style.item}>
                            <div className={style.unchangeable}>Процессор</div>
                            <div>ntel Core i5-4670 или AMD Ryzen5 1600</div>
                        </div>
                        <div className={style.item}>
                            <div className={style.unchangeable}>Оперативная память</div>
                            <div>16 ГБ ОЗУ</div>
                        </div>
                        <div className={style.item}>
                            <div className={style.unchangeable}>Видеокарта</div>
                            <div>NVIDIA GTX 1060 6 ГБ или AMD Radeon RX 580 8 ГБ</div>
                        </div>
                        <div className={style.item}>
                            <div className={style.unchangeable}>DirectX</div>
                            <div>Версии 12</div>
                        </div>
                        <div className={style.item}>
                            <div className={style.unchangeable}>Место на диске</div>
                            <div>75 ГБ</div>
                        </div>
                        <div className={style.item}>
                            <div className={style.unchangeable}>Дополнительно</div>
                            <div>Требуются 64-разрядная операционная система</div>
                        </div>
                    </div>
                </div>

                <div className={`${style.activation} ${activation ? style.activation_active : ''}`}>
                    <div className={style.text}>
                        <div className={style.icon}>1</div>
                        Скопируйте ключ приобретённой игры.
                    </div>
                    <div className={style.text}>
                        <div className={style.icon}>2</div>
                        Если у вас не установлен клиент Steam,<a href='https://store.steampowered.com/about/'>скачайте и установите его.</a>
                    </div>
                    <div className={style.text}>
                        <div className={style.icon}>3</div>
                        Войдите в свой аккаунт Steam или зарегистрируйте новый, если у вас его нет.
                    </div>
                    <div className={style.text}>
                        <div className={style.icon}>4</div>
                        Перейдите в раздел «Игры» и выберите «Активировать через Steam...».
                    </div>
                    <div className={style.text}>
                        <div className={style.icon}>5</div>
                        Введите ключ активации.
                    </div>
                    <div className={style.text}>
                        <div className={style.icon}>6</div>
                        После этого игра будет в вашей библиотеке Steam, и вы сможете её скачать.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionGame;
