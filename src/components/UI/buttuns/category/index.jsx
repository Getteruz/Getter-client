import cls from "./CategoryBtn.module.scss"

export default function CategoryBtn({ className, children, onClick, ...other }) {
    return (
        <button className={`${cls.CategoryBtn} ${className && className}`} onClick={onClick} {...other}>
            {children}
        </button>
    )
}
