'use client'
import { CartItem,} from '@/data/types/CartItems';
import style from '@/styles/basket.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { Context } from '../actions/context';


export default function Basket(){
  const {CartItems,setCartItems}=useContext(Context);

  const getTotalPrice = (CartItems: CartItem[]):number => {
    let total = 0;

    for (let item of CartItems) {
      const itemCost = item.price*1;
      total += itemCost;
    }
    return total;
  }

  function deleteFromCart(item:CartItem){
    setCartItems(CartItems.filter((game:CartItem)=>game.id!=item.id))
  }
  
    return (
      <div className={style.wrapper}>
        {CartItems.length === 0 ? (
        <p>Корзина пуста</p>
          ) : (
        <>
        <div className={style.column_items}>
        <span className={style.title}>МОЙ ЗАКАЗ <span>{CartItems.length}</span></span>
          {CartItems.map((game:CartItem)=>(
            <div key={game.id} className={style.item_conteiner}>
              <div onClick={()=>deleteFromCart(game)} className={style.delete_mobile}>x</div>
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
                  <div onClick={()=>deleteFromCart(game)} className={style.delete}>x</div>
                </div>
                <div className={style.price}>{game.price} ₽</div>
                <div className={style.subtitle}>
                  <div>Регион активации:<span>Россия, Украина и СНГ</span></div>
                  <div>Сервис активации:<span>Steam</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={style.total_conteiner}>
          <div className={style.total_price}>Итого <span>{getTotalPrice(CartItems)} ₽</span></div>
          <div className={style.button} onClick={()=>alert('Спасибо за покупку!')}>оформить заказ</div>
        </div>
        </>
        )}
      </div>
    )
}