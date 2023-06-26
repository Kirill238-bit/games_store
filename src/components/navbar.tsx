import style from "../styles/navbar.module.scss"
import Image from "next/image"

export default function Navbar(){
    return(
        <div className={style.wrapper}>
            <div className={style.icon_conteiner}>
                <div className={style.icon_conteiner_image}>
                    <Image 
                      src="/images/control_icon.png"
                      alt="контроллер"
                      height={50}
                      width={50}/>
                </div>
                <div className={style.icon_conteiner_title}>
                    <div>Games store</div>
                </div>
            </div>

            <div className={style.games_conteiner}>
                <div><button>каталог игр </button></div>
            </div>

            <div className={style.basket_conteiner}>
                <button>
                    <Image
                       src="/images/basket_icon.png"
                       alt="корзина"
                       height={50}
                       width={50}
                       />
                </button>
            </div>
        </div>
    )
}