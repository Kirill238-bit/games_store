import style from './catalogPromo.module.scss'
import {GamesMassive, GamesMassProps} from '@/data/types/GamesMassProps'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CartItem } from '@/data/types/CartItems'
import { useContext } from 'react'
import { Context } from '@/app/actions/context'


const CatalogPromo:React.FC<GamesMassProps>=({max,Games,header,button,link})=>{
  
  const {CartItems,setCartItems}=useContext(Context);
  const [pagination,setPagination]=useState(10);
  max=pagination;

    function paginate(pagination:number){
      if(pagination>=10){
        setTimeout(async()=>{
          setPagination(pagination+10)
        },1000)
      }
        if(pagination==50){
        setPagination(pagination);
        }
        return pagination;
    } 

  function addToCart(game:GamesMassive){
    const newItem: CartItem = {
      id: game.id,
      name: game.name,
      price: game.price,
      img: game.img,
    };
      if(CartItems.find((item:CartItem)=> item.id===newItem.id)){
        alert('Товар уже добавлен в корзину');
      }
      else{
        setCartItems([...CartItems, newItem]);
      }
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
                 <div className={style.shop_item_conteiner_basket_button} onClick={()=>addToCart(game)}>в корзину</div>
                </div>
            </div>
          </div>
        ))}
        </div>
        {link ===true? 
        <Link href='/catalog'>
          <div className={style.catalog_promo_button}>
            {button}
          </div>  
        </Link>
        :
          <div className={style.catalog_promo_button} onClick={()=>paginate(pagination)}>
            {button}
          </div>
          }
      </div>
    )
}


export default CatalogPromo;