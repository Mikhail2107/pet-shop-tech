import { useState } from 'react'; 
import './FAQ.css';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null); 

    const toggleAnswer = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); 
        } else {
            setOpenIndex(index); 
        }
    };

    return (
        <>
            <div className="faq-container" id="faq">
                <div className="faq-box">
                    <h2 className="faq-title">FAQ</h2>
                    <ul className="faq-content">
                        <li className="faq-item">
                            <p className='faq-question' onClick={() => toggleAnswer(0)}>
                                How can I track the status of my order?
                            </p>
                            <div 
                                className={`faq-button-show ${openIndex === 0 ? 'button-show' : ''}`} 
                                onClick={() => toggleAnswer(0)}
                            ></div>
                            {openIndex === 0 && (
                                <p className='faq-answer'>After placing your order, you will receive
                                    a confirmation email containing your order number and a tracking link. 
                                    You can also log in to your account on our website and go to the "My Orders" 
                                    section to track your delivery status.
                                </p>
                            )}
                        </li>
                        <li className="faq-item">
                            <p className='faq-question' onClick={() => toggleAnswer(1)}>
                                What payment methods do you accept?
                            </p>
                            <div 
                                className={`faq-button-show ${openIndex === 1 ? 'button-show' : ''}`} 
                                onClick={() => toggleAnswer(1)}
                            ></div>
                            {openIndex === 1 && (
                                <p className='faq-answer'>We accept various payment methods including credit cards, 
                                    PayPal, and bank transfers.
                                </p>
                            )}
                        </li>
                        <li className="faq-item">
                            <p className='faq-question' onClick={() => toggleAnswer(2)}>
                                How can I return or exchange an item?
                            </p>
                            <div 
                                className={`faq-button-show ${openIndex === 2 ? 'button-show' : ''}`} 
                                onClick={() => toggleAnswer(2)}
                            ></div>
                            {openIndex === 2 && (
                                <p className='faq-answer'>To return or exchange an item, please visit our return policy 
                                    section for detailed instructions.
                                </p>
                            )}
                        </li>
                    </ul>
                </div>   
            </div>
        </>
    );
}

export default FAQ;
