import cls from "./container.module.scss"

export default function ContainerSmoll({ children, ...other }) {
    return (
        <div className={cls.ContainerSmoll} {...other}>
            {children}
        </div>
    )
}
