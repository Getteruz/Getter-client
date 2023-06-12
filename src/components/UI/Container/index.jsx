import cls from "./container.module.scss"

export default function Container({ children, ...other }) {
    return (
        <div className={cls.Container}>
            {children}
        </div>
    )
}
