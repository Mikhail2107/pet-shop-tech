import './Input.css'

interface IInputProps {
    classNameInput?: string;
    className?: string;
    areaLabel: string;
    inputType: string;
    placeHolder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function Input({classNameInput,areaLabel, inputType, placeHolder, className, value, onChange}:IInputProps){
    
    return (
        <>
            <div className={`input-style-panel ${classNameInput}`}>
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