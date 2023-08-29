import style from "./Button.module.scss";

interface ButtonProps {
    children: string
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}

const Button = ({ children, type, onClick }: ButtonProps) => {
    return (
        <button type={type ? type : "button"} className={style.botao} onClick={onClick ?? onClick}>
            {children}
        </button>
    )
}

export default Button;
