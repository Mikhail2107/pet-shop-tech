import { FC } from "react";
import Button from "../../atom/Button/Button";

import './ButtonControl.css'

interface IButtonControl {
    className?: string;
    onClickButtonMinus: () => void;
    onClickButtonPlus: () => void;
    itemText: string;
    ariaLabelButtonMinus: string;
    ariaLabelButtonPlus: string;
}

const ButtonControl: FC<IButtonControl> = ({ 
    className, 
    onClickButtonMinus, 
    onClickButtonPlus, 
    itemText, 
    ariaLabelButtonMinus, 
    ariaLabelButtonPlus 
}) => {
    return (
        <div className={className}>
            <Button className="cart-minus-plus button-minus" onClick={onClickButtonMinus} ariaLabel={ariaLabelButtonMinus} bgImage={true}>
                -
            </Button>
            <span className="count-input">{itemText}</span>
            <Button className="cart-minus-plus button-plus" onClick={onClickButtonPlus} ariaLabel={ariaLabelButtonPlus} bgImage={true}>
                +
            </Button>
        </div>
    );
};

export default ButtonControl;