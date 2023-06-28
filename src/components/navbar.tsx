import style from "../styles/navbar.module.scss"
import Image from "next/image"
import Link from "next/link"

export default function Navbar(){
    return(
        <div className={style.wrapper}>
            <div className={style.icon_conteiner}>
                <Link href='/'>
                <div className={style.icon_conteiner_image}>
                    <Image 
                      src="/images/control_icon.png"
                      alt="контроллер"
                      height={50}
                      width={50}/>
                </div>
                </Link>
                <div className={style.icon_conteiner_title}>
                    Games store
                </div>
            </div>

            <div className={style.games_conteiner}>
                <div><Link href='/catalog'className={style.games_conteiner_button}>каталог игр</Link></div>
            </div>

            <div className={style.basket_conteiner}>
                <Link href='/basket'>
                    <Image
                       src="/images/basket_icon.png"
                       alt="корзина"
                       height={50}
                       width={50}
                       />
                </Link>
            </div>
        </div>
    )
}