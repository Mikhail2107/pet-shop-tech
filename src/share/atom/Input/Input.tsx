import './Input.css'

interface IInputProps {
    className?: string;
    areaLabel: string;
    inputType: string;
    placeHolder?: string;
    value?: string;
    onChange?: () => void;
}
function Input({areaLabel, inputType, placeHolder, className, value, onChange}:IInputProps){
    return (
        <>
            <div className="input-style-panel">
                <input type={inputType}
                aria-label={areaLabel}
                placeholder={placeHolder}
                className={`input-style ${className}`}
                value={value}
                onChange={onChange}/>       
            </div>
        </>
    )
}
export default Input;