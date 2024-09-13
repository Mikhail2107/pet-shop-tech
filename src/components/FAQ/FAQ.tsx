
import './FAQ.css'

function FAQ(){

    return (
        <>
            <div className="faq-container" id="faq">
                <h2 className="faq-title">FAQ</h2>
                <ul className="faq-content">
                    <li className="faq-item">
                        <p className='faq-question'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, delectus!</p>
                        <div className="faq-button-show"></div>
                        <p className='faq-answer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sed!</p>
                    </li>
                    <li className="faq-item">
                        <p className='faq-question'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, delectus!</p>
                        <div className="faq-button-show"></div>
                        <p className='faq-answer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sed!</p>
                    </li>
                    <li className="faq-item">
                        <p className='faq-question'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, delectus!</p>
                        <div className="faq-button-show button-show"></div>
                        <p className='faq-answer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sed!</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default FAQ