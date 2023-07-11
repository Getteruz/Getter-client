import React from 'react'

import ServiceCard from '../../UI/Cards/serviceCard'
import TeamCard from '../../UI/Cards/TeamCard'
import ContainerSmoll from '../../UI/Container/LitleContainer'
import NotRobat from '../../UI/delatls/notRobot'
import RequiesInput from '../../UI/Form/RequiesInput'
import UploadText from '../../UI/Form/uploadText'
import cls from "./AboutUsPage.module.scss"

export default function AboutUsPage() {
    return (
        <div className={cls.AboutUsPage}>
            <p className={cls.AboutUsPage__span}>Biz haqimizda</p>
            <h2 className={cls.AboutUsPage__title}>Biz raqamli dunyoda eng ajoyib mojizalarni yaratamiz!</h2>
            <div className={cls.AboutUsPage__btn__wrap}>
                <button className={cls.AboutUsPage__btn}>Konsultatsiya olish tekin</button>
            </div>
            <div className={cls.AboutUsPage__wrap}>
                <p className={cls.AboutUsPage__wrap__text}>
                    Мы - инновационная IT-компания, специализирующаяся на создании прогрессивных решений. Наша команда талантливых разработчиков и дизайнеров стремится к тому, чтобы наши продукты переносят клиентов в цифровое будущее.
                    Мы предлагаем широкий спектр услуг, включая разработку веб-сайтов, мобильных приложений, десктопных программ и систем управления.
                    Наша миссия - создавать инновации, которые преображают мир и улучшают жизни людей.
                    Мы - инновационная IT-компания, специализирующаяся на создании прогрессивных решений. Наша команда талантливых разработчиков и дизайнеров стремится к тому, чтобы наши продукты переносят клиентов в цифровое будущее.
                    Мы предлагаем широкий спектр услуг, включая разработку веб-сайтов, мобильных приложений, десктопных программ и систем управления.
                    Наша миссия - создавать инновации, которые преображают мир и улучшают жизни людей.
                    Мы - инновационная IT-компания, специализирующаяся на создании прогрессивных решений. Наша команда талантливых разработчиков и дизайнеров стремится к тому, чтобы наши продукты переносят клиентов в цифровое будущее.
                    Мы предлагаем широкий спектр услуг, включая разработку веб-сайтов, мобильных приложений, десктопных программ и систем управления.
                    Наша миссия - создавать инновации, которые преображают мир и улучшают жизни людей.
                </p>
            </div>
            <ContainerSmoll>
                <ServiceCard
                    style={{ border: "none", marginTop: "100px", marginBottom: "88px" }}
                    number={""}
                    title={"Bizning oilamiz"}
                    text={"— Создание и поддержка пользовательских программ и приложений для различных платформ, включая веб-приложения, мобильные приложения и настольные приложения."}
                    arr={["Jamoaga qo'shilish", "FAQ"]}
                />
                <div className={cls.AboutUsPage__team}>
                    <TeamCard url={'/user.svg'} firtname={"Abbos"} lastname={"Janizakov"} role={"CEO Founder"} style={{ marginBottom: "50px" }} />
                    <TeamCard url={'/user.svg'} firtname={"Abbos"} lastname={"Janizakov"} role={"CEO Founder"} style={{ marginBottom: "50px" }} />
                    <TeamCard url={'/user.svg'} firtname={"Abbos"} lastname={"Janizakov"} role={"CEO Founder"} style={{ marginBottom: "50px" }} />
                    <TeamCard url={'/user.svg'} firtname={"Abbos"} lastname={"Janizakov"} role={"CEO Founder"} style={{ marginBottom: "50px" }} />
                    <TeamCard url={'/user.svg'} firtname={"Abbos"} lastname={"Janizakov"} role={"CEO Founder"} style={{ marginBottom: "50px" }} />
                    <TeamCard url={'/user.svg'} firtname={"Abbos"} lastname={"Janizakov"} role={"CEO Founder"} style={{ marginBottom: "50px" }} />
                    <TeamCard url={'/user.svg'} firtname={"Abbos"} lastname={"Janizakov"} role={"CEO Founder"} style={{ marginBottom: "50px" }} />
                </div>
                <ServiceCard
                    style={{ border: "none", marginTop: "180px", marginBottom: "59px" }}
                    number={""}
                    title={"Qayta aloqa"}
                    text={"— Создание и поддержка пользовательских"}
                />

                <form className={cls.AboutUsPage__form} style={{ marginBottom: "340px" }}>
                    <div className={cls.AboutUsPage__form__wrap}>
                        <RequiesInput placeholder={"Ismingiz"} style={{ marginBottom: "70px" }} />
                        <RequiesInput placeholder={"+998"} style={{ marginBottom: "70px" }} />
                    </div>
                    <RequiesInput placeholder={"Matningizni kiriting"} style={{ marginBottom: "52px" }} />
                    <UploadText label={"Matningizni kiriting"} />

                    <NotRobat label={"Men Robot emasman ammo na qilay!"} style={{ marginTop: "100px", marginBottom: "59px" }} />
                    <button className={cls.AboutUsPage__btn} style={{ width: "100%", maxWidth: "182px" }}>Yuborish</button>
                </form>
            </ContainerSmoll>
        </div>
    )
}
