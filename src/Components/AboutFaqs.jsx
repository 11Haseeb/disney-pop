import React, { useEffect, useState } from "react";
import AboutFaqsAccordion from "./AboutFaqsAccordion";

export default function AboutFaqs(props) {
  const { customStyle1, customStyle2 } = props;

  const [accordion, setAccordion] = useState([]);

  const faqs = [
    {
      question: "What is Tech Innovate?",
      answer:
        "Tech Innovate is a platform dedicated to providing the latest news, articles, and entertainment centered around technology and innovation. We aim to inform and entertain tech enthusiasts with a unique blend of content.",
    },
    {
      question: "How can I stay updated with your latest content?",
      answer:
        "You can stay updated by following us on social media, subscribing to our newsletter, and regularly visiting our website for new articles and updates.",
    },
    {
      question: "How do I get a new joke in a specific category?",
      answer: `Simply click the "New Joke" button within the category box on the homepage, and a new joke will be generated for you.`,
    },
    {
      question: "Can I suggest a joke or content?",
      answer: `Yes, we welcome suggestions! Please use the Contact Page to send us your joke or content ideas.`,
    },
    {
      question:
        "What should I do if I encounter a bug or issue on the website?",
      answer:
        "If you encounter any issues, please report them to us through the Contact page. Provide as much detail as possible so we can resolve the problem quickly.",
    },
    {
      question: "How do you handle my personal information?",
      answer:
        "We take your privacy seriously. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your data.",
    },
  ];

  useEffect(() => {
    setAccordion(faqs);
  }, []);

  return (
    <div>
      {accordion.map((element, index) => {
        return (
          <div key={index}>
            <AboutFaqsAccordion
              question={element.question}
              answer={element.answer}
              id={`accordion-${index}`}
              customStyle1={customStyle1}
              customStyle2={customStyle2}
            />
          </div>
        );
      })}
    </div>
  );
}
