import React from 'react'
import ContainerSmoll from '../../UI/Container/LitleContainer'
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

            </ContainerSmoll>
        </div>
    )
}
