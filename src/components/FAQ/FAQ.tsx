import { useState } from 'react';
import './FAQ.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean; 
}

function FAQ() {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    { id: 0, 
      question: 'How can I track the status of my order?', 
      answer: 'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.', 
      isOpen: false },
    { id: 1, 
      question: 'What payment methods do you accept?', 
      answer: 'We accept various payment methods including credit cards, PayPal, and bank transfers.', 
      isOpen: false },
    { id: 2, 
      question: 'How can I return or exchange an item?', 
      answer: 'To return or exchange an item, please visit our return policy section for detailed instructions.', 
      isOpen: false },
  ]);

  const toggleAnswer = (index: number) => {
    setFaqItems(prevItems => {
      const updatedItems = [...prevItems];

      updatedItems[index].isOpen = !updatedItems[index].isOpen;
      console.log(updatedItems[index].isOpen)

      return updatedItems;
    });
  };


  return (
    <>
      <div className="faq-container" id="faq">
        <div className="faq-box">
          <h2 className="faq-title">FAQ</h2>
          <ul className="faq-content">
            {faqItems.map((item, index) => (
              <li key={item.id} className="faq-item">
                <p className='faq-question'>{item.question}</p>
                <button aria-label='show'
                  className={`faq-button-show ${item.isOpen ? 'button-show' : ''}`} 
                  onClick={() => toggleAnswer(index)} 
                ></button>                
                  <p className={`faq-answer ${item.isOpen ? 'button-show' : ''}`}>{item.answer}</p>
                
              </li>
            ))}
          </ul>
        </div>   
      </div>
    </>
  );
}

export default FAQ;
