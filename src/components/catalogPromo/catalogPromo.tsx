import style from './catalogPromo.module.scss'
import {GamesMassive, GamesMassProps} from '@/data/types/GamesMassProps'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CartItem } from '@/data/types/CartItems'
import Basket from '@/app/basket/page'
import { useContext } from 'react'
import { Context } from '@/app/actions/context'


const CatalogPromo:React.FC<GamesMassProps>=({max,Games,header,button})=>{
  
  const{CartItems,setCartItems}=useContext(Context);

  function addToCart(game:GamesMassive){
    const newItem: CartItem = {
      id: game.id,
      name: game.name,
      price: game.price,
      img: game.img,
  };
    setCartItems([...CartItems, newItem]);
  } 
  console.log(CartItems);
    return(
        <div className={style.catalog_promo_conteiner}>
        <h2 className={style.catalog_promo_conteiner_title}>{header}</h2>
        <div className={style.catalog_promo}>
        {Games.slice(0,max).map((game)=>(
          <div key={game.id} className={style.shop_item}>
            <Link href={`/gameItem/${game.id}`}>
            <div className={style.shop_item_image}>
              <Image 
                src={game.img} 
                alt={game.name} 
                width={208} 
                height={280}/>
            </div>
            </Link>
            <div className={style.shop_item_title}>
              <Link href={`/gameItem/${game.id}`}><div className={style.shop_item_title_name}>{game.name}</div></Link>
                <div className={style.shop_item_conteiner}>
                  <div className={style.shop_item_conteiner_price}>{game.price} ₽</div>
                 <div className={style.shop_item_conteiner_basket_button}  onClick={()=>addToCart(game)}>в корзину</div>
                </div>
            </div>
          </div>
        ))}
        </div>
        <Link href="/catalog">
            <div className={style.catalog_promo_button}>
              {button}
            </div>
          </Link>
      </div>
    )
}


export default CatalogPromo;