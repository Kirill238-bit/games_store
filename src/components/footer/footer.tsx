import style from "./footer.module.scss"
import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
        <div className={style.wrapper}>
            <div className={style.conteiner}>
                <div className={style.info}>
                    <div className={style.info_icon}>
                        <Link href='/'>
                            <div className={style.info_icon_image}>
                                <Image 
                                    src="/images/controller_icon.png"
                                    alt="контроллер"
                                    height={50}
                                    width={50}/>
                            </div>
                        </Link>
                        <div className={style.info_icon_title}>
                            Games store
                        </div>
                    </div>
                    <div className={style.info_menu}>
                        <div className={style.info_menu_block}>
                        <div>о компании</div>
                        <div>контакты</div>
                        <div>вакансии</div>
                        </div>

                        <div className={style.info_menu_block}>
                        <div>поддержка</div>
                        <div>подарочные карты</div>
                        <div>соглашение</div>
                        </div>

                        <div className={style.info_menu_block}>
                        <div>конфиденциальность</div>
                        <div>возвраты</div>
                        <div>правовая информация</div>
                        </div>
                    </div>
                    <div className={style.info_social}>
                        <div> <Image 
                                 src='/images/vk_icon.png'
                                 alt='vk'
                                 width={30}
                                 height={30}
                                 />
                        </div>
                        <div className={style.info_social_teleg}> 
                              <Image 
                                 src='/images/teleg_icon.png'
                                 alt='telegram'
                                 width={26}
                                 height={26}
                                 />
                        </div>
                        <div> <Image 
                                 src='/images/dc_icon.png'
                                 alt='discord'
                                 width={30}
                                 height={30}
                                 />
                        </div>
                        <div> <Image 
                                 src='/images/youtube_icon.png'
                                 alt='youtube'
                                 width={30}
                                 height={30}
                                 />
                        </div>
                    </div>
                </div>

                <div className={style.images}>
                        <div><Image 
                                 src='/images/visa_icon.png'
                                 alt='youtube'
                                 width={50}
                                 height={50}
                                 />
                        </div>
                        <div><Image 
                                 src='/images/mastercard_icon.png'
                                 alt='youtube'
                                 width={50}
                                 height={50}
                                 />
                        </div>
                        <div><Image 
                                 src='/images/mir_icon.png'
                                 alt='youtube'
                                 width={50}
                                 height={50}
                                 />
                        </div>
                        <div className={style.images_kassa}><Image 
                                 src='https://gabestore.ru/images/icons-logo-yookassa-w.svg'
                                 alt='youtube'
                                 width={120}
                                 height={30}
                                 />
                        </div>
                        <div><Image 
                                 src='/images/qiwi_icon.png'
                                 alt='youtube'
                                 width={50}
                                 height={50}
                                 />
                        </div>
                </div>

                <div className={style.notification_conteiner}>
                    <div className={style.notification_conteiner_image}>
                        <Image 
                           src="/images/noPirate_icon.png" 
                           alt="пираты"
                           width={50} 
                           height={50}/>
                    </div>
                    <div className={style.notification_conteiner_text}>
                    Все продаваемые ключи закупаются у официальных дистрибьюторов<br/>
                    и издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza.
                    </div>
                </div>
            </div>
        </div>
    )
}