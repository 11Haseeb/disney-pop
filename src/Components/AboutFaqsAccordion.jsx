import React from "react";

export default function AboutFaqsAccordion(props) {
  const { question, answer, id, customStyle1, customStyle2 } = props;

  return (
    <div
      className="accordion accordion-flush my-1 t-border-2"
      id={`accordion-${id}`}
    >
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            aria-controls={`flush-collapsed-${id}`}
            aria-expanded="false"
            className="accordion-button collapsed"
            data-bs-target={`#flush-collapse${id}`}
            data-bs-toggle="collapse"
            type="button"
            style={customStyle2}
          >
            {question}
          </button>
        </h2>
        <div
          className="accordion-collapse collapse"
          data-bs-parent={`#accordionFlush${id}`}
          id={`flush-collapse${id}`}
          style={customStyle1}
        >
          <div className="accordion-body">{answer}</div>
        </div>
      </div>
    </div>
  );
}
