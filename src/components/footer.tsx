import style from "../styles/footer.module.scss"
import Image from "next/image"

export default function Footer(){
    return(
        <div className={style.wrapper}>
            <div className={style.conteiner}>
                <div className={style.info}>
                    <div className={style.info_icon}>
                        <div className={style.info_icon_img}>
                            <Image 
                               src="/images/control_icon.png"
                               alt="контроллер"
                               height={50}
                               width={50}/>
                        </div>
                        <div className={style.info_icon_title}>
                            <div>Games store</div>
                        </div>
                    </div>
                    <div className={style.info_menu}>
                        <div>о компании</div>
                        <div>контакты</div>
                        <div>вакансии</div>
                        <div>поддержка</div>
                        <div>подарочные карты</div>
                        <div>соглашение</div>
                        <div>конфиденциальность</div>
                        <div>возвраты</div>
                        <div>правовая информация</div>
                    </div>
                    <div className={style.info_social}>
                        <div> иконка вк</div>
                        <div> иконка телеги</div>
                        <div> иконка дс</div>
                        <div> иконка ютуба</div>
                    </div>
                </div>

                <div className={style.images}>
                        <div>иконка визы</div>
                        <div>иконка мастеркард</div>
                        <div>иконка мир</div>
                        <div>иконка киви</div>
                        <div>иконка кассы</div>
                </div>
            </div>
        </div>
    )
}