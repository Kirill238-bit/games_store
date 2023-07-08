import style from "@/styles/gameItem.module.scss"
import { getGameByID } from "@/app/actions/getGame";
import { GamesMassive } from "@/data/types/GamesMassProps";
import Image from 'next/image'
import Link from 'next/link'
interface Params{
  params:{
    id:number
  }
}
export default function gameItem({ params:{id} }: Params) {

  const game = getGameByID(+id);

  console.log(game);

  return(
    <div className={style.wrapper}>
      <div className={style.card_conteiner}>
        <div className={style.image}>
          <Image
            src={game.img}
            alt={game.name}
            width={370}
            height={460}/>
        </div>

        <div className={style.title}>
          <div className={style.title_name}>купить {game.name}</div>
          <div className={style.title_availeble}><li>В наличии</li></div>

          <div className={style.action}>
            <div className={style.action_button}>В корзину</div>
            <div className={style.action_price}>{game.price} ₽</div>
          </div>

          <div className={style.subinfo}>
            <div className={style.subinfo_item}>Поддержка языков <div className={style.subinfo_item_body}>Полностью на русском</div></div>
            <div className={style.subinfo_item}>Регион активации <div className={style.subinfo_item_body}>Россия,Украина и СНГ </div></div>
            <div className={style.subinfo_item}>Сервис активации <div className={style.subinfo_item_body}>Steam</div></div>
          </div>  
        </div> 
      </div>
      <div className={style.info_conteiner}>
        <div className={style.specification}>
          <div className={style.specification_text}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={style.specification_icons}>

          </div>
        </div>

        <div className={style.trailer}>

        </div>
      </div>
    </div>
)}