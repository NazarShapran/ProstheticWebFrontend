import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const faqs = [
  {
    question: "Хто може подати заявку на отримання протеза?",
    answer:
      "Подати заявку може будь-яка особа, яка втратила кінцівку та має підтверджуючі документи.",
  },
  {
    question: "Які документи необхідні для оформлення заявки?",
    answer:
      "Необхідно надати паспорт, ІПН, довідку про втрату кінцівки та медичний висновок.",
  },
  {
    question: "Скільки часу триває розгляд заявки?",
    answer:
      "Розгляд заявки займає від 3 до 10 робочих днів, залежно від повноти наданих даних.",
  },
  {
    question: "Чи можу я змінити обраний протез після подачі заявки?",
    answer:
      "Так, ви можете зв’язатися з нами для внесення змін до заявки до моменту виготовлення протеза.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-container">
      <h2>Часті запитання</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              className={`faq-item ${isOpen ? "open" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-header">
                <span className="faq-question">{faq.question}</span>
                <KeyboardArrowDownIcon
                  className={`faq-icon ${isOpen ? "rotated" : ""}`}
                />
              </div>
              <div
                className="faq-answer-wrapper"
                style={{
                  maxHeight: isOpen ? "500px" : "0",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
