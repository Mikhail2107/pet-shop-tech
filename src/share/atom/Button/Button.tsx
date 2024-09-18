
import './Button.css'

interface IButtonProps {
    className?: string;  
    onClick?: () => void;
    ariaLabel: string; 
    children?: React.ReactNode
    bgImage: boolean; 
}

const Button: React.FC<IButtonProps> = ({ className, onClick, ariaLabel, children, bgImage }) => {
    return (
        <button className={`${className } && button-style `} aria-label={ariaLabel} onClick={onClick}>
            {!bgImage && `${children}`}
        </button>
    );
};

export default Button