'use client'
import { CartItem,} from '@/data/types/CartItems';
import style from '@/styles/basket.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { Context } from '../actions/context';


export default function Basket(){
  const {CartItems,setCartItems}=useContext(Context);

    return (
      <div className={style.wrapper}>
        <div className={style.column_items}>
        <span className={style.title}>МОЙ ЗАКАЗ <span>2</span></span>
          {CartItems.map((game:CartItem)=>(
            <div key={game.id} className={style.item_conteiner}>
              <Link href={`/gameItem/${game.id}`}>
              <div className={style.image}>
                <Image src={game.img}
                alt={game.name}
                width={126}
                height={156}/>
              </div>
              </Link>

              <div className={style.info}>
                <div className={style.info_title}>
                  <Link href={`/gameItem/${game.id}`}><div>{game.name}</div></Link>
                  <div>x</div>
                </div>
                <div className={style.price}>{game.price}</div>
                <div className={style.subtitle}>
                  <div>Регион активации:<span>Россия, Украина и СНГ</span></div>
                  <div>Сервис активации:<span>Steam</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={style.total_conteiner}>
          <div className={style.total_price}>Итого <span>3498 р</span></div>
          <div className={style.button}>оформить заказ</div>
        </div>
      </div>
    );
}