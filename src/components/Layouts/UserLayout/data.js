import {HeartIcons,ArticulIcon,PlusIcon,ArtMessegeIcon} from "../../UI/icons"

export const NavLink = [
    {
        id: 1,
        label: "Мои статьи",
        link: '/user',
        icon: (e)=>  ArticulIcon({fill:e}),
        children: [
            {
            id: 1,
            label: "Добавить статя",
            link: '/create-articles',
            icon: (e)=>  PlusIcon({fill:e})
            }
        ]
    },
    {
        id: 2,
        label: "Saqlanganlar",
        link: '/user-select',
        icon: (e)=>    HeartIcons({border:e})
    },
    {
        id: 2,
        label: "Xabarlar",
        link: '/user-messege',
        icon: (e)=>    ArtMessegeIcon({fill:e})
    },
]