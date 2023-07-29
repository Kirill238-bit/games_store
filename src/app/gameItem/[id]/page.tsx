'use client'
import style from "@/styles/gameItem.module.scss"
import { getGameByID } from "@/app/actions/getGame";
import Image from 'next/image'
import { getSimilarGames } from "@/app/actions/getSImilar";
import SimilarGamesSlider from "@/components/similarGamesSlider/similarGamesSlider";
import DescriptionGame from "@/components/descriptionGame/descriptionGame"
import { Params } from "@/data/types/Params";
import { useContext } from "react";
import { Context } from "@/app/actions/context";
import { GamesMassive } from "@/data/types/GamesMassProps";
import { CartItem } from "@/data/types/CartItems";


export default function gameItem({ params:{id} }: Params) {

  const game = getGameByID(+id);//получение игры которую отрисовать

  const gamesWithGenre = getSimilarGames(game.genres);//похожие игры

  const{CartItems,setCartItems}=useContext(Context);

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
            <div className={style.action_button} onClick={()=>addToCart(game)}>В корзину</div>
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
            <div className={style.specification_text_item}>
              <div className={style.unchangeable}>Жанр:</div>
              <div className={style.changeable}>{game.genres.join(' ')}</div>
            </div>
            <div className={style.specification_text_item}>
              <div className={style.unchangeable}>Платформа:</div>
              <div className={style.changeable}>PC</div>
            </div>
            <div className={style.specification_text_item}>
              <div className={style.unchangeable}>Дата выхода:</div>
              <div className={style.changeable}>{game.date}</div>
            </div>
            <div className={style.specification_text_item}>
              <div className={style.unchangeable}>Издатель:</div>
              <div className={style.changeable}>{game.publisher}</div>
            </div>
            <div className={style.specification_text_item}>
              <div className={style.unchangeable}>Разработчик:</div>
              <div className={style.changeable}>{game.developer}</div>
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
            <iframe width="720" height="410" src={game.trailer} title="YouTube video player"></iframe>
          </div>
      </div>
      <div className={style.descriprion_conteiner}>
        <div>
          <SimilarGamesSlider Games={gamesWithGenre}/>
        </div>

        <div>
          <DescriptionGame description={game.description} title={game.titile}/>
        </div>
      </div>
    </div>
)}