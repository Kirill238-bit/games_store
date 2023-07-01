'use client'
import Slider from '@/components/slider'
import { SliderGames } from '@/data/sliderGames'
import { Games } from '@/data/games'
import Image from 'next/image'
import style from '../styles/page.module.scss'
import Link from 'next/link'
import { useState } from 'react'


export default function Home() {
  
  return (
    <main>
      <div>
        <Slider sliderGames={SliderGames}/>
      </div>
      <div className={style.catalog_promo_conteiner}>
        <h2 className={style.catalog_promo_conteiner_title}>Лидеры продаж</h2>
        <div className={style.catalog_promo}>
        {Games.slice(0,10).map((game,index)=>(
          <div key={index} className={style.shop_item}>
            <Link href='/games/{id}'>
            <div className={style.shop_item_image}>
              <Image 
                src={game.img} 
                alt={game.name} 
                width={238} 
                height={295}/>
            </div>
            </Link>
            <div className={style.shop_item_title}>
              <Link href='/games/{id}'><div className={style.shop_item_title_name}>{game.name}</div></Link>
                <div className={style.shop_item_conteiner}>
                  <div className={style.shop_item_conteiner_price}>{game.price} ₽</div>
                 <Link href='/basket'><div className={style.shop_item_conteiner_basket_button}>в корзину</div></Link> 
                </div>
            </div>
          </div>
        ))}
          <Link href="/catalog">
            <div className={style.catalog_promo_button}>
              каталог
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
