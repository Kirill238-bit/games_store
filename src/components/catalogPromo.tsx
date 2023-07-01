import style from '../styles/catalogPromo.module.scss'
import {GamesMassProps} from '@/data/types/GamesMassProps'
import Image from 'next/image'
import Link from 'next/link'


const CatalogPromo:React.FC<GamesMassProps>=({max,Games})=>{
    return(
        <div className={style.catalog_promo_conteiner}>
        <h2 className={style.catalog_promo_conteiner_title}>Лидеры продаж</h2>
        <div className={style.catalog_promo}>
        {Games.slice(0,max).map((game,index)=>(
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
    )
}

export default CatalogPromo;