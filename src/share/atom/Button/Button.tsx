
import './Button.css'

interface IButtonProps {
    className?: string;  
    onClick?: () => void;
    ariaLabel: string; 
    children?: React.ReactNode
    bgImage: boolean; 
    typeButton?: "submit" | "reset" | "button" | undefined;
}

const Button: React.FC<IButtonProps> = ({ className, onClick, ariaLabel, children, typeButton, bgImage }) => {
    return (
        <button className={`${className } && button-style `} 
                aria-label={ariaLabel} 
                onClick={onClick}
                type={typeButton}>
            {!bgImage && `${children}`}
        </button>
    );
};

export default Button