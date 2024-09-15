import './FAQ.css'

function FAQ(){

    return (
        <>
            <div className="faq-container" id="faq">
                <div className="faq-box">
                    <h2 className="faq-title">FAQ</h2>
                    <ul className="faq-content">
                    <li className="faq-item">
                        <p className='faq-question'>
                            How can I track the status of my order?
                        </p>
                        <div className="faq-button-show button-show"></div>
                        <p className='faq-answer'>After placing your order, you will receive
                             a confirmation email containing your order number and a tracking link. 
                             You can also log in to your account on our website and go to the "My Orders" 
                             section to track your delivery status.
                        </p>
                    </li>
                    <li className="faq-item">
                        <p className='faq-question'>
                            What payment methods do you accept?
                        </p>
                        <div className="faq-button-show"></div>
                        <p className='faq-answer'></p>
                    </li>
                    <li className="faq-item">
                        <p className='faq-question'>How can I return or exchange an item?</p>
                        <div className="faq-button-show"></div>
                        <p className='faq-answer'></p>
                    </li>
                </ul>
                </div>   
            </div>
        </>
    )
}

export default FAQ