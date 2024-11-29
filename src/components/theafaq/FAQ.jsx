import React, { useState } from "react";
import "./FAQ.css"; // Add your styles here

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can I make a donation?",
      answer:
        "You can make a donation via our secure online platform using credit cards, PayPal, or bank transfers. Simply click on the 'Donate Now' button and follow the instructions.",
    },
    {
      question: "Are my donations tax-deductible?",
      answer:
        "Yes, donations are tax-deductible in most countries. After making a donation, you will receive a receipt for tax purposes.",
    },
    {
      question: "How is my donation used?",
      answer:
        "Your donation will be used to fund various programs and initiatives, including education, healthcare, disaster relief, and other charitable activities.",
    },
    {
      question: "Can I donate anonymously?",
      answer:
        "Yes, you can choose to make your donation anonymously by selecting the anonymous option during the donation process.",
    },
    {
      question: "How do I know my donation is secure?",
      answer:
        "We use industry-standard encryption and secure payment gateways to ensure your information is safe. Your privacy and security are our top priorities.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
