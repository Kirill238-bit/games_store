import style from "@/styles/gameItem.module.scss"
import { getGameByID } from "@/app/actions/getGame";
import { GamesMassive } from "@/data/types/GamesMassProps";
import Image from 'next/image'

export interface Params{
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
          <div className={style.title_name}>купить {game?.name}</div>
          <div className={style.title_availeble}><li>В наличии</li></div>

          <div className={style.action}>
            <div className={style.action_button}>В корзину</div>
            <div className={style.action_price}>{game?.price} ₽</div>
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
            <div className={style.specification_text_item}>
              <div className={style.unchangeable}>Жанр:</div>
              <div className={style.changeable}>{game?.genres.join(' ')}</div>
            </div>
            <div className={style.specification_text_item}>
              <div className={style.unchangeable}>Платформа:</div>
              <div className={style.changeable}>PC</div>
            </div>
            <div className={style.specification_text_item}>
              <div className={style.unchangeable}>Дата выхода:</div>
              <div className={style.changeable}>{game?.date}</div>
            </div>
            <div className={style.specification_text_item}>
              <div className={style.unchangeable}>Издатель:</div>
              <div className={style.changeable}>{game?.publisher}</div>
            </div>
            <div className={style.specification_text_item}>
              <div className={style.unchangeable}>Разработчик:</div>
              <div className={style.changeable}>{game?.developer}</div>
            </div>
          </div>
          <div className={style.specification_icons}>
            <div><Image src="/images/multipleer_icon.png" alt="multipleer" height={40} width={40}/></div>
            <div><Image src="/images/cooperation_icon.png" alt="cooperation" height={40} width={40}/></div>
            <div><Image src="/images/steaam_icon.png" alt="steam" height={40} width={40}/></div>
            <div><Image src="/images/caard_icon.png" alt="card" height={40} width={40}/></div>
            <div><Image src="/images/ps_controller_icon.png" alt="controller" height={40} width={40}/></div>
            <div><Image src="/images/person_icon.png" alt="multipleer" height={40} width={40}/></div>
            <div><Image src="/images/cloud_icon.png" alt="multipleer" height={40} width={40}/></div>
          </div>
        </div>

          <div className={style.trailer}>
            <iframe width="720" height="410" src={game?.trailer} title="YouTube video player"></iframe>
          </div>
      </div>
      <div className={style.descriprion_conteiner}>
        <div>
          Здесь похожие игры(пилим отдельный компонент)
        </div>

        <div className={style.description}>
          здесь описание игры
        </div>
      </div>
    </div>
)}