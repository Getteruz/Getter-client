import Image from "next/image";

export default function TeamCard({ url, firtname, lastname, role, ...other }) {
    return (
        <div className={cls.TeamCard} {...other}>
            <Image
                src={url}
                width={190}
                height={190}
                alt={'img'}
                objectFit="cover"
            />
            <h2 className={cls.TeamCard__title}>{firtname} {lastname}</h2>
            <p className={cls.TeamCard__name}>{role}</p>
        </div>
    )
}
