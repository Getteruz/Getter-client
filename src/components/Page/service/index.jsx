import Image from 'next/image'
import React from 'react'
import ServiceCard from '../../UI/Cards/serviceCard'
import ContainerSmoll from '../../UI/Container/LitleContainer'
import SearchInput from '../../UI/Form/search'
import cls from "./service.module.scss"

export default function ServicePage() {
    return (
        <ContainerSmoll style={{ marginTop: "51px" }}>
            <SearchInput placeholder={"Что вас интересует"} />

            <div className={cls.ServicePage__wrap}>
                <div className={cls.ServicePage__wrap__content}>
                    <h3 className={cls.ServicePage__wrap__title}>Xizmatlarimiz</h3>
                    <p className={cls.ServicePage__wrap__span}>Practices for building</p>
                    <p className={cls.ServicePage__wrap__text}>Мы IT-фирма, предоставляющая услуги разработки программного обеспечения и веб-проектов.</p>
                </div>
                <Image
                    src='/public/service.png'
                    width={220}
                    height={278}
                    objectFit="cover"
                />

            </div>
            <ServiceCard
                number={"01"}
                title={"Dasturiy ta'minotni ishlab chiqish:"}
                text={"— Создание и поддержка пользовательских программ и приложений для различных платформ, включая веб-приложения, мобильные приложения и настольные приложения."}
                arr={['Desktop dasturlar', "Veb saytlar", "Mobil ilovalar"]}
            />
            <ServiceCard
                number={"02"}
                title={"Dizayn xizmatlar:"}
                text={"— Создание и поддержка пользовательских программ и приложений для различных платформ, включая веб-приложения, мобильные приложения и настольные приложения."}
                arr={['Dizayn xizmatlari', "Boshqaruvni avtomatlashtirish", "StartUp loyihalar"]}
            />
            <ServiceCard
                number={"03"}
                title={"Коммерческое:"}
                text={"— Создание и поддержка пользовательских программ и приложений для различных платформ, включая веб-приложения, мобильные приложения и настольные приложения."}
                arr={['Добавить', "Склад", "StartUp loyihalar"]}
            />
        </ContainerSmoll>
    )
}
