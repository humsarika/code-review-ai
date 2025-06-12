import React, { useState } from 'react';
import '../styles/global.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div 
        className="faq-question" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="faq-toggle">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "Is this code reviewer free?",
      answer: "Yes, it's free to use."
    },
    {
      question: "What languages are supported?",
      answer: "Currently, all major languages like JS, Python, C++, Java are auto-detected."
    },
    {
      question: "Can I upload files?",
      answer: "File upload feature is in development — stay tuned!"
    }
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <FAQItem 
          key={index} 
          question={item.question} 
          answer={item.answer} 
        />
      ))}
    </div>
  );
};

export default FAQ;
